// import { Link } from 'gatsby';
import React from 'react';

const NavBar = () => {
    return(
        <div>
            <nav className="fullNav" >
            <ul className="left">
                <li>GLAMOUR</li>
            </ul>
            <ul className="center">
            <li>HOME</li>
            <li>NEW ARRIVALS</li>
            <li>READY TO WEAR</li>
            <li>UNSTITCHED</li>
            <li>FOOTWEAR</li>
                
             </ul>  
            <ul className="right">
            <li>Icons Here</li>
               
             </ul>      
        </nav>     

        <nav className="mobileNav" >
            <ul className="">
                <li>Side Icon</li>
            </ul>
            <ul className="companyName">
            <li>GLAMOUR</li>
             </ul>  
            <ul className="">
            <li>Icons Here</li>
               
             </ul>      
        </nav>     
        </div>      
    )       
}       
    
export default NavBar;