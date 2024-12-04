import React from 'react';
import './Cat.css';
import kittyIdle from "../../Images/Content/kittyidle.png";
import kittyHappy from "../../Images/Content/kittyhappy.png";
import kittyEat from "../../Images/Content/kittyeat.png";
import kittyPlay from "../../Images/Content/kittyplay.png";
import kitty from "../../Images/Content/kitty.png"
import carrot from "../../Images/Content/carrot.jpg";

export default function Cat({ catObject, redeemAction, points, openDropdown, questsComplete }) {

  const [currentCatState, setCurrentCatState] = React.useState("idle");
  const [alert, setAlert] = React.useState(null);

  const catStates = {
    idle: kittyIdle,
    pet: kittyHappy,
    eat: kittyEat,
    play: kittyPlay,
    complete: kitty
  }

  function handleCatStateChange(catState) {
    setCurrentCatState(catState);
    setTimeout(() => {
      setCurrentCatState('idle');
    }, 3000);
  }

  function handleButtonRedeem(action) {
    const actionCost = catObject[action].cost;
    if (points >= actionCost && !catObject[action].redeemed) {
      handleCatStateChange(action)
      redeemAction(action);
    } else {
      setAlert('Not enough carrots!');
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  }

  return (
    <div className={`cat-game-container ${openDropdown === 'dropdown1' ? 'open' : 'closed'}`}>
      {questsComplete ?
        <>
          <div className="neko-game-description">
            You did it!! You pet Neko, played with him and fed him some delicious fish. Now that Neko has his motivation again, he's got to get back to work! Thank you for all your help!
          </div>
          <div className="neko-image-container">

            <img className="cat-state-image" src={catStates["complete"]} />

          </div>
        </>
        :
        <>
          <div className="neko-game-description">
            Say Hello to Neko *pronounced neh-koh*. Neko needs help getting back to work.
            Earn carrots by completing quests and spend them to feed, pet, and play with Neko.
            Achieve all 3 objectives to save Nekos day! and job!
          </div>
          <div className="neko-image-container">
            {alert ?
              <div className="alert">{alert}</div>
              :
              <img className="cat-state-image" src={catStates[currentCatState]} />
            }
          </div>
        </>
      }
      <div className="game-button-container">
        <button
          disabled={catObject["eat"].redeemed}
          onClick={() => handleButtonRedeem("eat")}
          className="game-button">
          {catObject["eat"].redeemed ?
            "Redeemed!"
            :
            <>Feed <img className="carrot-icon" src={carrot} />100</>}
        </button>
        <button
          disabled={catObject["pet"].redeemed}
          onClick={() => handleButtonRedeem("pet")}
          className="game-button">
          {catObject["pet"].redeemed ?
            "Redeemed!"
            :
            <>Pet <img className="carrot-icon" src={carrot} />200</>}
        </button>
        <button
          disabled={catObject["play"].redeemed}
          onClick={() => handleButtonRedeem("play")}
          className="game-button">
          {catObject["play"].redeemed ?
            "Redeemed!"
            :
            <>Play <img className="carrot-icon" src={carrot} />250</>}
        </button>

      </div>
    </div>
  )

}