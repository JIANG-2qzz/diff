// import React from 'react';
import ReactDOM from './React/reactDom';
import React from "./React/react";
let element = React.createElement(
  "div",
  {
    key: "title",
    id: "title"
  },
  "title"
);

ReactDOM.render(element, document.getElementById('root'))