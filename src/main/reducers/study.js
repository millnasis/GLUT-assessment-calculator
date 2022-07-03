export const totalState = {
  item: [[null, null, null, "id"]],
  sum: 0,
};

const initialState = totalState;

export const actionsType = {
  CHANGE_STUDY_ITEM: "CHANGE_STUDY_ITEM",
  ADD_STUDY_ITEM: "ADD_STUDY_ITEM",
  DELETE_STUDY_ITEM: "DELETE_STUDY_ITEM",
  REBUILD_STUDY_OBJ: "REBUILD_STUDY_OBJ",
};

export const actions = {
  change_item(id, innerIndex, value) {
    return {
      type: actionsType.CHANGE_STUDY_ITEM,
      id,
      innerIndex,
      value,
    };
  },
  add_item() {
    return {
      type: actionsType.ADD_STUDY_ITEM,
    };
  },
  delete_item(id) {
    return {
      type: actionsType.DELETE_STUDY_ITEM,
      id,
    };
  },
  rebuild_study_obj(obj) {
    return {
      type: actionsType.REBUILD_STUDY_OBJ,
      obj,
    };
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.CHANGE_STUDY_ITEM: {
      const { id, innerIndex, value } = action;
      let sum = 0,
        mul = 0;
      let item = state.item.map((v) => {
        if (v[3] === id) {
          v[innerIndex] = value;
        }
        const [description, mark, point] = v;
        sum += +point;
        mul += +mark * +point;
        return v;
      });
      sum = mul / sum;
      sum = sum > 100 ? 100 : sum;
      sum = sum < 0 ? 0 : sum;
      return {
        ...state,
        item,
        sum,
      };
    }
    case actionsType.ADD_STUDY_ITEM: {
      let sum = 0,
        mul = 0;
      let item = [...state.item, [null, null, null, Date.now()]];
      item.map((v) => {
        const [description, mark, point] = v;
        sum += +point;
        mul += +mark * +point;
        return v;
      });
      sum = mul / sum;
      sum = sum > 100 ? 100 : sum;
      sum = sum < 0 ? 0 : sum;
      return {
        ...state,
        item,
        sum,
      };
    }
    case actionsType.DELETE_STUDY_ITEM: {
      let sum = 0,
        mul = 0;
      let item = state.item.filter((v) => v[3] !== action.id);
      item.map((v) => {
        const [description, mark, point] = v;
        sum += +point;
        mul += +mark * +point;
        return v;
      });
      sum = mul / sum;
      sum = sum > 100 ? 100 : sum;
      sum = sum < 0 ? 0 : sum;
      return {
        ...state,
        item,
        sum,
      };
    }
    case actionsType.REBUILD_STUDY_OBJ:
      return action.obj;
    default:
      return state;
  }
}
