import React from "react";

const Match = (props) => {
  return (
    <>
      <div className="box">
        <div className="inner">
          <span className="emoji">
            {props.a}
            {props.b}
            {props.c}
          </span>
          <h3>Matching Bingo 🤩</h3>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Match;
