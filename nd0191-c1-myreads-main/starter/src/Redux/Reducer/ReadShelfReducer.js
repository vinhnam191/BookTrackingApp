import { useReducer } from "react";

function GetReadShelf(state, { type, payload }) {
  switch (type) {
    case "read":
      return { ...state, account: payload };
    default:
      return state;
  }
}

function ReadShelf() {
  return useReducer(GetReadShelf, []);
}

export default ReadShelf;
