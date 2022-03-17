import { createStore } from "redux";

const reducerFunc = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "addBy":
      return {
        ...state,
        counter: state.counter + 10
      };
    default:
      return state;
  }
};

export const store = createStore(reducerFunc);
