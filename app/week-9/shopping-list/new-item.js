"use client";
import { useState } from "react";

  const generateId = () => Math.random().toString(18).substring(2,9);

export default function Counter({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: generateId(),
      name,
      quantity,
      category,
    };


    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="flex flex-col items-center p-4 border" style={{ backgroundColor: '#000000', borderColor: '#00FF00', color: '#00FF00', fontFamily: 'Courier, monospace' }}>
      <div className="p-4 border text-center" style={{ width: '200px', backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00' }}>
        Count: {quantity}
      </div>
      <div className="flex items-center justify-between space-x-4 my-2">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`p-2 border rounded ${quantity === 1 ? 'opacity-50' : ''}`}
          style={{ backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00' }}
        >
          -
        </button>

        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`p-2 border rounded ${quantity === 20 ? 'opacity-50' : ''}`}
          style={{ backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00' }}
        >
          +
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Item Name"
          className="p-2 border mb-2"
          style={{ backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00' }}
        />



        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="p-2 border my-2"
          style={{ backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00' }}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>

        <button
          type="submit"
          className="mt-6 p-2 border rounded"
          style={{ backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
