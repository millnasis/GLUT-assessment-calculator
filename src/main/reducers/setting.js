import { defaultSetting } from "../../source/constant";
export const totalState = { ...defaultSetting };

const initialState = totalState;

export const actionsType = {
  CHANGE_SETTING_ITEM: "CHANGE_SETTING_ITEM",
};

export const actions = {
  change_item(object) {
    return {
      type: actionsType.CHANGE_SETTING_ITEM,
      object,
    };
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.CHANGE_SETTING_ITEM: {
      return { ...state, ...action.object };
    }
    default:
      return state;
  }
}
