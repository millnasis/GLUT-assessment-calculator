import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions, allEditingValue } from "../../reducers/rootReducer.js";
const { change_editing } = actions;

class AbilityThree extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let arr = this.props.Item;
    return (
      <tbody
        className={
          "component " +
          (this.props.editing === allEditingValue.ABILITY_THREE && "active")
        }
        onClick={() => {
          this.props.change_editing(
            this.props.editing === allEditingValue.ABILITY_THREE
              ? allEditingValue.NONE
              : allEditingValue.ABILITY_THREE
          );
        }}
      >
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl72"
            style={{ height: " 14.25pt", borderTop: " none" }}
          >
            减分项目
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            减分原因
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            减分
          </td>
          <td
            className="xl74"
            width="99"
            style={{
              borderTop: " none",
              borderLeft: " none",
              width: " 74pt",
            }}
          >
            　
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
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
            　
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            height="19"
            className="xl72"
            style={{ height: " 14.25pt", borderTop: " none" }}
          >
            听取讲座
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][0] && arr[0][1][0][0]}
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            {arr[0][1][0] && arr[0][1][0][1]}
          </td>
          <td
            className="xl74"
            width="99"
            style={{
              borderTop: " none",
              borderLeft: " none",
              width: " 74pt",
            }}
          >
            　
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
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
            　
          </td>
          <td
            className="xl75"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
          <td
            className="xl72"
            style={{ borderTop: " none", borderLeft: " none" }}
          >
            　
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    editing: state.global.editing,
    Item: state.ability.partThree,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change_editing: bindActionCreators(change_editing, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AbilityThree);
