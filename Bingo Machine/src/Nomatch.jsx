import React from "react";

const Nomatch = (props) => {
  return (
    <>
      <div className="box">
        <div className="inner">
          <span className="emoji">
            {props.a}
            {props.b}
            {props.c}
          </span>
          <h3>No Matching 😢</h3>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Nomatch;
