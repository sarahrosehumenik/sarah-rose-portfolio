import React from 'react';
import './Quest.css';
import carrot from "../../Images/Content/carrot.jpg";

export default function Quest({ openDropdown, points, addPoints, redeemPoints, pointAmount, quests, completeQuest }) {


 const handleQuests = () => {
  return Object.entries(quests).map(([key, quest]) => (
   <div className="quest-item" key={key}>
    <div className="quest-task">{quest.description}</div>
    {quest.completed ? <div className="completed-container">✓</div> :
     <div className="reward-container">{quest.reward}<img className="carrot-quest-icon" src={carrot} /></div>
    }
   </div>
  ));
 };


 return (
  <div className={`quest-container ${openDropdown === 'dropdown3' ? 'open' : 'closed'}`}>
   <div className="quest-description">Meet Neko the cat when clicking the cat Icon to the left. You can fuffill these quests and redeem carrots to help Neko out!</div>
   <div className="quest-wrapper">{handleQuests()}</div>
  </div>
 )
}