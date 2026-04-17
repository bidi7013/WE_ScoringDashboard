import React, { useState } from 'react';
import { Save, UserPlus } from 'lucide-react';

const ScoreEntry = () => {
  const [participant, setParticipant] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update the main dashboard would go here
    console.log(`Submitted: ${participant} - ${score}`);
    setParticipant('');
    setScore('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <UserPlus className="text-blue-600" /> Score Submission
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Participant Name</label>
          <input 
            type="text" 
            value={participant}
            onChange={(e) => setParticipant(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. Team Alpha"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Points Awarded</label>
          <input 
            type="number" 
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="0-100"
            required
          />
        </div>
        <button 
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 items-center gap-2"
        >
          <Save size={18} /> Update Leaderboard
        </button>
      </form>
    </div>
  );
};

export default ScoreEntry;