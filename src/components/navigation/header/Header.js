import Navbar from "../Navbar";

import classes from "./Header.module.css"

function Header (){

    return (
        <header className={classes.header}>         
            <h1 className={classes.logo}>BitTips</h1> 
          
            <nav className={classes.header_top_navbar}>
                <ul className={classes.navbar_list}>
                    <li className={classes.navbar_li}>Login</li>  
                    <li className={classes.navbar_li}>Sign Up</li>  
                    <li className={classes.navbar_li}>About</li>  
                </ul>
            </nav>  
            <Navbar />
        </header>
    )
}

export default Header;