import React from 'react';

const CharacterStats = ({ stats }) => {
  return (
    <div className="character-stats">
      <h2>Character Stats</h2>
      <p>HP: {stats.hp}</p>
      <p>ATK: {stats.atk}</p>
      <p>DEF: {stats.def}</p>
    </div>
  );
};

export default CharacterStats;
