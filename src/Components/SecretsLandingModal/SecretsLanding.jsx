import secret1 from "../../Images/Secretswebsite/secret1.png"
import secret2 from "../../Images/Secretswebsite/secret2.png"
import secret3 from "../../Images/Secretswebsite/secret3.png"
import secret4 from "../../Images/Secretswebsite/secret4.png"
import secret5 from "../../Images/Secretswebsite/secret5.png"
import secret6 from "../../Images/Secretswebsite/secret6.png"
import "./SecretsLanding.css"
import React, { useRef, useEffect } from "react"



export default function SecretsLanding({ handleToggleSecretsModal }) {
 const modalRef = useRef(null)
 const handleClickOutside = (event) => {
  if (modalRef.current && !modalRef.current.contains(event.target)) {
   handleToggleSecretsModal()
  }

 };

 useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
   document.removeEventListener('mousedown', handleClickOutside);
  };
 }, []);

 return (
  <div ref={modalRef} className="secret-modal-container">
   <div className="back-button-container">
    <div className="back-button" onClick={() => handleToggleSecretsModal()}>{"<- "}BACK </div>
   </div>
   <div className="alert-text">!Secrets Make friends is currently under maintnance, heres is what you can expect!</div>
   <div className="desktop-view-container">
    <div className="desktop-header">Desktop View</div>
    <img src={secret1} className="secret-website-desktop"></img>
    <img src={secret2} className="secret-website-desktop"></img>
    <img src={secret3} className="secret-website-desktop"></img>
   </div>
   <div className="mobile-view-container">
    <div className="mobile-header">Mobile View</div>
    <img src={secret4} className="secret-website-mobile"></img>
    <img src={secret5} className="secret-website-mobile"></img>
    <img src={secret6} className="secret-website-mobile"></img>
   </div>
  </div>
 )
}