import React from "react";

function Footer (){
    let date = new Date().getFullYear();
    // console.log(date);
    return(
        <Footer>
            <p>copyright {date}</p>
        </Footer>
    )
}

export default Footer;