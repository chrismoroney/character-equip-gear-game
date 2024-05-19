import React from 'react';

const CharacterList = ({ characters, onSelectCharacter }) => {
  return (
    <div className="character-list">
      <h2>Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <button onClick={() => onSelectCharacter(character)}>
              {character.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
