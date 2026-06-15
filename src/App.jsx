import React from 'react';
import competitionData from './data/competitionData.json';
import { calculateRankings } from './utils/scoreCalculator';
import ScoreEntry from './components/ScoreEntry';

const App = () => {
  // 1. Calculate real-time totals and sort by descending points
  const rankedParticipants = calculateRankings(competitionData.participants);

  // 2. Safely locate top podium contenders based on computed arrays
  const firstPlace = rankedParticipants.find(p => p.rank === 1);
  const secondPlace = rankedParticipants.find(p => p.rank === 2);
  const thirdPlace = rankedParticipants.find(p => p.rank === 3);

  return (
    <div className="dashboard-container">
      <header>
        <h1>{competitionData.competitionName}</h1>
        <p className="subtitle">Live Tournament Standings</p>
      </header>

      {/* Podium Layout rendering dynamic data conditionally */}
      <section className="podium">
        {secondPlace && (
          <div className="rank second">
            <div className="avatar">2</div>
            <p className="name">{secondPlace.name}</p>
            <p className="score">{secondPlace.total} pts</p>
          </div>
        )}
        
        {firstPlace && (
          <div className="rank first">
            <div className="avatar">1</div>
            <p className="name">{firstPlace.name}</p>
            <p className="score">{firstPlace.total} pts</p>
          </div>
        )}

        {thirdPlace && (
          <div className="rank third">
            <div className="avatar">3</div>
            <p className="name">{thirdPlace.name}</p>
            <p className="score">{thirdPlace.total} pts</p>
          </div>
        )}
      </section>

      {/* Table Section driven entirely by JSON maps */}
      <main className="table-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Participant</th>
              {competitionData.categories.map((cat) => (
                <th key={cat}>{cat}</th>
              ))}
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {rankedParticipants.map((team) => (
              <tr key={team.id}>
                <td>{team.rank}</td>
                <td><strong>{team.name}</strong></td>
                {competitionData.categories.map((cat) => (
                  <td key={cat}>{team.scores[cat] || 0}</td>
                ))}
                <td className="points">{team.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Optional Admin Input Tool included in codebase */}
      <ScoreEntry />
    </div>
  );
};

export default App;