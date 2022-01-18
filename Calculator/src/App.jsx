import React from "react";
import { sum, sub, mul, dive } from "./Calci";

function App() {
  return (
    <>
      <ol>
        <li>Sum of two number is {sum(2, 2)}</li>
        <li>Substraction of two number is {sub(2, 2)}</li>
        <li>Multiplication of two number is {mul(2, 2)}</li>
        <li>Division of two number is {dive(2, 2)}</li>
      </ol>
    </>
  );
}

export default App;
