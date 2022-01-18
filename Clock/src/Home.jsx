import React from "react";
import Time from "./Time";
import Digitalclock from "./Digitalclock";

function Home() {
  return (
    <>
      <div className="time_container">
        <Time />
        <Digitalclock />
      </div>
    </>
  );
}

export default Home;
