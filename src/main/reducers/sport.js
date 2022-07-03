export const totalState = {
  baseItem: [
    ["学生体质健康测试（体测成绩）", null],
    ["专业考试成绩（体育课考试成绩）", null],
    ["课外锻炼分", null],
  ],
  addItem: [
    ["体测成绩优秀", null, null],
    ["课外锻炼出勤率", null, null],
  ],
  minusItem: [
    ["体测成绩不及格", null, null],
    ["体育课成绩不合格", null, null],
    ["课外锻炼出勤率", null, null],
  ],
  sum: null,
  total: null,
  base: null,
};

const initialState = totalState;

export const actionsType = {
  CHANGE_SPORT_ITEM: "CHANGE_SPORT_ITEM",
  REBUILD_SPORT_OBJ: "REBUILD_SPORT_OBJ",
};

export const actions = {
  change_item(sign, index, innerIndex, value) {
    return {
      type: actionsType.CHANGE_SPORT_ITEM,
      sign,
      index,
      innerIndex,
      value,
    };
  },
  rebuild_sport_obj(obj) {
    return {
      type: actionsType.REBUILD_SPORT_OBJ,
      obj,
    };
  },
};

function cal(baseItem, addItem, minusItem) {
  let sum = 0;
  sum += addItem.reduce((pre, cur) => pre + +cur[2], 0);
  sum -= minusItem.reduce((pre, cur) => pre + +cur[2], 0);

  let base =
    (baseItem[0][1] * 0.6 + baseItem[1][1] * 0.4) * 0.7 + baseItem[2][1] * 0.3;
  let total = sum + base;
  total = total > 100 ? 100 : total;
  total = total < 0 ? 0 : total;
  return {
    sum,
    base,
    total,
  };
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.CHANGE_SPORT_ITEM:
      const { sign, index, innerIndex, value } = action;
      if (sign === 1) {
        const addItem = state.addItem.map((v, i) => {
            if (i === index) {
              v[innerIndex] = value;
            }
            return v;
          }),
          minusItem = state.minusItem,
          baseItem = state.baseItem;

        return {
          ...state,
          addItem: addItem,
          ...cal(baseItem, addItem, minusItem),
        };
      } else if (sign === 2) {
        const addItem = state.addItem,
          minusItem = state.minusItem.map((v, i) => {
            if (i === index) {
              v[innerIndex] = value;
            }
            return v;
          }),
          baseItem = state.baseItem;
        return {
          ...state,
          minusItem: minusItem,
          ...cal(baseItem, addItem, minusItem),
        };
      } else {
        const addItem = state.addItem,
          minusItem = state.minusItem,
          baseItem = state.baseItem.map((v, i) => {
            if (i === index) {
              v[innerIndex] = value;
            }
            return v;
          });
        return {
          ...state,
          baseItem: baseItem,
          ...cal(baseItem, addItem, minusItem),
        };
      }
    case actionsType.REBUILD_SPORT_OBJ: {
      const { baseItem, addItem, minusItem } = action.obj;
      return {
        ...action.obj,
        ...cal(baseItem, addItem, minusItem),
      };
    }

    default:
      return state;
  }
}
