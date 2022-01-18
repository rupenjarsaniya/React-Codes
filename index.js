import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ReactDOM.render("Su batavu 6", "Kya batavu 6", callback function);

const heading = {
  color: 'coral',
  textTransform: 'uppercase',
  textAlign: 'center'
}

const watch = {
  backgroundColor: 'lightseagreen',
  padding: '1rem',
  borderRadius: '0.3rem',
  display: 'inline-block',
  color: 'yellow'
}

const series = "Amazon Prime";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

let curr = new Date();
// let curr = new Date(2020, 5, 5, 13);
curr = curr.getHours();

let greet;
if (curr >= 1 && curr < 12) {
  greet = 'Good Morning';
}
else if (curr >= 12 && curr < 18) {
  greet = 'Good Afternoon';
}
else {
  greet = 'Good Night';
}

ReactDOM.render(
  <>
    <h1 style={watch}>Hello Boss, <span style={{color: 'greenyellow'}}>{greet}</span></h1>
    <h3>{`Current date is ${date} and time is ${ time}`}</h3>
    <h1 style={{ color: 'coral', textTransform: 'uppercase', textAlign: 'center' }}>{series}</h1>
    <h1 style={heading}>{series}</h1>
        <p>TOP {2 + 3} web series</p>
    <ol>
      <li>The Magician</li>
      <li>Tandav</li>
      <li>The Last Hour</li>
      <li>Legacies</li>
      <li>Made in Heaven</li>
    </ol>
  </>,
  document.getElementById("root")
);
