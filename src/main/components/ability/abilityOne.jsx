import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions, allEditingValue } from "../../reducers/rootReducer.js";
const { change_editing } = actions;

class AbilityOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let arr = this.props.Item;
    return (
      <tbody
        className={
          "component " +
          (this.props.editing === allEditingValue.ABILITY_ONE && "active")
        }
        onClick={() => {
          this.props.change_editing(
            this.props.editing === allEditingValue.ABILITY_ONE
              ? allEditingValue.NONE
              : allEditingValue.ABILITY_ONE
          );
        }}
      >
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl71"
            style={{ height: " 14.25pt", borderTop: " none" }}
          >
            加分项目
          </td>
          <td
            className="xl71"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分原因
          </td>
          <td
            className="xl71"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分
          </td>
          <td
            className="xl71"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分项目
          </td>
          <td
            className="xl71"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分原因
          </td>
          <td
            className="xl71"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分
          </td>
          <td
            className="xl71"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分项目
          </td>
          <td
            className="xl71"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分原因
          </td>
          <td
            className="xl71"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            rowSpan="5"
            height="95"
            className="xl72"
            style={{ height: " 71.25pt", borderTop: " none" }}
          >
            技能证书
          </td>
          <td
            className="xl69"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][0] && arr[0][1][0][0]}
          </td>
          <td
            className="xl73"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][0] && arr[0][1][0][1]}
          </td>
          <td rowSpan="5" className="xl72" style={{ borderTop: " none" }}>
            社会实践
          </td>
          <td
            className="xl69"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][0] && arr[1][1][0][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][0] && arr[1][1][0][1]}
          </td>
          <td
            rowSpan="5"
            className="xl74"
            width="111"
            style={{ borderTop: " none", width: " 83pt" }}
          >
            表彰奖励(相同性质表彰只加一次分)
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][1][0] && arr[2][1][0][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][1][0] && arr[2][1][0][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl69"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][1] && arr[0][1][1][0]}
          </td>
          <td
            className="xl73"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][1] && arr[0][1][1][1]}
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][1] && arr[1][1][1][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][1] && arr[1][1][1][1]}
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][1][1] && arr[2][1][1][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][1][1] && arr[2][1][1][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl69"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][2] && arr[0][1][2][0]}
          </td>
          <td
            className="xl73"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][2] && arr[0][1][2][1]}
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][2] && arr[1][1][2][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][2] && arr[1][1][2][1]}
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][1][2] && arr[2][1][2][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][1][2] && arr[2][1][2][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl69"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][3] && arr[0][1][3][0]}
          </td>
          <td
            className="xl73"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][3] && arr[0][1][3][1]}
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][3] && arr[1][1][3][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][3] && arr[1][1][3][1]}
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][1][3] && arr[2][1][3][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][1][3] && arr[2][1][3][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl69"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][4] && arr[0][1][4][0]}
          </td>
          <td
            className="xl73"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][4] && arr[0][1][4][1]}
          </td>
          <td
            className="xl69"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][4] && arr[1][1][4][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][4] && arr[1][1][4][1]}
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][1][4] && arr[2][1][4][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][1][4] && arr[2][1][4][1]}
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    editing: state.global.editing,
    Item: state.ability.partOne,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AbilityOne);
