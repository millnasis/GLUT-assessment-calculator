import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions, allEditingValue } from "../../reducers/rootReducer.js";
const { change_editing } = actions;

class MorralMinus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arr = this.props.minusItem;
    return (
      <tbody
        className={
          "component " +
          (this.props.editing === allEditingValue.MORAL_MINUS && "active")
        }
        onClick={() => {
          this.props.change_editing(
            this.props.editing === allEditingValue.MORAL_MINUS
              ? allEditingValue.NONE
              : allEditingValue.MORAL_MINUS
          );
        }}
      >
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl66"
            style={{ height: " 14.25pt", borderTop: " none" }}
          >
            减分项目
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            减分原因
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            减分
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            减分项目
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            减分原因
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            减分
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            减分项目
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            减分原因
          </td>
          <td
            className="xl66"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            减分
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
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][2]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[2][0]}
          </td>
          <td className="xl78">{arr[2][1]}</td>
          <td className="xl67" style={{ borderTop: " none" }}>
            {arr[2][2]}
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
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[4][2]}
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
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][1]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[1][2]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[3][0]}
          </td>
          <td className="xl78" style={{ borderLeft: " none" }}>
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
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[5][2]}
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    editing: state.global.editing,
    minusItem: state.moral.minusItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MorralMinus);
