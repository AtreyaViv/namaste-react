import {useState} from "react" 

const User = (props)=> {
    const [count, setCount] = useState(0)
    return (
        <div className="emp-card">
            <h2> Name : {props.name}</h2>
            <h3> Location : {props.location}</h3>
            <h3> Email : yoyo@superRoxxxSTAR.com</h3>
            <h3> Count : {count}</h3>
            <button onClick={()=> {
                let count2 = count;
                setCount(count2+1);
            }}>Click To increase</button>
        </div>
    )
}

export default User;