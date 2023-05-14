import React, { useState } from 'react';
import '../styles/Inventory.css';
import Navbar from "../components/Navbar";

const Inventory = () => {
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Medicine 1', stockCount: 10 },
    { id: 2, name: 'Medicine 2', stockCount: 15 },
    { id: 3, name: 'Medicine 3', stockCount: 5 },
  ]);

  const updateStock = (medicineId, newStockCount) => {
    setMedicines((prevMedicines) =>
      prevMedicines.map((medicine) =>
        medicine.id === medicineId ? { ...medicine, stockCount: newStockCount } : medicine
      )
    );
  };

  const deleteMedicine = (medicineId) => {
    setMedicines((prevMedicines) => prevMedicines.filter((medicine) => medicine.id !== medicineId));
  };

  return (
    <div>
      
      <Navbar/>
      <div className="inventory-container">
      <h2>Stock Management Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.name}</td>
              <td>{medicine.stockCount}</td>
              <td>
                <button className="increase-button" onClick={() => updateStock(medicine.id, medicine.stockCount + 1)}>
                  Increase
                </button>
                <button className="decrease-button" onClick={() => updateStock(medicine.id, medicine.stockCount - 1)}>
                  Decrease
                </button>
                <button className="delete-button" onClick={() => deleteMedicine(medicine.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Inventory;
