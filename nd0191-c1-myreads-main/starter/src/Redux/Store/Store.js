import React, { createContext } from "react";
import CurrentShelfReducer from "../Reducer/CurrentShelfReducer";
import WantShelfReducer from "../Reducer/WantShelfReducer";
import ReadShelfRecducer from "../Reducer/ReadShelfReducer";

export const StoreContext = createContext(null);
const Store = ({ children }) => {
  const [currentShelf, DispatchCurrentShelf] = CurrentShelfReducer();
  const [wantShelf, DispatchWantShelf] = WantShelfReducer();
  const [readShelf, DispatchReadShelf] = ReadShelfRecducer();

  const store = {
    CurrentShelf: currentShelf,
    CurrentShelfDispatch: DispatchCurrentShelf,
    WantShelf: wantShelf,
    WantShelfDispatch: DispatchWantShelf,
    ReadShelf: readShelf,
    ReadShelfDispatch: DispatchReadShelf,
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Store;
