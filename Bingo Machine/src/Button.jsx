import React from "react";
import Slot from "./Slot";

const Button = () => {
  const bingo = () => {
    return (
      <>
        <Slot />
      </>
    );
  };
  return (
    <div>
      <button type="submit" className="btn" onClick={bingo}>
        Bingo
      </button>
    </div>
  );
};

export default Button;
