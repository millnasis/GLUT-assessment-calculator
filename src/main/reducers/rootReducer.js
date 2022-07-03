import { combineReducers } from "redux";
import { reducer as userMessage } from "./userMessage";
import { reducer as moral } from "./moral";
import { reducer as sport } from "./sport";
import { reducer as study } from "./study";
import { reducer as ability } from "./ability";
import { reducer as setting } from "./setting";

export const allEditingValue = {
  MESSAGE: "message",
  MORAL_ADD: "moral_add",
  MORAL_MINUS: "moral_minus",
  SPORT: "sport",
  STUDY: "STUDY",
  ABILITY_ONE: "ABILITY_ONE",
  ABILITY_TWO: "ABILITY_TWO",
  ABILITY_THREE: "ABILITY_THREE",
  NONE: "NONE",
};

const initialState = {
  editing: "NONE",
};

export const actionsType = {
  CHANGE_EDITING: "CHANGE_EDITING",
};

export const actions = {
  change_editing(editing) {
    return {
      type: actionsType.CHANGE_EDITING,
      editing,
    };
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.CHANGE_EDITING:
      return {
        ...state,
        editing: action.editing,
      };

    default:
      return state;
  }
}

export default combineReducers({
  global: reducer,
  message: userMessage,
  moral: moral,
  sport: sport,
  study: study,
  ability: ability,
  setting: setting,
});
