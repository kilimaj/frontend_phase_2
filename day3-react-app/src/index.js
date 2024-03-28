import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Calendar,
  MyComponent,
  MyComponent2,
  MyComponent3,
  MyComponent4,
  MyComponent5,
  MyComponent6,
  MyComponent7,
} from "./component/MyComp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
    <MyComponent param1={1} param2={2} param3={<div>param3</div>} /> */}
    {/* <MyComponent2 count={100} />
    <MyComponent3 unit={2} />
    <MyComponent4 />
    <MyComponent5 /> */}
    <MyComponent6 />
    <MyComponent7 />
    <Calendar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
