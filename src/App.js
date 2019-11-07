import React, { useState } from 'react';
import './App.css';
import TeamForm from './components/TeamForm';
import TeamDisplay from './components/TeamDisplay';

function App() {
const [teamData, teamDataHandler] =useState([
  
    
        {
          name: 'Josh Cirre',
          role: 'Support Engineer',
          email: 'joshcirre@gmail.com'
        },
        {
          name: 'Zuck',
          role: 'Lizard King',
          email: 'z@fb.com'
        },
        {
          name: 'RDJ',
          role: 'Iron Man',
          email: 'toosoon@rip.com'
        }
      
    
  ])

const addTeamMember = (member) => {
  const newMember = teamDataHandler([...teamData,member]);
}
  return (
    <div className="App">
      <TeamForm 
      addTeamMember={addTeamMember}
      team={teamData} />
      <TeamDisplay
      team={teamData} />
     
    </div>
  );
}

export default App;