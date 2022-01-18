  import React, { useState } from "react";

const Count = () => {
  const [state, setState] = useState(0);
  const increase = () => {
    setState(state + 1);
  };
  const descrease = () => {
    {
      state === 0 ? window.alert("Stop") : setState(state - 1);
    }
  };

  return (
    <>
      <div className="quantity">
        <span onClick={descrease}>
          <i className="fa fa-minus"></i>
        </span>
        <h1>{state}</h1>
        <span onClick={increase}>
          <i className="fa fa-plus"></i>
        </span>
      </div>
    </>
  );
};

export default Count;
