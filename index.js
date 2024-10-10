// const heading = React.createElement("h1", {
//     id: "heading", xyz: "abc"
// }, "Hello World from React!");/

import React from "react";
import ReactDOM from "react-dom";

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", { id: "heading" }, "Hi There!!"),
//         React.createElement("h2", { id: "heading" }, "How you Doin'")]
//     )
// )

// JSX (is transpiled before it reaches JS engine) -- Parcel --- Babel

// JSX => Babel transpile it to React.createElement => ReactElement - JS Object => HTMLElement(render)

const jsxheading =( <><h1 id="heading">
    Namaste react!!
</h1><h2 id="heading">By Vivek Atreya</h2></>
)

// react component
// react functional component => JS function which return jsx --> react element

const headingElement1 = <h1> Heading from JSX element </h1> //element


const Title = () => {
    return <h1> Heading from Title component </h1> 
}


const HeadingComponent = () => (
<div>
    <Title />
    <h1 id="heading">Namaste react!!</h1>
    <h2 id="heading">By Vivek Atreya</h2>
    {headingElement1}
    {Title()}
</div>
) // component composition (composing one component in other) 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);