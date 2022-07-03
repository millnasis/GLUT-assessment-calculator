import React from "react";
import AbilityOne from "./ability/abilityOne.jsx";
import AbilityThree from "./ability/abilityThree.jsx";
import AbilityTwo from "./ability/abilityTwo.jsx";
import Control from "./control.jsx";
import Message from "./message/message.jsx";
import MoralADD from "./moral/moralAdd.jsx";
import MoralMinus from "./moral/moralMinus.jsx";
import AbilityShow from "./show/abilityShow.jsx";
import MoralShow from "./show/moralShow.jsx";
import SportShow from "./show/sportShow.jsx";
import TopShow from "./show/topShow.jsx";
import TotalShow from "./show/totalShow.jsx";
import Sport from "./sport/sport.jsx";
import Study from "./study/study.jsx";
import { connect } from "react-redux";

import { actions as settingActions } from "../reducers/setting";
import { actions as abilityActions } from "../reducers/ability";
import { actions as moralActions } from "../reducers/moral";
import { actions as messageActions } from "../reducers/userMessage";
import { actions as studyActions } from "../reducers/study";
import { actions as sportActions } from "../reducers/sport";

const { change_item } = settingActions;
const { rebuild_ability_obj } = abilityActions;
const { rebuild_moral_obj } = moralActions;
const { rebuild_message_obj } = messageActions;
const { rebuild_study_obj } = studyActions;
const { rebuild_sport_obj } = sportActions;

import { allEditingValue } from "../reducers/rootReducer.js";
import { bindActionCreators } from "redux";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.unload = this.unload.bind(this);
  }
  componentDidMount() {
    window.onbeforeunload = this.unload;
    window.Setting.onOpenSetting(() => {
      window.Setting.openSetting(this.props.setting);
    });
    window.Setting.onApplySetting((e, newSetting) =>
      this.props.change_item(newSetting)
    );
    window.ImportFile.onImportDataObj((e, dataObj) => {
      const { ability, message, moral, sport, study } = dataObj;
      this.props.rebuild_ability_obj(ability);
      this.props.rebuild_moral_obj(moral);
      this.props.rebuild_message_obj(message);
      this.props.rebuild_study_obj(study);
      this.props.rebuild_sport_obj(sport);
    });
    window.ExportFile.onSpawnXLSX(async (e) => {
      await window.ExportFile.spawnXLSX(this.props.dataObj);
    });
  }

  unload(e) {
    const { message, moral, sport, study, ability, setting } = this.props;
    localStorage.setItem("message", JSON.stringify(message));
    localStorage.setItem("moral", JSON.stringify(moral));
    localStorage.setItem("sport", JSON.stringify(sport));
    localStorage.setItem("study", JSON.stringify(study));
    localStorage.setItem("ability", JSON.stringify(ability));
    localStorage.setItem("setting", JSON.stringify(setting));
  }

  render() {
    return (
      <div className="table">
        <Control></Control>
        <div
          className={
            "warp" +
            (this.props.editing !== allEditingValue.NONE ? " active" : "")
          }
        >
          <TopShow></TopShow>
          <div className="table-warp">
            <table
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="827"
              style={{
                borderCollapse: " collapse",
                tableLayout: " fixed",
                width: " 620pt",
              }}
            >
              <Message></Message>
              <tbody>
                <tr height="24" style={{ height: " 18pt" }}>
                  <td
                    colSpan="9"
                    height="24"
                    className="xl89"
                    style={{ height: " 18pt" }}
                  >
                    第一部分：德育素质测评分
                  </td>
                </tr>
              </tbody>
              <MoralADD></MoralADD>
              <MoralMinus></MoralMinus>
              <MoralShow></MoralShow>
              <tbody>
                <tr height="19" style={{ height: " 14.25pt" }}>
                  <td
                    colSpan="9"
                    height="19"
                    className="xl89"
                    style={{ height: " 14.25pt" }}
                  >
                    第二部分：体育素质测评分
                  </td>
                </tr>
              </tbody>
              <Sport></Sport>
              <SportShow></SportShow>
              <Study></Study>
              <tbody>
                <tr height="19" style={{ height: " 14.25pt" }}>
                  <td
                    colSpan="9"
                    height="19"
                    className="xl89"
                    style={{ height: " 14.25pt" }}
                  >
                    第四部分：能力素质测评分
                  </td>
                </tr>
              </tbody>
              <AbilityOne></AbilityOne>
              <AbilityTwo></AbilityTwo>
              <AbilityThree></AbilityThree>
              <AbilityShow></AbilityShow>
              <TotalShow></TotalShow>
              <tbody>
                <tr height="0" style={{ display: " none" }}>
                  <td width="107" style={{ width: " 80pt" }}></td>
                  <td width="112" style={{ width: " 84pt" }}></td>
                  <td width="36" style={{ width: " 27pt" }}></td>
                  <td width="99" style={{ width: " 74pt" }}></td>
                  <td width="113" style={{ width: " 85pt" }}></td>
                  <td width="36" style={{ width: " 27pt" }}></td>
                  <td width="111" style={{ width: " 83pt" }}></td>
                  <td width="101" style={{ width: " 76pt" }}></td>
                  <td width="40" style={{ width: " 30pt" }}></td>
                  <td width="72" style={{ width: " 54pt" }}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editing: state.global.editing,
    ...state,
    dataObj: {
      message: state.message,
      moral: state.moral,
      sport: state.sport,
      study: state.study,
      ability: state.ability,
      setting: state.setting,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    rebuild_ability_obj: bindActionCreators(rebuild_ability_obj, dispatch),
    rebuild_moral_obj: bindActionCreators(rebuild_moral_obj, dispatch),
    rebuild_message_obj: bindActionCreators(rebuild_message_obj, dispatch),
    rebuild_study_obj: bindActionCreators(rebuild_study_obj, dispatch),
    rebuild_sport_obj: bindActionCreators(rebuild_sport_obj, dispatch),
    change_item: bindActionCreators(change_item, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
