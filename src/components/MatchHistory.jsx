const MatchHistory = ({ matches }) => (
  <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold mb-4">Recent Match Results</h3>
    <div className="space-y-3">
      {matches.map((match) => (
        <div key={match.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">{match.teamA}</span>
          <span className="text-sm font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            {match.scoreA} - {match.scoreB}
          </span>
          <span className="font-medium">{match.teamB}</span>
        </div>
      ))}
    </div>
  </div>
);