import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions, allEditingValue } from "../../reducers/rootReducer.js";
const { change_editing } = actions;

class MoralADD extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arr = this.props.addItem;
    return (
      <tbody
        className={
          "component " +
          (this.props.editing === allEditingValue.MORAL_ADD && "active")
        }
        onClick={() => {
          this.props.change_editing(this.props.editing === allEditingValue.MORAL_ADD
              ? allEditingValue.NONE
              : allEditingValue.MORAL_ADD);
        }}
      >
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl66"
            style={{ height: " 14.25pt", borderTop: " none" }}
          >
            加分项目
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分原因
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分项目
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分原因
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分项目
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分原因
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            加分
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl67"
            style={{ height: " 14.25pt", borderTop: " none" }}
          >
            {arr[0][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1]}
          </td>
          <td
            className="xl67"
            align="right"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][2]}
          </td>
          <td
            className="xl69"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[3][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[3][1]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[3][2]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[6][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[6][1]}
          </td>
          <td
            className="xl67"
            align="right"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[6][2]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl67"
            style={{ height: " 14.25pt", borderTop: " none" }}
          >
            {arr[1][0]}
          </td>
          <td className="xl78">{arr[1][1]}</td>
          <td className="xl67" style={{ borderTop: " none" }}>
            {arr[1][2]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[4][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[4][1]}
          </td>
          <td
            className="xl67"
            align="right"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[4][2]}
          </td>
          <td
            className="xl73"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[7][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[7][1]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[7][2]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl67"
            style={{ height: " 14.25pt", borderTop: " none" }}
          >
            {arr[2][0]}
          </td>
          <td className="xl78" style={{ borderLeft: " none" }}>
            {arr[2][1]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][2]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][1]}
          </td>
          <td
            className="xl67"
            align="right"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][2]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[8][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[8][1]}
          </td>
          <td
            className="xl67"
            align="right"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[8][2]}
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    editing: state.global.editing,
    addItem: state.moral.addItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoralADD);
