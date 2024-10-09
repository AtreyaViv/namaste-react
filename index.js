// const heading = React.createElement("h1", {
//     id: "heading", xyz: "abc"
// }, "Hello World from React!");/

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "I'm a H1 Tag"),
        React.createElement("h2", { id: "heading" }, "I'm a H2 Tag")]
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);