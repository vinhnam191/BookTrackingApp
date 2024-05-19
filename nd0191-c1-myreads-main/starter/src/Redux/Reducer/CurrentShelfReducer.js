import { useReducer } from "react";

function GetCurrentShelf(state, { type, payload }) {
  switch (type) {
    case "current":
      return { ...state, account: payload };
    default:
      return state;
  }
}

function CurrentShelf() {
  return useReducer(GetCurrentShelf, []);
}

export default CurrentShelf;
