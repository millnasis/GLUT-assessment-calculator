import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../reducers/userMessage.js";
const { change_message } = actions;
import { List, Input, PageHeader } from "antd";
import {
  actions as rootActions,
  allEditingValue,
} from "../../reducers/rootReducer";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { change_editing } = rootActions;

const totalState = ["collegeName","gradeAndClass", "IdNum", "name", "politicStatus"];

function renderState(stateName) {
  switch (stateName) {
    case totalState[0]:
      return "学院";
    case totalState[1]:
      return "专业班级";
    case totalState[2]:
      return "学号";
    case totalState[3]:
      return "姓名";
    case totalState[4]:
      return "政治面貌";
  }
}

class MessageControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="controlInner">
        <List
          header={
            <PageHeader
              title="个人信息"
              subTitle="填写你的个人信息用于生成综测文件"
              onBack={() => this.props.change_editing(allEditingValue.NONE)}
              backIcon={
                <>
                  <ArrowLeftOutlined></ArrowLeftOutlined>返回
                </>
              }
            ></PageHeader>
          }
          bordered
          dataSource={totalState}
          renderItem={(item) => (
            <List.Item>
              <label style={{ whiteSpace: "nowrap" }}>
                {renderState(item) + "："}
              </label>
              <Input
                value={this.props[item]}
                onChange={(e) => {
                  this.props.change_message(item, e.nativeEvent.target.value);
                }}
              ></Input>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.message,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_message: bindActionCreators(change_message, dispatch),
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageControl);
