// EquipmentInventory.js
import React from 'react';

const EquipmentInventory = ({ equipment }) => {
  return (
    <div className="equipment-inventory">
      <h2>Equipment Inventory</h2>
      <div className="equipment-buttons">
        {equipment.map((item) => (
          <button key={item.id}>{item.name}</button>
        ))}
      </div>
    </div>
  );
};

export default EquipmentInventory;
