import React, { useState } from "react";

const Digitalclock = () => {
  let currTime;
  const [clock, setClock] = useState(currTime);
  setInterval(() => {
    currTime = new Date().toLocaleTimeString();
    setClock(currTime);
  }, 1000);

  return (
    <>
      <div className="timecontaier">
      <h1>Clock</h1>
        <h1 className="currtime">{clock}</h1>
      </div>
    </>
  );
};

export default Digitalclock;
