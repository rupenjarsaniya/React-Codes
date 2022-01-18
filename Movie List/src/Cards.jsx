import React from "react";

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <div className="cardimage">
            <img src={props.isec} alt="Movieimage" />
          </div>
          <div className="aboutcard">
            <div className="cardheader">{props.header}</div>
            <div className="cardtitle">{props.title}</div>
            <button type="buttton" className="btnmovie">
              <a href={props.movie} target="_blank">Watch Now</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
