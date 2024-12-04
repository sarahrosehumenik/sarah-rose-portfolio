import React, { useState, useRef, useEffect } from 'react';
import './Nav.css';
import kitty from "../../Images/Content/browncat.jpg";
import email from "../../Images/Content/mail.jpg";
import questBtn from "../../Images/Content/quest.jpg";
import carrot from "../../Images/Content/carrot.jpg";
import Cat from './Cat';
import Contact from './Contact';
import Quest from './Quest';

export default function Nav(
  { points,
    addPoints,
    redeemPoints,
    redeemAction,
    catObject,
    pointAmount,
    quests,
    questsComplete,
    completeQuest,
    handleJiggle,
    triggerJiggle }
) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  const handleButtonClick = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
    if (dropdown === 'dropdown3') {
      handleJiggle(false);
    }
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
    if (openDropdown === 'dropdown3') {
      handleJiggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div ref={navRef} className="nav-container">
      <div className="left">
        {/* <button onClick={() => addPoints(100)}>points</button> */}
        <div onClick={() => handleButtonClick('dropdown1')} className="nav-link"><img className="nav-icon" src={kitty}></img></div>
        <Cat
          points={points}
          questsComplete={questsComplete}
          catObject={catObject}
          redeemAction={redeemAction}
          openDropdown={openDropdown} />
        <div onClick={() => handleButtonClick('dropdown2')} className="nav-link"><img className="nav-icon" src={email}></img></div>
        <Contact openDropdown={openDropdown} />
      </div>
      <div className="right">
        <div onClick={() => handleButtonClick('dropdown3')} className="nav-link"><img className={`nav-icon ${triggerJiggle ? 'quest-btn' : ''}`} src={questBtn}></img></div>
        <Quest
          points={points}
          pointAmount={pointAmount}
          addPoints={addPoints}
          redeemPoints={redeemPoints}
          quests={quests}
          completeQuest={completeQuest}
          openDropdown={openDropdown}
        />
        <div className="currency-container">
          <img className="currency-icon" src={carrot} ></img>
          <div className="currency-text">{points}</div>
        </div>
        {pointAmount > 0 ?
          <div className="point-tracker">+<img className="point-tracker-carrot" src={carrot} />{pointAmount}</div>
          : null}
      </div>

    </div>
  )
}