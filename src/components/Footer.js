import React from "react";

function Footer (){
    let year = new Date().getFullYear();
    // console.log(date);
    return(
        <Footer>
            <p>copyright @{year}</p>
        </Footer>
    )
}

export default Footer;