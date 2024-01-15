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
    { id: 1, name: 'Sword' },
    { id: 2, name: 'Shield' },
    { id: 3, name: 'Armor' },
    { id: 4, name: 'Potion' },
    { id: 5, name: 'Bow' },
    { id: 6, name: 'Staff' },
  ];

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
