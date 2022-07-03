export const totalState = {
  addItem: [
    ["党员、预备党员", null, null],
    ["入党积极分子", null, null],
    ["学生手册成绩", null, null],
    ["好人好事奖励", null, null],
    ["公益活动", null, null],
    ["其他情况", null, null],
    ["宿舍表现", null, null],
    ["思想政治理论课", null, null],
    ["三早一晚出勤率", null, null],
  ],
  minusItem: [
    ["违规违纪处分", null, null],
    ["思想政治理论课", null, null],
    ["恶意拖欠学费", null, null],
    ["学期宿舍评比", null, null],
    ["三早一晚缺勤", null, null],
    ["公益活动", null, null],
  ],
  sum: 0,
  total: 70,
};

const initialState = totalState;

export const actionsType = {
  CHANGE_MORAL_ITEM: "CHANGE_MORAL_ITEM",
  REBUILD_MORAL_OBJ: "REBUILD_MORAL_OBJ",
};

export const actions = {
  change_item(sign, index, innerIndex, value) {
    return {
      type: actionsType.CHANGE_MORAL_ITEM,
      sign,
      index,
      innerIndex,
      value,
    };
  },
  rebuild_moral_obj(obj) {
    return {
      type: actionsType.REBUILD_MORAL_OBJ,
      obj,
    };
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.CHANGE_MORAL_ITEM:
      const { sign, index, innerIndex, value } = action;
      if (sign) {
        let addItem = state.addItem.map((v, i) => {
          if (i === index) {
            v[innerIndex] = value;
          }
          return v;
        });
        let minusItem = state.minusItem;
        let sum = 0;
        sum += addItem.reduce((prev, cur) => prev + +cur[2], 0);
        sum -= minusItem.reduce((prev, cur) => prev + +cur[2], 0);
        sum = sum > 30 ? 30 : sum;
        sum = sum < -70 ? -70 : sum;
        return {
          ...state,
          addItem: addItem,
          sum,
          total: sum + 70,
        };
      } else {
        let addItem = state.addItem;
        let minusItem = state.minusItem.map((v, i) => {
          if (i === index) {
            v[innerIndex] = value;
          }
          return v;
        });
        let sum = 0;
        sum += addItem.reduce((prev, cur) => prev + +cur[2], 0);
        sum -= minusItem.reduce((prev, cur) => prev + +cur[2], 0);
        sum = sum > 30 ? 30 : sum;
        sum = sum < -70 ? -70 : sum;
        return {
          ...state,
          minusItem: minusItem,
          sum,
          total: sum + 70,
        };
      }

    case actionsType.REBUILD_MORAL_OBJ:
      return action.obj;
    default:
      return state;
  }
}
