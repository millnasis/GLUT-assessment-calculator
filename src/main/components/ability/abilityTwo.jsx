import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions, allEditingValue } from "../../reducers/rootReducer.js";
const { change_editing } = actions;

class AbilityTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let arr = this.props.Item;
    return (
      <tbody
        className={
          "component " +
          (this.props.editing === allEditingValue.ABILITY_TWO && "active")
        }
        onClick={() => {
          this.props.change_editing(
            this.props.editing === allEditingValue.ABILITY_TWO
              ? allEditingValue.NONE
              : allEditingValue.ABILITY_TWO
          );
        }}
      >
        <tr height="34" style={{ height: " 14.25pt" }}>
          <td
            rowSpan="11"
            height="237"
            className="xl93"
            width="107"
            style={{
              borderBottom: " 0.5pt solid black",
              height: " 177.75pt",
              borderTop: " none",
              width: " 80pt",
            }}
          >
            学科竞赛
            <br />
            科技活动
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][0] && arr[0][1][0][0]}
            <span style={{ display: " none" }}>竞赛三等奖</span>
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][0] && arr[0][1][0][1]}
          </td>
          <td
            rowSpan="6"
            className="xl74"
            width="99"
            style={{ borderTop: " none", width: " 74pt" }}
          >
            文体竞赛
          </td>
          <td
            className="xl72"
            width="113"
            style={{
              borderTop: " none",
              borderLeft: " none",
              width: " 85pt",
            }}
          >
            {arr[1][1][0] && arr[1][1][0][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][0] && arr[1][1][0][1]}
          </td>
          <td rowSpan="4" className="xl72">
            学干任职
          </td>
          <td
            className="xl72"
            width="101"
            style={{ borderTop: " none", width: " 76pt" }}
          >
            {arr[3][1][0] && arr[3][1][0][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[3][1][0] && arr[3][1][0][1]}
          </td>
        </tr>
        <tr height="32" style={{ height: " 14.25pt" }}>
          <td
            height="32"
            className="xl72"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][1] && arr[0][1][1][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][1] && arr[0][1][1][1]}
          </td>
          <td className="xl72" width="113" style={{ width: " 85pt" }}>
            {arr[1][1][1] && arr[1][1][1][0]}
          </td>
          <td className="xl72" style={{ borderTop: " none" }}>
            {arr[1][1][1] && arr[1][1][1][1]}
          </td>
          <td
            className="xl72"
            width="101"
            style={{ borderTop: " none", width: " 76pt" }}
          >
            {arr[3][1][1] && arr[3][1][1][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[3][1][1] && arr[3][1][1][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl72"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][2] && arr[0][1][2][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][2] && arr[0][1][2][1]}
          </td>
          <td className="xl72" style={{ borderLeft: " none" }}>
            {arr[1][1][2] && arr[1][1][2][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][2] && arr[1][1][2][1]}
          </td>
          <td className="xl72" style={{ borderTop: " none" }}>
            {arr[3][1][2] && arr[3][1][2][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[3][1][2] && arr[3][1][2][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl72"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][3] && arr[0][1][3][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][3] && arr[0][1][3][1]}
          </td>
          <td
            className="xl72"
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
          <td className="xl72" style={{ borderTop: " none" }}>
            {arr[3][1][3] && arr[3][1][3][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[3][1][3] && arr[3][1][3][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl72"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][4] && arr[0][1][4][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][4] && arr[0][1][4][1]}
          </td>
          <td
            className="xl72"
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
            rowSpan="2"
            className="xl94"
            width="111"
            style={{ borderBottom: " 0.5pt solid black", width: " 83pt" }}
          >
            发表科研论文
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[4][1][0] && arr[4][1][0][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[4][1][0] && arr[4][1][0][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl72"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][5] && arr[0][1][5][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][5] && arr[0][1][5][1]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][5] && arr[1][1][5][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1][5] && arr[1][1][5][1]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[4][1][1] && arr[4][1][1][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[4][1][1] && arr[4][1][1][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl72"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][6] && arr[0][1][6][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][6] && arr[0][1][6][1]}
          </td>
          <td
            rowSpan="5"
            className="xl74"
            width="99"
            style={{ borderTop: " none", width: " 74pt" }}
          >
            文章、征文、消息、简讯发表在校级刊物
          </td>
          <td
            className="xl72"
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
          <td
            rowSpan="4"
            className="xl93"
            width="111"
            style={{
              borderBottom: " 0.5pt solid black",
              borderTop: " none",
              width: " 83pt",
            }}
          >
            各类文化活动
            <br />
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][1][0] && arr[5][1][0][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][1][0] && arr[5][1][0][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl72"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][7] && arr[0][1][7][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][7] && arr[0][1][7][1]}
          </td>
          <td
            className="xl72"
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
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][1][1] && arr[5][1][1][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][1][1] && arr[5][1][1][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl72"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][8] && arr[0][1][8][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][8] && arr[0][1][8][1]}
          </td>
          <td
            className="xl72"
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
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][1][2] && arr[5][1][2][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][1][2] && arr[5][1][2][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl72"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][9] && arr[0][1][9][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][9] && arr[0][1][9][1]}
          </td>
          <td
            className="xl72"
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
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][1][3] && arr[5][1][3][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][1][3] && arr[5][1][3][1]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl72"
            style={{
              height: " 14.25pt",
              borderTop: " none",
              borderLeft: " none",
            }}
          >
            {arr[0][1][10] && arr[0][1][10][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][10] && arr[0][1][10][1]}
          </td>
          <td
            className="xl72"
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
          <td
            className="xl74"
            width="111"
            style={{
              borderTop: " none",
              borderLeft: " none",
              width: " 83pt",
            }}
          >
            其他情况
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[6][1][0] && arr[6][1][0][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[6][1][0] && arr[6][1][0][1]}
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    editing: state.global.editing,
    Item: state.ability.partTwo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AbilityTwo);
