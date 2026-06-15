import React from 'react';
import competitionData from '../data/competitionData.json';
import { calculateRankings } from '../utils/scoreCalculator';

const Dashboard = () => {
  // Use your helper function to calculate totals, append ranks, and sort teams
  const rankedParticipants = calculateRankings(competitionData.participants);

  // Safely extract the top three placeholders dynamically based on real-time ranks
  const firstPlace = rankedParticipants.find(p => p.rank === 1);
  const secondPlace = rankedParticipants.find(p => p.rank === 2);
  const thirdPlace = rankedParticipants.find(p => p.rank === 3);

  return (
    <div className="dashboard-container">
      <header>
        {/* Pulls competition title dynamically from JSON */}
        <h1>{competitionData.competitionName || "Competition Leaderboard"}</h1>
        <p className="subtitle">Live Tournament Standings</p>
      </header>

      {/* Dynamic Podium Section */}
      <section className="podium">
        {/* 2nd Place Block */}
        {secondPlace && (
          <div className="rank second">
            <div className="avatar">2</div>
            <p className="name">{secondPlace.name}</p>
            <p className="score">{secondPlace.total} pts</p>
          </div>
        )}
        
        {/* 1st Place Block */}
        {firstPlace && (
          <div className="rank first">
            <div className="avatar">1</div>
            <p className="name">{firstPlace.name}</p>
            <p className="score">{firstPlace.total} pts</p>
          </div>
        )}

        {/* 3rd Place Block */}
        {thirdPlace && (
          <div className="rank third">
            <div className="avatar">3</div>
            <p className="name">{thirdPlace.name}</p>
            <p className="score">{thirdPlace.total} pts</p>
          </div>
        )}
      </section>

      {/* Dynamic Table Section */}
      <main className="table-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Participant</th>
              {/* Maps categories dynamically (e.g., logic, design, presentation) instead of W-L-D */}
              {competitionData.categories.map((category) => (
                <th key={category} style={{ textTransform: 'capitalize' }}>
                  {category}
                </th>
              ))}
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {rankedParticipants.map((team) => (
              <tr key={team.id}>
                <td>{team.rank}</td>
                <td><strong>{team.name}</strong></td>
                
                {/* Dynamically lookup individual breakdown scores matching headers */}
                {competitionData.categories.map((category) => (
                  <td key={category}>
                    {team.scores && team.scores[category] !== undefined 
                      ? team.scores[category] 
                      : 0}
                  </td>
                ))}
                
                <td className="points">{team.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;