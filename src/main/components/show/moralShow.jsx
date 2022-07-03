import React from "react";
import { connect } from "react-redux";

class MoralShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sum, total } = this.props;
    return (
      <tbody>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            height="19"
            className="xl90"
            style={{ height: " 14.25pt" }}
          >
            德育加减分总计=（<span>&nbsp; </span>
            <strong>{sum}</strong> ）
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            德育总分=基础分70+加减分总计（ {sum} ） =（<span>&nbsp; </span>
            <strong>{total}</strong>
            <span>&nbsp; </span>）
          </td>
        </tr>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            height="19"
            className="xl91"
            style={{ height: " 14.25pt" }}
          >
            　
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.moral,
  };
}

export default connect(mapStateToProps, null)(MoralShow);
