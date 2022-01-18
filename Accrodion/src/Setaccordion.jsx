import React, { useState } from "react";

const Setaccordion = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="quetions_content">
        <span onClick={() => setShow(!show)}>
          {!show ? <i className="fa fa-plus"></i> : <i className="fa fa-minus"></i>}
        </span>
        <h3 className="quetion_content">{props.quetion}</h3>
      </div>
          {show && <p className="answer_content">{props.answer}</p>}
    </>
  );
};

export default Setaccordion;
