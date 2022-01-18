import React, { createContext } from "react";
import CompoA from "./CompoA";

const First = createContext();
const App = () => {
  return (
    <>
      <First.Provider value="okeyfirst">
        <CompoA value="ok" />
      </First.Provider>
    </>
  );
};

export default App;
export { First };