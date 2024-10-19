import { useRouteError } from "react-router-dom";

const Error = ()=> {
    const err = useRouteError();
    return (
        <div>
            <h1> {err.status} {err.statusText} </h1>
            <h2> Oop's Something went wrong</h2>
            <h3> Try again in sometime.</h3>
        </div>
    )
}

export default Error;