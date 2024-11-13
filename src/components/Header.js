import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnReact, setBtnReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : { onlineStatus ? "🟢" : "🔴" }</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link>Cart</Link></li>
                    <button className="login-btn" onClick={()=>{
                        btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login")
                    }}>
                        {btnReact}
                    </button>
                </ul>

            </div>

        </div>
    )
}

// route : https://www.swiggy.com/city/delhi/chaap-wale-sector-7g-rohini-rest890419

// https://www.swiggy.com/dapi/menu/pl?
// page-type=REGULAR_MENU 
// complete-menu=true 
// lat=28.7040592 
// lng=77.10249019999999 
// restaurantId=890419 
// catalog_qa=undefined 
// submitAction=ENTER

export default Header;