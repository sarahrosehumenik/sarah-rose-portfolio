import { useState, useEffect } from "react";
import familyPortrait from "../../Images/Content/familyportrait.webp"
import Brady from "../../Images/Content/brady.webp"
import './PersonalAbout.css';

export default function PersonalAbout({ completeQuest, quests }) {

 const [wrongAnswer, setWrongAnswer] = useState(false)
 const [disableButtons, setDisableButtons] = useState(false)
 const [resultsText, setResultsText] = useState(null)

 useEffect(() => {
  if (quests['quest2'].completed) {
   setDisableButtons(true)
   setResultsText('You have already Taken the Poll')
  }
 }, [])

 function handlePollQuest(quest, value) {
  if (value) {
   completeQuest('quest2')
   setResultsText(value + ' is a great choice!')
  }
  else {
   setWrongAnswer(true)
   setResultsText('Halo is the only Wrong Answer')
  }
  setDisableButtons(true)

 }

 return (
  <>
   <div className="personal-text-container">
    <div className="personal-header">Whats the scoop?</div>
    <div className="personal-text">My Husband and I are both <strong className="highlight-two">Remote ^_^</strong> Software developers based on the east-ish coast in a cozy home inside of a state forest with our <strong className="highlight-one">6 cats</strong>.
     After saying good bye to our senior cat named Bubba last year, he inspired us to adopt other cats in need.
     We call our home <strong>"The Bubba Cat Sancturary😺"</strong>. Beyound litter boxes and catnip, I am an Avid <strong className="highlight-four">gamer</strong> on my custom built PC.
     Primarily in the Life Sim realm with a sprinkle of fortnite. Since we live in a Forest, of course
     I find myself outside alot, specifically gardening and learning about plants. When im coding for fun,
     maybe im mocking up a cool application or <strong className="highlight-three">learning how to build 2D video games</strong> with Unity.
    </div>
   </div>
   <div className="image-poll-wrapper">
    <div className="image-container">
     <img className="family-image" src={familyPortrait} />
    </div>
    <div className="poll-container">
     {resultsText === null ?
      <div className="poll-text"> Which video game do you like best?
       <div>(choose wisely)</div>
      </div>
      :
      <div className="poll-text">{resultsText}</div>
     }
     <div className="poll-buttons">
      <button disabled={disableButtons} onClick={() => handlePollQuest("quest2", "Stardew Valley")} className="poll-button">Stardew</button>
      <button disabled={disableButtons} onClick={() => handlePollQuest("quest2", "Fortnite")} className="poll-button">Fortnite</button>
      <button disabled={disableButtons} onClick={() => handlePollQuest("quest2", "Minecraft")} className="poll-button">Minecraft</button>
      <button disabled={disableButtons} onClick={() => handlePollQuest("quest2", null)} className="poll-button">Halo</button>
     </div>
    </div>
   </div>
  </>
 )
}