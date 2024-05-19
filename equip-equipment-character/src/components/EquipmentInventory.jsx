import React from 'react';

const EquipmentInventory = ({ equipment, onSelectEquipmentType, inventory, onEquipItem, onRemoveItem, equippedItems }) => {
  return (
    <div className="equipment-inventory">
      <h2>Equipment Inventory</h2>
      <div className="equipment-buttons">
        {equipment.map((item) => (
          <button key={item.id} onClick={() => onSelectEquipmentType(item.name)}>
            {item.name} {equippedItems[item.name] ? `(${item.name.toLowerCase()} ${equippedItems[item.name]})` : ''}
          </button>
        ))}
      </div>
      <div className="inventory-list">
        {inventory.map((item) => (
          <div key={item.id}>
            <p>
              {item.type} - Stats: {JSON.stringify(item.stats)}
              {equippedItems[item.type] === item.id ? (
                <span> (Equipped)</span>
              ) : (
                <button onClick={() => onEquipItem(item)}>Equip</button>
              )}
            </p>
          </div>
        ))}
      </div>
      <div className="equipped-list">
        <h3>Equipped Items</h3>
        {Object.keys(equippedItems).map(itemType => {
          const itemId = equippedItems[itemType];
          const item = inventory.find(i => i.id === itemId) || equipment.find(e => e.id === itemId);
          return (
            <div key={itemId}>
              <p>
                {item.type} {item.name} - Stats: {JSON.stringify(item.stats)}
                <button onClick={() => onRemoveItem(item.type)}>Remove</button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EquipmentInventory;
