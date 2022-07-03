import { createStore } from "redux";

import reducer from "./rootReducer";

function swapPreloadState() {
  try {
    const globalState = localStorage.getItem("global");
    const message = localStorage.getItem("message");
    const moral = localStorage.getItem("moral");
    const sport = localStorage.getItem("sport");
    const study = localStorage.getItem("study");
    const ability = localStorage.getItem("ability");
    const setting = localStorage.getItem("setting");
    return {
      global: globalState ? JSON.parse(globalState) : undefined,
      message: message ? JSON.parse(message) : undefined,
      moral: moral ? JSON.parse(moral) : undefined,
      sport: sport ? JSON.parse(sport) : undefined,
      study: study ? JSON.parse(study) : undefined,
      ability: ability ? JSON.parse(ability) : undefined,
      setting: setting ? JSON.parse(setting) : undefined,
    };
  } catch (error) {
    return undefined;
  }
}

export default createStore(reducer, swapPreloadState());
