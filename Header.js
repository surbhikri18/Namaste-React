import {useState, useEffect} from "react";
import Logo from "../assets/img/foodvilla_logo.png";
const Title= () => ( 
    <a href="/">
    <img 
        className="logo"
        alt="logo" 
        src= {Logo}
        // src="https://yt3.googleusercontent.com/FFffswAYvW-eIAKgSmGh85tMKFqp6SvLSSvx3BjvqJO2seP9pJnEeXWu_5HAMi82bZnDoVBWEA=s900-c-k-c0x00ffffff-no-rj"
    />
    </a>
);

const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div className="header">
            <Title />   

            <div className="nav-items">
                <ul> 
                    <li>Home</li>
                     <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? (
                <button onClick={()=>setIsLoggedIn(false)}>Logout</button>) : (
                <button onClick={()=> setIsLoggedIn(true)}>Login</button>
            )}
        </div>
    );
}

export default Header;


