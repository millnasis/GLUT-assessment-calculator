import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../reducers/moral.js";
const { change_item } = actions;
import { Input, Form, Space, Divider, PageHeader } from "antd";
import {
  actions as rootActions,
  allEditingValue,
} from "../../reducers/rootReducer";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { change_editing } = rootActions;

class MoralADDControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="controlInner">
        <PageHeader
          title="德育加分项"
          onBack={() => this.props.change_editing(allEditingValue.NONE)}
          subTitle={<span>德育总分：{this.props.total}</span>}
          backIcon={
            <>
              <ArrowLeftOutlined></ArrowLeftOutlined>返回
            </>
          }
        ></PageHeader>
        <Form layout="inline">
          <Divider></Divider>
          {this.props.addItem.map((item, index) => {
            const [labelName, description, point] = item;
            return (
              <div key={labelName}>
                <Space key={labelName}>
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
                          true,
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
                          true,
                          index,
                          2,
                          e.nativeEvent.target.value
                        );
                      }}
                    ></Input>
                  </Form.Item>
                </Space>
                <Divider></Divider>
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
    addItem: state.moral.addItem,
    total: state.moral.total,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_item: bindActionCreators(change_item, dispatch),
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoralADDControl);
