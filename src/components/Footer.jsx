import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
   return(
     <footer className="footerContainer">
        <div className="socialIcons">
           <a href="https://twitter.com/NBBTheCoder" target="blank"><FontAwesomeIcon icon={faTwitterSquare} className = "icon"/></a >
           <a href="#"><FontAwesomeIcon icon={faFacebookSquare} className = "icon"/></a >
           <a href="https://www.instagram.com/nomanbinbasheer/" target="blank"><FontAwesomeIcon icon={faInstagramSquare} className = "icon"/></a >
           <a href="https://github.com/NomanBinBasheer" target="blank"><FontAwesomeIcon icon={faGithubSquare} className = "icon"/></a >
        </div>
     </footer>
   ) 
}