import React, { useState } from 'react';
import { Trophy, Medal, User } from 'lucide-react';

const ScoringDashboard = () => {
  const [teams] = useState([
    { id: 1, name: "Team Alpha", score: 95, trend: "up" },
    { id: 2, name: "Team Beta", score: 88, trend: "stable" },
    { id: 3, name: "Team Gamma", score: 82, trend: "down" },
  ]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Trophy className="text-yellow-500" /> Competition Leaderboard
      </h1>

      {/* Top Standings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {teams.map((team, index) => (
          <div key={team.id} className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
            <div className="text-sm text-gray-500">Rank #{index + 1}</div>
            <div className="text-xl font-bold">{team.name}</div>
            <div className="text-3xl font-black text-blue-600">{team.score} pts</div>
          </div>
        ))}
      </div>

      {/* Full Score Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Rank</th>
              <th className="p-4">Participant</th>
              <th className="p-4 text-right">Total Score</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={team.id} className="border-t">
                <td className="p-4 font-medium">{index + 1}</td>
                <td className="p-4 flex items-center gap-2"><User size={16}/> {team.name}</td>
                <td className="p-4 text-right font-bold">{team.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoringDashboard;/