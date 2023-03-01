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
           <span><FontAwesomeIcon icon={faTwitterSquare} className = "icon"/></span>
           <span><FontAwesomeIcon icon={faFacebookSquare} className = "icon"/></span>
           <span><FontAwesomeIcon icon={faInstagramSquare} className = "icon"/></span>
           <span><FontAwesomeIcon icon={faGithubSquare} className = "icon"/></span>
        </div>
     </footer>
   ) 
}