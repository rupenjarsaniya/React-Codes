import React, { createContext } from "react";
import CompoA from "./CompoA";

const First = createContext();
const Last = createContext();
const App = () => {
  return (
    <>
      <First.Provider value="test1">
        <Last.Provider value="test2">
          <CompoA value="ok" />
        </Last.Provider>
      </First.Provider>
    </>
  );
};

export default App;
export { First, Last };
