import React, { useState } from 'react';
import './Projects.css';
import archeologistCat from "../Images/Content/archeologistcat.webp";
import socialCat from "../Images/Content/socialcat.webp";
import exploreCat from "../Images/Content/explorecat.webp";
import shoppingCat from "../Images/Content/shoppingcat.webp";
import SecretsLanding from './SecretsLandingModal/SecretsLanding';


export default function Projects({ points, addPoints, redeemPoints, quests, completeQuest }) {

 const [toggleModal, setToggleModal] = useState(false)

 function handleToggleSecretsModal() {
  setToggleModal(!toggleModal)
  handleProjectQuest('quest3')
  if (!toggleModal) {
   document.querySelector("body").style.overflow = "hidden";
  } if (toggleModal) {
   document.querySelector("body").style.overflow = "auto";
  }
 }


 function handleProjectQuest(quest) {
  if (!quests[quest].completed) {
   completeQuest(quest);
  }
 }



 return (
  <>
   {toggleModal ? <SecretsLanding handleToggleSecretsModal={handleToggleSecretsModal} /> :
    <div className="projects-container">
     <div className='header-container'>
      <div className='projects-header'>Featured Projects</div>
      <div className="tags-container">
       <div className='tags-header'>Tags:</div>
       <div className="tag-personal"># Personal</div>
       <div className="tag-about">*"Personal" indicates this is a solo project</div>
       <div className="tag-work"># Work</div>
       <div className="tag-about">*"Work" indicates this is a project done for a job</div>
      </div>
     </div>
     <div className='projects-wrapper'>
      <div className="project-container">
       <div className='project-text-container'>
        <div className="project-header">
         <div className="project-header-text">Record | Company: FactorEarth
          <div className="tag-work"># Work</div>
         </div>
         <div className='project-logo-container'>
          <img className="project-logo" src={archeologistCat} />
         </div>
        </div>
        <div className="project-text">
         Record is a PWA crafted with C#, Graphql, and React. Within the Record app, I played a hands-on role in designing and implementing a form generation system. This system, an integral part of the Record application, empowered archaeologists to autonomously create and customize forms tailored to diverse state requirements. My contributions involved leveraging my development skills to ensure a seamless integration, ultimately facilitating a more efficient and personalized data collection, reporting and user tailored and patented exporting process for our users.
        </div>
       </div>
      </div>
      <div className="project-container">
       <div className='project-text-container'>
        <div className="project-header">
         <div className="project-header-text">Secrets Make Friends
          <div className="tag-personal"># Personal</div>
         </div>
         <div className='project-logo-container'>
          <img className="project-logo" src={socialCat} />
         </div>
        </div>
        <div className="project-text">
         Welcome to a space designed for sharing tea and building connections. This solo project, created with a MERN stack, features a React front end connected to a MongoDB/Mongoose backend via an Express server. Utilizing the MERN architecture the application allows for Full CRUD operations using MongoDB. API integrations such a Google Auth and the most appreciated - The Tenor API allowing for posting as many GIFs as one desires. Thats why we are here, right?
        </div>
        <div className="project-buttons-wrapper">
         <button onClick={() => handleToggleSecretsModal()} className="project-button">Website</button>
         <a href="https://github.com/sarahrosehumenik/secretsfrontend" className="project-button">GitHub</a>
        </div>
       </div>
      </div>
      <div className="project-container">
       <div className='project-text-container'>
        <div className="project-header">
         <div className="project-header-text">Explore/Curate | Company: FactorEarth
          <div className="tag-work"># Work</div>
         </div>
         <div className='project-logo-container'>
          <img className="project-logo" src={exploreCat} />
         </div>
        </div>
        <div className="project-text">
         a Content Management System (CMS) specifically designed for Explore. In this role, I leveraged Graphql and React technologies, enhancing the user experience through innovative spherical interfaces within the Explore app.
        </div>
        <div className="project-buttons-wrapper">
         <a href="https://factorearth.com/explore/" className="project-button">Website</a>
        </div>
       </div>
      </div>
      <div className="project-container">
       <div className='project-text-container'>
        <div className="project-header">
         <div className="project-header-text">Check Me Out
          <div className="tag-personal"># Personal</div>
         </div>
         <div className='project-logo-container'>
          <img className="project-logo" src={shoppingCat} />
         </div>
        </div>
        <div className="project-text">
         Don't get paid in clout, Check Me Out – a platform where you can showcase and sell your products while connecting with the community. This app is built with Django, employing server-side rendering for a smooth user experience. It integrates the Stripe API for secure payments and utilizes AWS for photo functionality. Developed collaboratively by a team of three contributors, Check Me Out keeps it simple and effective.A practical e- commerce solution exploring data relations within a store and social media space.
        </div>
        <div className="project-buttons-wrapper">
         <a href="https://checkme-out.herokuapp.com" className="project-button">Website</a>
         <a href="https://github.com/sarahrosehumenik/creative_marketplace" className="project-button">GitHub</a>
        </div>
       </div>
      </div>
     </div>
    </div>
   }
  </>

 )
}