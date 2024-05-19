import { useReducer } from "react";

function GetWantShelf(state, { type, payload }) {
  switch (type) {
    case "want":
      return { ...state, account: payload };
    default:
      return state;
  }
}

function WantShelf() {
  return useReducer(GetWantShelf, []);
}

export default WantShelf;
