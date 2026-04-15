/**
 * Calculates total score and ranks participants
 * @param {Array} participants - List of participant objects
 * @returns {Array} - Sorted list with ranks assigned
 */
export const calculateRankings = (participants) => {
  return [...participants]
    .map(p => ({
      ...p,
      total: Object.values(p.scores).reduce((a, b) => a + b, 0)
    }))
    .sort((a, b) => b.total - a.total)
    .map((p, index) => ({ ...p, rank: index + 1 }));
};

export const getCategoryAverage = (participants, category) => {
  const total = participants.reduce((sum, p) => sum + (p.scores[category] || 0), 0);
  return (total / participants.length).toFixed(1);
};