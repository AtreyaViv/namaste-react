import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="emp-card">
            <h1> About Us</h1>
            <h2>This is Namaste react demo project</h2>
            <h3>following demo application made by Vivek Atreya</h3>
            < User name={"Vivek Atreya (function)"} location={"Delhi"}/>
            < UserClass name={"Vivek Atreya (class)"} location={"Delhi"}/>
        </div>
    )
}

export default About;