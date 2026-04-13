import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (ele) => {
  ReactDOM.render(<App />, ele);
};

// if we are in development, run the mount imidietely
if (process.env.NODE_ENV == "development") {
  const devRoot = document.querySelector("#marketing-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// Otherwise export mount
export { mount };
