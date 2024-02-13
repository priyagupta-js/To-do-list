import React from "react";
import ReactDOM from "react";

function Footer (){
    let year = new Date().getFullYear();
    // console.log(year);
    return(
        <footer>
            <p>copyright @{year}</p>
        </footer>
    )
}

export default Footer;