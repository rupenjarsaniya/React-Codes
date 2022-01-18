import React from "react";
import Main from "./Main";
import Setaccordion from "./Setaccordion";

const Accordion = () => {
  return (
    <>
      <div className="main_content">
        <div className="primary_content">
          <h1>best of luck</h1>
          {Main.map((element) => {
            return <Setaccordion key={element.id} {...element} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
