import React from "react";
import { connect } from "react-redux";

class AbilityShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sum } = this.props;
    return (
      <tbody>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            height="19"
            className="xl85"
            style={{ height: " 14.25pt" }}
          >
            能力加减分总计=<span>&nbsp; </span>（<span>&nbsp; </span>
            <strong>{sum}</strong>
            <span>&nbsp; </span>）
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            能力总分=基础分20+能力加减分总计（<span>&nbsp; </span>
            {sum}
            <span>&nbsp;&nbsp; </span>） =（<span>&nbsp; </span>
            <strong>{sum + 20}</strong> ）
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    sum: state.ability.sum,
  };
}

export default connect(mapStateToProps, null)(AbilityShow);
