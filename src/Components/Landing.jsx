import React, { useState } from 'react';
import './Landing.css';
import Me from "../Images/Content/me.webp"
import IAmProgrammer from "../Images/Tech/IamProgrammerEnglish.png"
import PersonalAbout from './SubLanding/PersonalAbout';
import ProfessionalAbout from './SubLanding/ProfessionalAbout';


export default function Landing({ points, addPoints, redeemPoints, quests, completeQuest }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [animationClass, setAnimationClass] = useState('');

  const handleNext = () => {
    if (currentIndex < 2) {
      setAnimationClass('slide-out-left');
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setAnimationClass('slide-in-right');
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setAnimationClass('slide-out-right');
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setAnimationClass('slide-in-left');
      }, 500);
    }
  };

  return (
    <div className='landing-wrapper'>
      {currentIndex === 0 && (
        <div className="landing-container">
          <div className="text-container">
            <img src={IAmProgrammer} alt="I am a programmer" className='iamprogrammer-image' />
            <div className="name-text">Sarah Rose</div>
            <div className='role-text'> Full Stack Web Developer</div>
            <div className='about-text'>
              I am an East Coast-based Software Engineer originally from Colorado.
              Merging my passion for <strong className="highlight-one">design</strong> in concept and visually with
              <strong className="highlight-two">problem-solving</strong>
              in the tech field. I want to take this opportunity for you to get to know me as an
              individual and proffesional.
            </div></div>
          <div className='portrait-image-container'>
            <img src={Me} alt="Sarah Rose" className='sarah-rose-image' />
          </div>
        </div>
      )}
      {currentIndex === 1 && (
        <div className={`personal-container ${animationClass}`}>
          <PersonalAbout quests={quests} completeQuest={completeQuest} />
        </div>
      )}
      {currentIndex === 2 && (
        <div className={`pro-container ${animationClass}`}><ProfessionalAbout />
        </div>
      )}


      <div className="carosel-buttons">
        <button
          className="prev-button"
          style={{ color: currentIndex === 0 ? "grey" : "black" }}
          disabled={currentIndex === 0}
          onClick={() => handlePrevious()}>{"<--"} Prev</button>
        <div className="elipse-container">
          <div style={{ color: currentIndex === 0 ? 'rgb(205, 216, 179)' : "black" }} className="period">●</div>
          <div style={{ color: currentIndex === 1 ? 'rgb(205, 216, 179)' : "black" }} className="period">●</div>
          <div style={{ color: currentIndex === 2 ? 'rgb(205, 216, 179)' : "black" }} className="period">●</div>
        </div>
        <button
          className="next-button"
          style={{ color: currentIndex === 2 ? "grey" : "black" }}
          disabled={currentIndex === 2}
          onClick={() => handleNext()}>Next {"-->"}</button>
      </div>
    </div>
  );
}