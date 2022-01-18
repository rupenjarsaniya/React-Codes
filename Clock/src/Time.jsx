import React, { useState } from "react";
import Button from '@material-ui/core/Button';

const Time = () => {
  let currTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currTime);
  const getTime = () => {
    currTime = new Date().toLocaleTimeString();
    setTime(currTime);
  };
  return (
    <>
      <div className="timecontaier">
      <h1>Get Current Time</h1>
        <h1 className="currtime">{time}</h1>
        <Button type="button" className="btn" variant="contained" color="secondary" onClick={getTime}>
          get time
        </Button>
      </div>
    </>
  );
};

export default Time;
