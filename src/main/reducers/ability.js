export const totalState = {
  partOne: [
    ["技能证书", [], 5],
    ["社会实践", [], 5],
    ["表彰奖励", [], 5],
  ],
  partTwo: [
    ["学科竞赛科技活动", [], 11],
    ["文体竞赛", [], 6],
    ["文章、征文、消息、简讯发表在校级刊物", [], 5],
    ["学干任职", [], 4],
    ["发表科研论文", [], 2],
    ["各类文化活动", [], 4],
    ["其他情况", [], 1],
  ],
  partThree: [["听取讲座", [], 1]],
  sum: 0,
};

const initialState = totalState;

function cal(state) {
  let sum = 0;
  state.partOne.map((v) => {
    v[1].map((e) => {
      sum += +e[1];
    });
  });
  state.partTwo.map((v) => {
    v[1].map((e) => {
      sum += +e[1];
    });
  });
  state.partThree.map((v) => {
    v[1].map((e) => {
      sum -= +e[1];
    });
  });
  sum = sum > 80 ? 80 : sum;
  sum = sum < -20 ? -20 : sum;
  return {
    ...state,
    sum,
  };
}

export const actionsType = {
  ADD_ABILITY_ITEM: "ADD_ABILITY_ITEM",
  DELETE_ABILITY_ITEM: "DELETE_ABILITY_ITEM",
  CHANGE_ABILITY_ITEM: "CHANGE_ABILITY_ITEM",
  REBUILD_ABILITY_OBJ: "REBUILD_ABILITY_OBJ",
};

export const actions = {
  add_item(stateName, index) {
    return {
      type: actionsType.ADD_ABILITY_ITEM,
      stateName,
      index,
    };
  },
  change_item(stateName, index, id, innerIndex, value) {
    return {
      type: actionsType.CHANGE_ABILITY_ITEM,
      stateName,
      index,
      id,
      innerIndex,
      value,
    };
  },
  delete_item(stateName, index, id) {
    return {
      type: actionsType.DELETE_ABILITY_ITEM,
      stateName,
      index,
      id,
    };
  },
  rebuild_ability_obj(obj) {
    return {
      type: actionsType.REBUILD_ABILITY_OBJ,
      obj,
    };
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.ADD_ABILITY_ITEM: {
      const { stateName, index } = action;
      state = {
        ...state,
        [stateName]: state[stateName].map((v, i) => {
          if (i === index) {
            v[1].push([null, null, Date.now()]);
          }
          return v;
        }),
      };

      return cal(state);
    }
    case actionsType.DELETE_ABILITY_ITEM: {
      const { stateName, index, id } = action;
      state = {
        ...state,
        [stateName]: state[stateName].map((v, i) => {
          if (i === index) {
            v[1] = v[1].filter((e) => {
              return e[2] !== id;
            });
          }
          return v;
        }),
      };
      return cal(state);
    }
    case actionsType.CHANGE_ABILITY_ITEM: {
      const { stateName, index, id, innerIndex, value } = action;
      state = {
        ...state,
        [stateName]: state[stateName].map((v, i) => {
          if (i === index) {
            v[1] = v[1].map((e) => {
              if (e[2] === id) {
                e[innerIndex] = value;
              }
              return e;
            });
          }
          return v;
        }),
      };
      return cal(state);
    }
    case actionsType.REBUILD_ABILITY_OBJ: {
      return action.obj;
    }
    default:
      return state;
  }
}
