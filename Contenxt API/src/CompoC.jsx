import React from "react";
import { First } from "./App";

const CompoC = () => {
  return (
    <>
      <First.Consumer>
        {(e) => {
          return (
            <>
              <h1>This is component C {e}</h1>
            </>
          );
        }}
      </First.Consumer>
      {/* <h1>This is component Ca {props.value}</h1> */}
    </>
  );
};

export default CompoC;
