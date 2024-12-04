import React, { useState, useEffect } from 'react';
import './Experience.css';
import carrot from "../Images/Content/carrot.jpg";


export default function Experience({ quests, completeQuest }) {
  const [triggleJiggle, setTriggerJiggle] = useState(false);

  useEffect(() => {
    if (!quests.quest4.completed) {
      setTriggerJiggle(true);
    }
  }, [quests.quest4.completed, triggleJiggle]);

  function handleQuest() {
    completeQuest('quest4');
    setTriggerJiggle(false);
  }
  return (
    <div className="experience-container">
      <div className="experience-wrapper">
        <div className="experience-header">On the Job Experience</div>
        <div className="experience-text">
          <div className="header-wrapper">
            <div className="employer-name">Factor Earth</div>
            <div className="duration">2023</div>
            <div className='job-title'>Web Applicaiton Engineer</div>
          </div>
          <div className='job-description'>
            <div className='experience-item'><img className='carrot-icon' src={carrot} />Developed and maintained three key applications at Factor Earth as part of a collaborative full-stack team.</div>
            <div className='experience-item'><img className='carrot-icon' src={carrot} />Designed and implemented a form generation system for Record, a Progressive Web App (PWA) using C#, GraphQL, and React, enabling archaeologists to create customized forms.</div>
            <div className="experience-item">
              <img
                onClick={() => handleQuest()}
                className={`carrot-icon ${triggleJiggle ? "jiggle" : ""}`} src={carrot} />Enhanced data collection, reporting, and exporting processes within the Record app to meet diverse state requirements.</div>
            <div className='experience-item'><img className='carrot-icon' src={carrot} />Improved user experience in the Explore app by leveraging GraphQL and React to develop innovative spherical interfaces within the Curate Content Management System (CMS).</div>
          </div>
        </div>
        <div className="experience-text">
          <div className="header-wrapper">
            <div className="employer-name">General Assembly</div>
            <div className="duration"> 2022-2023</div>
            <div className='job-title'>Instructor</div>
          </div>
          <div className='job-description'>
            <div className='experience-item'><img className='carrot-icon' src={carrot} />
              Guided adult learners through a comprehensive Full Stack Immersive Program.</div>
            <div className='experience-item'><img className='carrot-icon' src={carrot} />
              Delivered instruction and actively contributed to curriculum development.</div>
            <div className='experience-item'><img className='carrot-icon' src={carrot} />
              Developed an in-depth understanding of the technologies taught to enhance students' knowledge.</div>
            <div className='experience-item'><img className='carrot-icon' src={carrot} />
              Created testing materials to grade student work.</div>
            <div className='experience-item'><img className='carrot-icon' src={carrot} />
              Provided on-the-spot problem-solving and debugging support.</div>
            <div className='experience-item'><img className='carrot-icon' src={carrot} />
              Emphasized real-time collaboration with co-instructors and students.</div>
            <div className='experience-item'><img className='carrot-icon' src={carrot} />
              Shared insights on building in an agile work environment and
              instilled a professional Git workflow.</div>
            <div className='experience-item'><img className='carrot-icon' src={carrot} />
              Fostered a comprehensive understanding of Full Stack Development and its practical application in a professional setting.</div>
          </div>
        </div>
      </div>
      <div className="skills-info">
        <div className='professional-text-container'>
          <div className='professional-header'>
            The classic but effective Skills List
          </div>
          <div className='skill-list'>
            HTML5
            <img className="carrot-icon" src={carrot} /> CSS
            <img className="carrot-icon" src={carrot} /> JavaScript
            <img className="carrot-icon" src={carrot} /> React
            <img className="carrot-icon" src={carrot} /> Node.js
            <img className="carrot-icon" src={carrot} /> Express
            <img className="carrot-icon" src={carrot} /> MongoDB
            <img className="carrot-icon" src={carrot} /> Mongoose
            <img className="carrot-icon" src={carrot} /> PosgreSQL
            <img className="carrot-icon" src={carrot} /> GraphQL
            <img className="carrot-icon" src={carrot} /> Github
            <img className="carrot-icon" src={carrot} /> Gitlab
            <img className="carrot-icon" src={carrot} /> Figma
            <img className="carrot-icon" src={carrot} /> Python
            <img className="carrot-icon" src={carrot} /> django
            <img className="carrot-icon" src={carrot} /> AWS
            <img className="carrot-icon" src={carrot} /> Unity
            <img className="carrot-icon" src={carrot} /> C#
            <img className="carrot-icon" src={carrot} /> Google Cloud
            <img className="carrot-icon" src={carrot} /> Stripe
            <img className="carrot-icon" src={carrot} /> Postman
            <img className="carrot-icon" src={carrot} /> Netlify
            <img className="carrot-icon" src={carrot} /> Amplify
            <img className="carrot-icon" src={carrot} /> Heroku
            <img className="carrot-icon" src={carrot} /> MakeCode
            <img className="carrot-icon" src={carrot} /> Godot Engine
            <img className="carrot-icon" src={carrot} /> Tile Mapping
          </div>
        </div>
      </div>
    </div>
  )
}