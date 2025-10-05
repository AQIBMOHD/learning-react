

import { useState } from "react";
import {LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom";

// Header Component
export const Header = () => {
    const [btnNameReact , setBtnNameReact] = useState("login");
    console.log("Header render")

    //let btnName = "login";
    return (  
        <div className="header">
            <div className="logocontainer">
                <img className="logo"  src={LOGO_URL}  /> 
            </div>  
            <div className="nav-items">  
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>  
                  
                     <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                        
                     {/* there are two ways two toggle login into logout and logout into login  */}
                    {/* <button className="login" onClick={()=>{setBtnNameReact(btnNameReact === "login" ? "logout" : "login");}}>{btnNameReact}</button> */}
                    <button className="login" onClick={()=>{btnNameReact === 'login' ? setBtnNameReact("logout"):setBtnNameReact("login")}}>{btnNameReact}</button>
                </ul>  
            </div>  
        </div>
    );        
};

   