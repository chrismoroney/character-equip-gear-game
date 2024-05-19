// CharacterEquipmentApp.js
import React, { useState } from 'react';
import CharacterList from './CharacterList';
import EquipmentInventory from './EquipmentInventory';

const CharacterEquipmentApp = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = [
    { id: 1, name: 'Character 1' },
    { id: 2, name: 'Character 2' },
    // Add more characters here
  ];

  const equipment = [
    { id: 1, name: 'Weapon' },
    { id: 2, name: 'Helmet' },
    { id: 3, name: 'Potion' },
    { id: 4, name: 'Chest' },
    { id: 5, name: 'Boots' },
    { id: 6, name: 'Artifact'}
  ];

  const inventory = [
    { id: 1, type: 'sword', stats: {attack: 10}}
  ]

  const onSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="app-container">
      <CharacterList characters={characters} onSelectCharacter={onSelectCharacter} />
      {selectedCharacter && <EquipmentInventory equipment={equipment} />}
    </div>
  );
};

export default CharacterEquipmentApp;
