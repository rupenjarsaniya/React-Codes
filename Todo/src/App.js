import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Addtodo from "./Components/Addtodo";
import Container from "./Components/Container";

const App = () => {
  let getTodoArr;
  let getTodo = localStorage.getItem("mytodolist");
  { getTodo === null ? getTodoArr = [] : getTodoArr = JSON.parse(getTodo) }

  const deleteData = (listData) => {
    setTodo(todo.filter((prevList) => prevList !== listData));
    localStorage.setItem("mytodolist", JSON.stringify(todo));
  }

  const addData = (title, desc) => {
    const todoObj = {
      title: title,
      desc: desc
    }
    setTodo([...todo, todoObj]);
  }

  const [todo, setTodo] = useState(getTodoArr);

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Header />
      <Addtodo addData={addData} />
      <Container todo={todo} deleteData={deleteData} />
    </>
  );
};

export default App
