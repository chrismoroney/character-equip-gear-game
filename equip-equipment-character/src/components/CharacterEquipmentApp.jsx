import React, { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import EquipmentInventory from './EquipmentInventory';
import CharacterStats from './CharacterStats';

const CharacterEquipmentApp = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedEquipmentType, setSelectedEquipmentType] = useState(null);
  const [characterEquipments, setCharacterEquipments] = useState({});
  const [globalEquippedItems, setGlobalEquippedItems] = useState([]);

  const baseStats = { hp: 100, atk: 10, def: 10 };

  const characters = [
    { id: 1, name: 'Character 1' },
    { id: 2, name: 'Character 2' },
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
    { id: 1, type: 'Weapon', stats: { atk: 10 } },
    { id: 2, type: 'Weapon', stats: { atk: 10 } },
    { id: 3, type: 'Weapon', stats: { atk: 10 } },
    { id: 4, type: 'Weapon', stats: { atk: 10 } },
    { id: 5, type: 'Helmet', stats: { hp: 10 } }
  ];

  const onSelectCharacter = (character) => {
    setSelectedCharacter(character);
    setSelectedEquipmentType(null);
  };

  const onSelectEquipmentType = (type) => {
    setSelectedEquipmentType(type);
  };

  const onEquipItem = (item) => {
    setCharacterEquipments(prevCharacterEquipments => {
      const updatedEquipments = { ...prevCharacterEquipments };
      const prevEquippedItem = updatedEquipments[selectedCharacter.id] ? updatedEquipments[selectedCharacter.id][item.type] : null;

      updatedEquipments[selectedCharacter.id] = {
        ...updatedEquipments[selectedCharacter.id],
        [item.type]: item.id
      };

      if (prevEquippedItem) {
        setGlobalEquippedItems(prevGlobalEquippedItems =>
          prevGlobalEquippedItems.filter(id => id !== prevEquippedItem)
        );
      }

      setGlobalEquippedItems(prevGlobalEquippedItems => [...prevGlobalEquippedItems, item.id]);

      return updatedEquipments;
    });
  };

  const onRemoveItem = (itemType) => {
    setCharacterEquipments(prevCharacterEquipments => {
      const updatedEquipments = { ...prevCharacterEquipments };
      const equippedItem = updatedEquipments[selectedCharacter.id][itemType];

      delete updatedEquipments[selectedCharacter.id][itemType];

      setGlobalEquippedItems(prevGlobalEquippedItems =>
        prevGlobalEquippedItems.filter(id => id !== equippedItem)
      );

      return updatedEquipments;
    });
  };

  const equippedItems = selectedCharacter ? characterEquipments[selectedCharacter.id] || {} : {};

  const filteredInventory = inventory.filter(item => item.type === selectedEquipmentType && !globalEquippedItems.includes(item.id));

  const calculateStats = () => {
    if (!selectedCharacter) return baseStats;

    const characterItems = characterEquipments[selectedCharacter.id] || {};
    const stats = { ...baseStats };

    for (const itemType in characterItems) {
      const itemId = characterItems[itemType];
      const item = inventory.find(i => i.id === itemId);
      if (item) {
        for (const stat in item.stats) {
          stats[stat] = (stats[stat] || 0) + item.stats[stat];
        }
      }
    }

    return stats;
  };

  const characterStats = calculateStats();

  return (
    <div className="app-container">
      <CharacterList characters={characters} onSelectCharacter={onSelectCharacter} />
      {selectedCharacter && (
        <>
          <EquipmentInventory
            equipment={equipment}
            onSelectEquipmentType={onSelectEquipmentType}
            inventory={filteredInventory}
            onEquipItem={onEquipItem}
            onRemoveItem={onRemoveItem}
            equippedItems={equippedItems}
          />
          <CharacterStats stats={characterStats} />
        </>
      )}
    </div>
  );
};

export default CharacterEquipmentApp;
