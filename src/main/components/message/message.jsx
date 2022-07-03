import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions, allEditingValue } from "../../reducers/rootReducer.js";
const { change_editing } = actions;

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { collegeName, gradeAndClass, IdNum, name, politicStatus } =
      this.props;
    return (
      <tbody
        className={
          "component " +
          (this.props.editing === allEditingValue.MESSAGE && "active")
        }
        onClick={() => {
          this.props.change_editing(
            this.props.editing === allEditingValue.MESSAGE
              ? allEditingValue.NONE
              : allEditingValue.MESSAGE
          );
        }}
      >
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            rowSpan="2"
            height="28"
            className="xl96"
            width="755"
            style={{ height: " 21pt", width: " 566pt" }}
          >
            <a name="Print_Area">
              {collegeName + "学生个人学年综合素质测评评分表"}
            </a>
          </td>
        </tr>
        <tr height="9" style={{ height: " 6.75pt" }}></tr>
        <tr height="30" style={{ height: " 22.5pt" }}>
          <td
            colSpan="9"
            height="30"
            className="xl85"
            style={{ height: " 22.5pt" }}
          >
            <font className="font27">
              {`专业班级：${gradeAndClass} 学号：${IdNum}  姓名：${name}`}
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
              {`政治面貌：${politicStatus}`}
              <span>&nbsp;&nbsp; </span>学生本人确认签名：
            </font>
            <font className="font26">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </font>
          </td>
        </tr>
        <tr height="38" style={{ height: " 28.5pt" }}>
          <td
            colSpan="9"
            height="38"
            className="xl86"
            style={{ borderRight: " 0.5pt solid black", height: " 28.5pt" }}
          >
            测评小组成员确认无误后签名：
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    editing: state.global.editing,
    ...state.message,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
