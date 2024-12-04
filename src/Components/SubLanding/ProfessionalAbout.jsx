import React from 'react';
import './ProfessionalAbout.css';
import node from "../../Images/Tech/Node.js.png";
import react from "../../Images/Tech/React.png";
import carrot from "../../Images/Content/carrot.jpg";
import computer from "../../Images/Content/computer.webp";


export default function ProfessionalAbout() {
 return (
  <>
   <div className="professional-info">
    {/* <div className='professional-logo-container'>
     <img className="logo node" src={node} />
    </div> */}
    <div className='professional-text-container'>
     <div className='professional-header'>
      How I Got Into Development
     </div>
     <div className='professional-text'>
      After a decade in the arts and hospitality industry,<strong className="highlight-one">I felt a persistent curiosity about technology</strong>. I've always enjoyed solving logical puzzles and building things from the ground up, which naturally led me to fall in love with development.

      To pursue this passion, <strong className="highlight-two">I enrolled in a full stack bootcamp</strong>, which I successfully completed. My enthusiasm for the field grew even more as I began teaching full stack development, finding great joy in helping others learn and grow in a discipline I had come to love.

      An exciting opportunity then came my way to work with FactorEarth as a Web Developer, where I contributed to three of their applications.<strong className="highlight-three">This experience solidified my skills</strong> and deepened my appreciation for the field.

      After my time with FactorEarth, I decided to take a break from traditional employment to further hone my skills in web application development and explore game development, blending my <strong className="highlight-four">love for technology with creativity and innovation.</strong>
     </div>
    </div>
   </div>
   <div className='professional-logo-container'>
    <img className="computer" src={computer} />

   </div>
  </>
 )
}