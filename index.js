// const heading = React.createElement("h1", {
//     id: "heading", xyz: "abc"
// }, "Hello World from React!");/

import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "Hi There!!"),
        React.createElement("h2", { id: "heading" }, "How you Doin'")]
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);