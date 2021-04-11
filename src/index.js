import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import App from "./App";

// axios.create({ baseURL: "http://localhost:3002/" });
// axios.defaults.baseURL = "http://localhost:3002/";
// axios.interceptors.request.use(
//   (req) => {
//     console.log("request:", req);
//     return req;
//   },
//   (err) => {
//     console.log(err);
//     return Promise.reject(err);
//   }
// );

// axios.interceptors.response.use(
//   (res) => {
//     console.log("request:", res);
//     return res;
//   },
//   (err) => {
//     console.log(err);
//     return Promise.reject(err);
//   }
// );

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
