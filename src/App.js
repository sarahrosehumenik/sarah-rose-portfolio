import React from 'react';
import Landing from './Components/Landing';
import Projects from './Components/Projects';
import Nav from './Components/Nav/Nav';
import Experience from './Components/Experience';
import './App.css';
import useCurrency from './utils/useCurrency';

function App() {
  const { points, 
    addPoints,
    redeemPoints, 
    redeemAction, 
    catObject,
    pointAmount, 
    quests, 
    completeQuest, 
    handleJiggle, 
    questsComplete,
    triggerJiggle } = useCurrency();

  return (
    <div className="App">
    <Nav 
    points={points} 
    pointAmount={pointAmount} 
    addPoints={addPoints} 
    redeemPoints={redeemPoints}
    redeemAction={redeemAction}
    catObject={catObject}
    quests={quests}
    questsComplete={questsComplete}
    completeQuest={completeQuest}
    handleJiggle={handleJiggle}
    triggerJiggle={triggerJiggle}
     />
    <Landing 
    points={points} 
    addPoints={addPoints} 
    redeemPoints={redeemPoints} 
    quests={quests}
    completeQuest={completeQuest}
    />
    <Projects 
    points={points} 
    addPoints={addPoints} 
    redeemPoints={redeemPoints}
    quests={quests}
    completeQuest={completeQuest}
    />
    <Experience 
    quests={quests}
    completeQuest={completeQuest}
    />
    </div>
  );
}

export default App;
