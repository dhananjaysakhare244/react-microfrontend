import ReactDOM from "react-dom";
import React from "react";

const mount = (el) => {
  ReactDOM.render(<h1>Hi there</h1>, el);
};

// we are running locally on dev mode
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mount(devRoot);
}

// we are running through container
export { mount };
