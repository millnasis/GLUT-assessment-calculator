import ReactDOM from "react-dom";
import React from "react";
import { Card, Col, Form, Row, Slider, Radio, Button } from "antd";
import "antd/dist/antd.css";
import "./index.scss";
import { defaultSetting } from "../source/constant";

const { Item } = Form;

const marks = {
  0: "0",
  20: "20",
  25: "25",
  85: "85",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100</strong>,
  },
};

function spawnDefaultValue(object) {
  return {
    moral: [0, object.moral],
    sport: [object.moral, object.moral + object.sport],
    study: [
      object.moral + object.sport,
      object.moral + object.sport + object.study,
    ],
    ability: [
      object.moral + object.sport + object.study,
      object.moral + object.sport + object.study + object.ability,
    ],
  };
}

const defaultValue = spawnDefaultValue(defaultSetting);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moral: defaultValue.moral,
      sport: defaultValue.sport,
      study: defaultValue.study,
      ability: defaultValue.ability,
      save: true,
    };
  }

  componentDidMount() {
    window.Setting.onGetSetting((e, setting) => {
      const newValue = spawnDefaultValue(setting);
      console.log(setting, newValue);
      this.setState({
        moral: newValue.moral,
        sport: newValue.sport,
        study: newValue.study,
        ability: newValue.ability,
      });
    });
  }

  render() {
    return (
      <div className="warp">
        <Card bordered={false} style={{ background: "transparent" }}>
          <Form title="设置">
            <h1>设置</h1>
            <Form.Item label="预设配置">
              <Radio.Group value={"none"}>
                <Radio.Button
                  value="default"
                  onClick={() => {
                    this.setState({
                      moral: defaultValue.moral,
                      sport: defaultValue.sport,
                      study: defaultValue.study,
                      ability: defaultValue.ability,
                      save: this.state.save ? false : this.state.save,
                    });
                  }}
                >
                  默认
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Item label="德育" required>
              <Row gutter={[16, 16]}>
                <Col span={18}>
                  <Slider
                    marks={marks}
                    tipFormatter={(value) => value + "%"}
                    range={{ draggableTrack: true }}
                    value={this.state.moral}
                    onChange={(value) => {
                      if (value[1] > this.state.sport[0]) {
                        return;
                      }
                      this.setState({
                        moral: value,
                        save: this.state.save ? false : this.state.save,
                      });
                    }}
                  ></Slider>
                </Col>
                <Col span={6}>
                  <h2>{this.state.moral[1] - this.state.moral[0]}%</h2>
                </Col>
              </Row>
            </Item>
            <Item label="体育" required>
              <Row gutter={[16, 16]}>
                <Col span={18}>
                  <Slider
                    marks={marks}
                    tipFormatter={(value) => value + "%"}
                    range={{ draggableTrack: true }}
                    value={this.state.sport}
                    onChange={(value) => {
                      if (
                        value[0] < this.state.moral[1] ||
                        value[1] > this.state.study[0]
                      ) {
                        return;
                      }
                      this.setState({
                        sport: value,
                        save: this.state.save ? false : this.state.save,
                      });
                    }}
                  ></Slider>
                </Col>
                <Col span={6}>
                  <h2>{this.state.sport[1] - this.state.sport[0]}%</h2>
                </Col>
              </Row>
            </Item>
            <Item label="智育" required>
              <Row gutter={[16, 16]}>
                <Col span={18}>
                  <Slider
                    marks={marks}
                    tipFormatter={(value) => value + "%"}
                    range={{ draggableTrack: true }}
                    value={this.state.study}
                    onChange={(value) => {
                      if (
                        value[0] < this.state.sport[1] ||
                        value[1] > this.state.ability[0]
                      ) {
                        return;
                      }
                      this.setState({
                        study: value,
                        save: this.state.save ? false : this.state.save,
                      });
                    }}
                  ></Slider>
                </Col>
                <Col span={6}>
                  <h2>{this.state.study[1] - this.state.study[0]}%</h2>
                </Col>
              </Row>
            </Item>
            <Item label="能力" required>
              <Row gutter={[16, 16]}>
                <Col span={18}>
                  <Slider
                    marks={marks}
                    tipFormatter={(value) => value + "%"}
                    range={{ draggableTrack: true }}
                    value={this.state.ability}
                    onChange={(value) => {
                      if (value[0] < this.state.study[1]) {
                        return;
                      }
                      this.setState({
                        ability: value,
                        save: this.state.save ? false : this.state.save,
                      });
                    }}
                  ></Slider>
                </Col>
                <Col span={6}>
                  <h2>{this.state.ability[1] - this.state.ability[0]}%</h2>
                </Col>
              </Row>
            </Item>
            <Item wrapperCol={{ offset: 16 }}>
              {!this.state.save && (
                <Button
                  type="primary"
                  size="large"
                  onClick={() => {
                    window.Setting.newSetting({
                      moral: +this.state.moral[1] - +this.state.moral[0],
                      sport: +this.state.sport[1] - +this.state.sport[0],
                      study: +this.state.study[1] - +this.state.study[0],
                      ability: +this.state.ability[1] - +this.state.ability[0],
                    });
                    console.log({
                      moral: +this.state.moral[1] - +this.state.moral[0],
                      sport: +this.state.sport[1] - +this.state.sport[0],
                      study: +this.state.study[1] - +this.state.study[0],
                      ability: +this.state.ability[1] - +this.state.ability[0],
                    });
                    this.setState({
                      save: true,
                    });
                  }}
                >
                  保存
                </Button>
              )}
            </Item>
          </Form>
        </Card>
      </div>
    );
  }
}

ReactDOM.render(<Home></Home>, document.querySelector("#app"));
