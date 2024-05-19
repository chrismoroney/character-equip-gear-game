import React, { useState } from 'react';
import CharacterList from './CharacterList';
import EquipmentInventory from './EquipmentInventory';

const CharacterEquipmentApp = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedEquipmentType, setSelectedEquipmentType] = useState(null);

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
    { id: 6, name: 'Artifact' }
  ];

  const inventory = [
    { id: 1, type: 'Weapon', stats: { attack: 10 } },
    { id: 2, type: 'Weapon', stats: { attack: 10 } },
    { id: 3, type: 'Weapon', stats: { attack: 10 } },
    { id: 4, type: 'Weapon', stats: { attack: 10 } },
    { id: 5, type: 'Helmet', stats: { health: 10 } }
  ];

  const onSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const onSelectEquipmentType = (type) => {
    setSelectedEquipmentType(type);
  };

  const filteredInventory = inventory.filter(item => item.type === selectedEquipmentType);

  return (
    <div className="app-container">
      <CharacterList characters={characters} onSelectCharacter={onSelectCharacter} />
      {selectedCharacter && (
        <EquipmentInventory
          equipment={equipment}
          onSelectEquipmentType={onSelectEquipmentType}
          inventory={filteredInventory}
        />
      )}
    </div>
  );
};

export default CharacterEquipmentApp;
