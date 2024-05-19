import React from 'react';

const EquipmentInventory = ({ equipment, onSelectEquipmentType, inventory }) => {
  return (
    <div className="equipment-inventory">
      <h2>Equipment Inventory</h2>
      <div className="equipment-buttons">
        {equipment.map((item) => (
          <button key={item.id} onClick={() => onSelectEquipmentType(item.name)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="inventory-list">
        {inventory.map((item) => (
          <div key={item.id}>
            <p>{item.type} - Stats: {JSON.stringify(item.stats)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentInventory;
