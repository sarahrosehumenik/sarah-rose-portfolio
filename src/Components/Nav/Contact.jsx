import React from 'react';
import './Contact.css';

export default function Contact({ openDropdown }) {

 return (
  <div className={`contact-container ${openDropdown === 'dropdown2' ? 'open' : 'closed'}`}>
   <div className='contact-text-wrapper'>
    <div className="contact-header">Contact</div>
    <a href="https://www.linkedin.com/in/sarah-rose33/" target="_blank" className="linkedin-link">LinkedIn</a>
    <a href="mailto:sarahrosehumenik@gmail.com" target="_blank">sarahrosehumenik@gmail.com</a>
   </div>
  </div>
 )
}