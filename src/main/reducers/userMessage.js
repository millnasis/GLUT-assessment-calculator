const initialState = {
  collegeName: "",
  gradeAndClass: "",
  IdNum: "",
  name: "",
  politicStatus: "",
};

export const actionsType = {
  CHANGE_MESSAGE: "CHANGE_MESSAGE",
  REBUILD_MESSAGE_OBJ: "REBUILD_MESSAGE_OBJ",
};

export const actions = {
  change_message(stateName, value) {
    return {
      type: actionsType.CHANGE_MESSAGE,
      stateName,
      value,
    };
  },
  rebuild_message_obj(obj) {
    return {
      type: actionsType.REBUILD_MESSAGE_OBJ,
      obj,
    };
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.CHANGE_MESSAGE:
      return {
        ...state,
        [action.stateName]: action.value,
      };
    case actionsType.REBUILD_MESSAGE_OBJ:
      return action.obj;
    default:
      return state;
  }
}
