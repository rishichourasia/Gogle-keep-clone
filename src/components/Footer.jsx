import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear(); 
    return(
        <footer>
            <p>Rishi Chourasia © {currentYear}</p>
        </footer>
    );
}

export default Footer;