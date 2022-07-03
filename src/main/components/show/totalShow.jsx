import React from "react";
import { connect } from "react-redux";

class TotalShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ability, moral, sport, study, setting } = this.props;
    const result =
      moral * (setting.moral / 100) +
      study * (setting.study / 100) +
      sport * (setting.sport / 100) +
      ability * (setting.ability / 100);
    return (
      <tbody>
        <tr height="19" style={{ height: " 14.25pt" }}>
          <td
            colSpan="9"
            height="19"
            className="xl92"
            style={{ height: " 14.25pt" }}
          >
            综测总分=德育总分（{moral && moral.toFixed(3)} ）*{setting.moral}
            %+智育总分（
            {study && study.toFixed(3)}）*{setting.study}%+体育总分（
            {sport && sport.toFixed(3)} ）*{setting.sport}%+能力总分（
            <span>&nbsp; </span>
            {ability && ability.toFixed(3)} ）*{setting.ability}%=
            {result && result.toFixed(3)}
          </td>
        </tr>
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    ability: state.ability.sum > 80 ? 100 : state.ability.sum + 20,
    moral: state.moral.total,
    sport: state.sport.total,
    study: state.study.sum,
    setting: state.setting,
  };
}

export default connect(mapStateToProps, null)(TotalShow);
