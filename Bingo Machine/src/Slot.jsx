import React from "react";
import Match from "./Match";
import Nomatch from "./Nomatch";

const Slot = () => {
  console.log("ok");
  const emojiArray = ["😄", "❤️", "🍎"];
  let a = emojiArray[Math.floor(Math.random() * emojiArray.length)];
  let b = emojiArray[Math.floor(Math.random() * emojiArray.length)];
  let c = emojiArray[Math.floor(Math.random() * emojiArray.length)];
  return (
    <>
      {a === b && b === c ? <Match a={a} b={b} c={c} /> : <Nomatch a={a} b={b} c={c} />}
    </>
  );
};

export default Slot;
