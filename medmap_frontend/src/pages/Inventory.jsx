import React, { useState } from 'react';
import '../styles/Inventory.css';
import Navbar from "../components/Navbar"

const Inventory = () => {
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Medicine 1', stockCount: 10, price: 9.99 },
    { id: 2, name: 'Medicine 2', stockCount: 15, price: 19.99 },
    { id: 3, name: 'Medicine 3', stockCount: 5, price: 14.99 },
  ]);

  const [newMedicine, setNewMedicine] = useState({
    name: '',
    stockCount: '',
    price: '',
  });

  const handleInputChange = (e) => {
    setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, stockCount, price } = newMedicine;

    if (name.trim() === '' || stockCount.trim() === '' || price.trim() === '') {
      return;
    }

    const id = medicines.length > 0 ? medicines[medicines.length - 1].id + 1 : 1;

    const newMed = {
      id,
      name,
      stockCount: parseInt(stockCount),
      price: parseFloat(price),
    };

    setMedicines([...medicines, newMed]);
    setNewMedicine({ name: '', stockCount: '', price: '' });
  };

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
      <div className="left-pane">
        <h2>Add Medicine</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={newMedicine.name} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="stockCount">Quantity:</label>
            <input
              type="number"
              id="stockCount"
              name="stockCount"
              value={newMedicine.stockCount}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input type="number" step="0.01" id="price" name="price" value={newMedicine.price} onChange={handleInputChange} />
          </div>
          <button type="submit">Add Medicine</button>
        </form>
      </div>
      <div className="right-pane">
        <h2>Stock Management Inventory</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>{medicine.stockCount}</td>
                <td>{medicine.price}</td>
                <td>
                  <button
                    className="increase-button"
                    onClick={() => updateStock(medicine.id, medicine.stockCount + 1)}
                  >
                    Increase
                  </button>
                  <button
                    className="decrease-button"
                    onClick={() => updateStock(medicine.id, medicine.stockCount - 1)}
                  >
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
    </div>
  );
};

export default Inventory;