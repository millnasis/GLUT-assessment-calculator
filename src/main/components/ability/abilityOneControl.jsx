import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../reducers/ability";
const { add_item, change_item, delete_item } = actions;
import { Input, Form, Space, Divider, Button, message, PageHeader } from "antd";
import {
  ArrowLeftOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Transition, TransitionGroup } from "react-transition-group";
import {
  actions as rootActions,
  allEditingValue,
} from "../../reducers/rootReducer";
const { change_editing } = rootActions;

const globalStateName = "partOne";

const duration = 200;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 1,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

class AbilityOneControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { sum } = this.props;
    sum = sum > 80 ? 100 : sum + 20;
    return (
      <div className="controlInner">
        <PageHeader
          title="能力加分项（一）"
          onBack={() => this.props.change_editing(allEditingValue.NONE)}
          subTitle={<span>能力总分：{sum.toFixed(3)}</span>}
          backIcon={
            <>
              <ArrowLeftOutlined></ArrowLeftOutlined>返回
            </>
          }
        ></PageHeader>
        <Form>
          {this.props.Item.map((v, i) => {
            const [stateName, arr, max] = v;
            return (
              <div key={stateName}>
                <Divider></Divider>
                <h3>{stateName}</h3>
                <TransitionGroup>
                  {arr.map((e, ei) => {
                    const [description, point, id] = e;
                    return (
                      <Transition key={id} timeout={duration}>
                        {(state) => (
                          <div
                            style={{
                              ...defaultStyle,
                              ...transitionStyles[state],
                            }}
                          >
                            <Space>
                              <Form.Item>
                                <Input
                                  addonBefore="加分原因"
                                  value={description}
                                  onChange={(e) =>
                                    this.props.change_item(
                                      globalStateName,
                                      i,
                                      id,
                                      0,
                                      e.nativeEvent.target.value
                                    )
                                  }
                                ></Input>
                              </Form.Item>
                              <Form.Item>
                                <Input
                                  addonBefore="加分"
                                  type={"number"}
                                  onChange={(e) =>
                                    this.props.change_item(
                                      globalStateName,
                                      i,
                                      id,
                                      1,
                                      e.nativeEvent.target.value
                                    )
                                  }
                                  value={point}
                                ></Input>
                              </Form.Item>
                              <Form.Item>
                                <MinusCircleOutlined
                                  onClick={() =>
                                    this.props.delete_item(
                                      globalStateName,
                                      i,
                                      id
                                    )
                                  }
                                ></MinusCircleOutlined>
                              </Form.Item>
                            </Space>
                          </div>
                        )}
                      </Transition>
                    );
                  })}
                </TransitionGroup>
                <Form.Item>
                  <Button
                    type="dashed"
                    block
                    onClick={() => {
                      if (arr.length >= max) {
                        return message.warning("内容项达到最大");
                      }
                      this.props.add_item(globalStateName, i);
                    }}
                    icon={<PlusOutlined></PlusOutlined>}
                  >
                    添加一项
                  </Button>
                </Form.Item>
              </div>
            );
          })}
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Item: state.ability.partOne,
    sum: state.ability.sum,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add_item: bindActionCreators(add_item, dispatch),
    change_item: bindActionCreators(change_item, dispatch),
    delete_item: bindActionCreators(delete_item, dispatch),
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AbilityOneControl);
