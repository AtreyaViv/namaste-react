import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const heading = React.createElement("h1", {
//     id: "heading", xyz: "abc"
// }, "Hello World from React!");/

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", { id: "heading" }, "Hi There!!"),
//         React.createElement("h2", { id: "heading" }, "How you Doin'")]
//     )
// )

// JSX (is transpiled before it reaches JS engine) -- Parcel --- Babel

// JSX => Babel transpile it to React.createElement => ReactElement - JS Object => HTMLElement(render)

// const jsxheading =( <><h1 id="heading">
//     Namaste react!!
// </h1><h2 id="heading">By Vivek Atreya</h2></>
// )

// react component
// react functional component => JS function which return jsx --> react element

// const headingElement1 = <h1> Heading from JSX element </h1> //element


// const Title = () => {
//     return <h1> Heading from Title component </h1> 
// }


// const HeadingComponent = () => (
// <div>
//     <Title />
//     <h1 id="heading">Namaste react!!</h1>
//     <h2 id="heading">By Vivek Atreya</h2>
//     {headingElement1}
//     {Title()}
// </div>
// ) // component composition (composing one component in other) 

const AppLoyout = () => {
    return (
        <div className = "app">
           <Header />
           <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <AppLoyout />,
    errorElement: <Error />
  },
  {
    path : "/about",
    element : < About />
  },
  {
    path : "/contact",
    element : < Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);