import React from "react";
import { First, Last } from "./App";

const CompoC = (props) => {
  return (
    <>
      {/* Using Consumer */}
      <First.Consumer>
        {(fname) => {
          return (
            <Last.Consumer>
              {(lname) => {
                return (
                  <h1>
                    This is component C {fname} {lname}
                  </h1>
                );
              }}
            </Last.Consumer>
          );
        }}
      </First.Consumer>
      <h1>This is component Ca {props.value}</h1>
    </>
  );
};

export default CompoC;
