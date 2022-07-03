import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../reducers/sport.js";
const { change_item } = actions;
import { Input, Form, Space, Divider, PageHeader } from "antd";
import {
  actions as rootActions,
  allEditingValue,
} from "../../reducers/rootReducer";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { change_editing } = rootActions;

class SportControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { total } = this.props;
    total = total ? total : 0;
    return (
      <div className="controlInner">
        <PageHeader
          title="体育综测计算"
          onBack={() => this.props.change_editing(allEditingValue.NONE)}
          subTitle={<span>体育总分：{total.toFixed(3)}</span>}
          backIcon={
            <>
              <ArrowLeftOutlined></ArrowLeftOutlined>返回
            </>
          }
        ></PageHeader>
        <Divider></Divider>
        <Form>
          <Form.Item>
            <div>
              <h2>
                <strong>基础分计算</strong>
              </h2>
            </div>
          </Form.Item>
          {this.props.baseItem.map((item, index) => {
            const [labelName, point] = item;
            return (
              <div key={labelName}>
                <Space>
                  <Form.Item>
                    <div className="control-label">
                      <label>{labelName}</label>
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <Input
                      addonBefore="成绩"
                      value={point}
                      type={"number"}
                      onChange={(e) => {
                        this.props.change_item(
                          0,
                          index,
                          1,
                          e.nativeEvent.target.value
                        );
                      }}
                    ></Input>
                  </Form.Item>
                </Space>
              </div>
            );
          })}
        </Form>
        <Divider></Divider>
        <Form>
          <Form.Item>
            <div>
              <h2>
                <strong>体育加分项</strong>
              </h2>
            </div>
          </Form.Item>
          {this.props.addItem.map((item, index) => {
            const [labelName, description, point] = item;
            return (
              <div key={labelName}>
                <Space>
                  <Form.Item>
                    <div className="control-label">
                      <label>{labelName}</label>
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <Input
                      addonBefore="加分原因"
                      value={description}
                      onChange={(e) => {
                        this.props.change_item(
                          1,
                          index,
                          1,
                          e.nativeEvent.target.value
                        );
                      }}
                    ></Input>
                    <Input
                      addonBefore="加分"
                      type={"number"}
                      value={point}
                      onChange={(e) => {
                        this.props.change_item(
                          1,
                          index,
                          2,
                          e.nativeEvent.target.value
                        );
                      }}
                    ></Input>
                  </Form.Item>
                </Space>
              </div>
            );
          })}
        </Form>
        <Divider></Divider>
        <Form>
          <Form.Item>
            <div>
              <h2>
                <strong>体育减分项</strong>
              </h2>
            </div>
          </Form.Item>
          {this.props.minusItem.map((item, index) => {
            const [labelName, description, point] = item;
            return (
              <div key={labelName}>
                <Space>
                  <Form.Item>
                    <div className="control-label">
                      <label>{labelName}</label>
                    </div>
                  </Form.Item>
                  <Form.Item>
                    <Input
                      addonBefore="减分原因"
                      value={description}
                      onChange={(e) => {
                        this.props.change_item(
                          2,
                          index,
                          1,
                          e.nativeEvent.target.value
                        );
                      }}
                    ></Input>
                    <Input
                      addonBefore="减分"
                      type={"number"}
                      value={point}
                      onChange={(e) => {
                        this.props.change_item(
                          2,
                          index,
                          2,
                          e.nativeEvent.target.value
                        );
                      }}
                    ></Input>
                  </Form.Item>
                </Space>
              </div>
            );
          })}
        </Form>
        <Divider></Divider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.sport,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_item: bindActionCreators(change_item, dispatch),
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SportControl);
