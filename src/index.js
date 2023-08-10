import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hour = date.getHours();
var customstyle;
var greeting;

if (hour >= 0 && hour < 12) {
  greeting = "Good Morning";
  customstyle = { color: "red" };
} else if (hour >= 12 && hour < 18) {
  greeting = "Good Afternoon";
  customstyle = { color: "green" };
} else if (hour >= 18 && hour <= 23) {
  greeting = "Good Evening";
  customstyle = { color: "blue" };
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customstyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
