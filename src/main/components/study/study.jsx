import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions, allEditingValue } from "../../reducers/rootReducer.js";
const { change_editing } = actions;

class Study extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let sum = this.props.sum
      ? this.props.sum.toFixed(3)
      : this.props.sum;
    return (
      <tbody
        className={
          "component " +
          (this.props.editing === allEditingValue.STUDY && "active")
        }
        onClick={() => {
          this.props.change_editing(
            this.props.editing === allEditingValue.STUDY
              ? allEditingValue.NONE
              : allEditingValue.STUDY
          );
        }}
      >
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            height="19"
            className="xl89"
            style={{ height: " 14.25pt" }}
          >
            第三部分：智育素质测评分
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            height="19"
            className="xl91"
            style={{ height: " 14.25pt" }}
          >
            算法：智育测评成绩=∑（课程百分制成绩×该课程学分）／∑课程学分
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            height="19"
            className="xl91"
            style={{ height: " 14.25pt" }}
          >
            注意：体育课和公共选修课不计入智育测评，选修专业限选课的，其限选课计入智育测评
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            height="19"
            className="xl66"
            style={{ height: " 14.25pt" }}
          >
            智育总分=（<span>&nbsp;&nbsp; </span>
            <strong>{sum}</strong>
            <span>&nbsp; </span>）
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    editing: state.global.editing,
    sum: state.study.sum,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Study);
