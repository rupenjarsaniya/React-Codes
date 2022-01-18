import React from "react";

const watch = {
  fontWeight: '400',
  backgroundColor: "lightseagreen",
  padding: "1rem",
  borderRadius: "0.3rem",
  color: "yellow"
};

const greeting = {
  display: "flex",
  justifyContent: "center"
};

let curr = new Date().getHours();
let greet;
if (curr >= 1 && curr < 12) {
  greet = "Good Morning";
} else if (curr >= 12 && curr < 18) {
  greet = "Good Afternoon";
} else {
  greet = "Good Night";
}

function Greet() {
  return (
    <>
      <div style={greeting}>
        <h1 style={watch}>
          Hello Boss, <span style={{ color: "greenyellow" }}>{greet}</span>
        </h1>
      </div>
    </>
  );
}

export default Greet;
