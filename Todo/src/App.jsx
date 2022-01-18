import React, { useState, useEffect } from "react";
import Header from "./Header";
import Addtodo from "./Addtodo";
import Container from "./Container";
import List from "./List";

const App = () => {
  let arr;
  let getList = localStorage.getItem("mylist");
  if (getList === null) {
    arr = [];
  }
  else {
    arr = JSON.parse(getList);
  }
  console.log(arr);
  
  const [input, setInput] = useState({ title: "", content: "" });
  const [list, setList] = useState(arr);

  const readInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const sendInput = (e) => {
    e.preventDefault();
    setList([...list, input]);
  };
  
  const deleteList = (id) => {
    setList(list.filter((array, index) => {
      return index !== id;
    }))
    localStorage.setItem("mylist", JSON.stringify(list));
  };

  const editList = (id) => {
    
  }

  useEffect(() => {
    localStorage.setItem("mylist", JSON.stringify(list))
  }, [list])

  return (
    <>
      <Header />
      {/* <Addtodo /> */}
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
              value={input.title}
              required="required"
            />
            <input
              type="text"
              name="content"
              className="myinputs"
              placeholder="Write Something..."
              autoComplete="off"
              onChange={readInput}
              value={input.content}
              required="required"
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>
      </div>

      <Container list={list} deleteList={deleteList} editList={ editList}/>
    </>
  );
};

export default App;
