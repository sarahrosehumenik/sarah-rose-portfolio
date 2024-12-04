import React, { useState, useEffect } from 'react';
import Experience from '../Components/Experience';

// Helper functions for local storage
const saveToLocalStorage = (key, value) => {
 localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key, defaultValue) => {
 const saved = localStorage.getItem(key);
 return saved ? JSON.parse(saved) : defaultValue;
};

const useCurrency = () => {
 const [points, setPoints] = useState(() => getFromLocalStorage('points', 100));
 const [pointAmount, setPointAmount] = useState(0);
 const [triggerJiggle, setTriggerJiggle] = useState(false);
 const [questsComplete, setQuestsComplete] = useState(false)
 const [quests, setQuests] = useState(() => getFromLocalStorage('quests', {
  quest1: {
   title: "Quest 1",
   description: "Stay on Page for 1 minute",
   reward: 50,
   completed: false
  },
  quest2: {
   title: "Quest 2",
   description: "Find and answer poll question",
   reward: 100,
   completed: false
  },
  quest3: {
   title: "Quest 3",
   description: "Visit the project: Secrets Make Friends website",
   reward: 150,
   completed: false
  },
  quest4: {
   title: "Quest 4",
   description: "Click the Lucky carrot in the *On the Job Experience* section",
   reward: 200,
   completed: false
  }
 }));



 const [catObject, setCatObject] = useState(() => getFromLocalStorage('catObject',
  {
   eat: {
    cost: 100,
    redeemed: false,
   },
   pet: {
    cost: 200,
    redeemed: false,
   },
   play: {
    cost: 250,
    redeemed: false,
   }
  }));



 const redeemAction = (action) => {
  setCatObject((prevCatObject) => ({
   ...prevCatObject,
   [action]: {
    ...prevCatObject[action],
    redeemed: true,
   },
  }));
  redeemPoints(catObject[action].cost);
 };

 const handleJiggle = (bool) => {
  setTriggerJiggle(bool);
 };

 const addPoints = (amount) => {
  setPointAmount(amount);
  setTimeout(() => {
   setPointAmount(0);
  }, 3000);
 };

 const redeemPoints = (amount) => {
  setPoints((prevPoints) => Math.max(prevPoints - amount, 0));
 };

 const completeQuest = (questId) => {
  setPoints((prevPoints) => prevPoints + quests[questId].reward);
  addPoints(quests[questId].reward);
  setQuests((prevQuests) => {
   const updatedQuests = { ...prevQuests };
   const quest = updatedQuests[questId];
   if (quest && !quest.completed) {
    quest.completed = true;
   }
   return updatedQuests;
  });
  handleJiggle(true);
 };


 let allQuestsCompleted = Object.values(catObject).every(q => q.redeemed);

 useEffect(() => {
  setQuestsComplete(allQuestsCompleted)
  setTriggerJiggle(true);
  if (!quests['quest1'].completed) {
   // setPoints(100)
   const timer = setTimeout(() => {
    completeQuest('quest1');
   }, 30000);
   return () => clearTimeout(timer);
  }
 }, []);

 // Save points to local storage whenever it changes
 useEffect(() => {
  saveToLocalStorage('points', points);
 }, [points]);

 // Save quests to local storage whenever it changes
 useEffect(() => {
  saveToLocalStorage('quests', quests);

 }, [quests]);

 useEffect(() => {
  saveToLocalStorage('catObject', catObject);
  setTimeout(() => {
   setQuestsComplete(allQuestsCompleted)
  }, 2000);

 }, [catObject]);

 console.log(questsComplete)
 return {
  points,
  addPoints,
  redeemPoints,
  redeemAction,
  catObject,
  pointAmount,
  quests,
  completeQuest,
  handleJiggle,
  triggerJiggle,
  questsComplete
 }
};

export default useCurrency;