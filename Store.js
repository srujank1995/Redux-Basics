import redux from "redux";

export const Insertnumber = (num) => {
  return {
    type: "Insert_Number",
    payload: num,
  };
};

export const DeleteNumber = () => {
  return {
    type: "Delete_Number",
  };
};

const initialState = {
  Even: [],
  Odd: [],
};

const ReduxReducerFn = (state = initialState, action) => {
  switch (action.type) {
    case "Insert_Number":
      const num = action.payload;
      if (num % 2 === 0) {
        return {
          ...state,
          Even: [...state.Even, num],
        };
      } else {
        return {
          ...state,
          Odd: [...state.Odd, num],
        };
      }
      break;
    case "Delete_Number":
      return {
        ...state,
        Even: [],
        Odd: [],
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

const store = redux.createStore(ReduxReducerFn);

export default store;
