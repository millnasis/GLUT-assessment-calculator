import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions, allEditingValue } from "../../reducers/rootReducer.js";
const { change_editing } = actions;

class Sport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const addarr = this.props.addItem;
    const minusarr = this.props.minusItem;
    return (
      <tbody
        className={
          "component " +
          (this.props.editing === allEditingValue.SPORT && "active")
        }
        onClick={() => {
          this.props.change_editing(
            this.props.editing === allEditingValue.SPORT
              ? allEditingValue.NONE
              : allEditingValue.SPORT
          );
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
            {addarr[0][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {addarr[0][1]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {addarr[0][2]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {addarr[1][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {addarr[1][1]}
          </td>
          <td
            className="xl67"
            align="right"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {addarr[1][2]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {minusarr[0][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {minusarr[0][1]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {minusarr[0][2]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl68"
            style={{ height: " 14.25pt", borderTop: " none" }}
          >
            　
          </td>
          <td
            className="xl68"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl68"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl68"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl68"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl68"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {minusarr[1][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {minusarr[1][1]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {minusarr[1][2]}
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl68"
            style={{ height: " 14.25pt", borderTop: " none" }}
          >
            　
          </td>
          <td
            className="xl68"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl68"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl68"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl68"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl68"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {minusarr[2][0]}
          </td>
          <td
            className="xl78"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {minusarr[2][1]}
          </td>
          <td
            className="xl67"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {minusarr[2][2]}
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    editing: state.global.editing,
    addItem: state.sport.addItem,
    minusItem: state.sport.minusItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sport);
