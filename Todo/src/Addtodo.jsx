import React, { useState } from "react";

const Addtodo = ({addList}) => {
    const [list, setList] = useState({ title: "", content: "" });
    
  const readInput = (e) => {
    const { name, value } = e.target;
    setList({ ...list, [name]: value });
  };
  
  const sendInput = (e) => {
    e.preventDefault();
      addList(list);
  };
  return (
    <>
      <div className="input_container">
        <div className="inputs">
          <form method="post" className="myform" onSubmit={sendInput}>
            <input
              type="text"
              name="title"
              className="myinputs"
              placeholder="Title"
              autoComplete="off"
              onChange={readInput}
              value={list.title}
              required="required"
            />
            <input
              type="text"
              name="content"
              className="myinputs"
              placeholder="Write Something..."
              autoComplete="off"
              onChange={readInput}
              value={list.content}
              required="required"
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addtodo;
