import React, { useState } from 'react';


const TeamDetails = ({ team1, team2 }) => {
  // State for storing bowling details
  const [bowlingDetails, setBowlingDetails] = useState({
    team1: [
      { id: 1, bowler: 'Bowler 1', overs: 0, runs: 0, fours: 0, sixes: 0, extras: 0 },
      { id: 2, bowler: 'Bowler 2', overs: 0, runs: 0, fours: 0, sixes: 0, extras: 0 }
    ],
    team2: [
      { id: 1, bowler: 'Bowler 1', overs: 0, runs: 0, fours: 0, sixes: 0, extras: 0 },
      { id: 2, bowler: 'Bowler 2', overs: 0, runs: 0, fours: 0, sixes: 0, extras: 0 }
    ]
  });

  // Function to handle input change for bowling details
  const handleInputChange = (team, id, field, value) => {
    setBowlingDetails(prevState => ({
      ...prevState,
      [team]: prevState[team].map(bowler =>
        bowler.id === id ? { ...bowler, [field]: value } : bowler
      )
    }));
  };

  // Function to add a new bowler
  const addBowler = (team) => {
    const newBowler = {
      id: Date.now(),
      bowler: `Bowler ${bowlingDetails[team].length + 1}`,
      overs: 0,
      runs: 0,
      fours: 0,
      sixes: 0,
      extras: 0
    };
    setBowlingDetails(prevState => ({
      ...prevState,
      [team]: [...prevState[team], newBowler]
    }));
  };

  // Function to remove a bowler
  const removeBowler = (team, id) => {
    setBowlingDetails(prevState => ({
      ...prevState,
      [team]: prevState[team].filter(bowler => bowler.id !== id)
    }));
  };

  // Function to calculate and return average
  const calculateAverage = (runs, overs) => {
    return overs === 0 ? 0 : (runs / overs).toFixed(2);
  };

  return (
    
    <div className="team-details">
      
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        team-1 bowling Details
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body table-content">
      <table  >
          <thead>
            <tr>
              <th>Bowler</th>
              <th>Overs</th>
              <th>Runs</th>
              <th>Fours</th>
              <th>Sixes</th>
              <th>Extras</th>
              <th>Average</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bowlingDetails.team1.map(bowler => (
              <tr key={bowler.id}>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'bowler', e.target.innerText)}>
                  {bowler.bowler}
                </td>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'overs', parseInt(e.target.innerText))}>
                  {bowler.overs}
                </td>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'runs', parseInt(e.target.innerText))}>
                  {bowler.runs}
                </td>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'fours', parseInt(e.target.innerText))}>
                  {bowler.fours}
                </td>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'sixes', parseInt(e.target.innerText))}>
                  {bowler.sixes}
                </td>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'extras', parseInt(e.target.innerText))}>
                  {bowler.extras}
                </td>
                <td>{calculateAverage(bowler.runs, bowler.overs)}</td>
                <td>
                  <button className="btn-edit-2" onClick={() => removeBowler('team1', bowler.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn-edit-2" onClick={() => addBowler('team1')}>Add Bowler</button>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        team-1 bowling Details
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body table-content">
      <table  >
          <thead>
            <tr>
              <th>Bowler</th>
              <th>Overs</th>
              <th>Runs</th>
              <th>Fours</th>
              <th>Sixes</th>
              <th>Extras</th>
              <th>Average</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bowlingDetails.team1.map(bowler => (
              <tr key={bowler.id}>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'bowler', e.target.innerText)}>
                  {bowler.bowler}
                </td>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'overs', parseInt(e.target.innerText))}>
                  {bowler.overs}
                </td>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'runs', parseInt(e.target.innerText))}>
                  {bowler.runs}
                </td>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'fours', parseInt(e.target.innerText))}>
                  {bowler.fours}
                </td>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'sixes', parseInt(e.target.innerText))}>
                  {bowler.sixes}
                </td>
                <td contentEditable="true" onBlur={(e) => handleInputChange('team1', bowler.id, 'extras', parseInt(e.target.innerText))}>
                  {bowler.extras}
                </td>
                <td>{calculateAverage(bowler.runs, bowler.overs)}</td>
                <td>
                  <button className="btn-edit-2" onClick={() => removeBowler('team1', bowler.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn-edit-2" onClick={() => addBowler('team1')}>Add Bowler</button>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        Score board
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="team-info">
        <div className="team-info-box">
          <h3>Team 1</h3>
          <p>Team Score: {team1.reduce((total, player) => total + player.runs, 0)}</p>
        </div>
        <div className="team-info-box">
          <h3>Team 2</h3>
          <p>Team Score: {team2.reduce((total, player) => total + player.runs, 0)}</p>
        </div>
      </div>
      </div>
    </div>
  </div>

      </div>
      
    
      <div>
        
        
      </div>
    </div>
  );
};

export default TeamDetails;
