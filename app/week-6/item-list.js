import React from 'react';
import Item from './item.js';
import { useState } from 'react';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });
  return (
    <div>
      <div className="flex justify-between p-4 border-b text-lg font-bold"
        style={{ backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00', fontFamily: 'Courier, monospace' }}>
        <h2 className="flex-1">Name</h2>
        <h2 className="flex-1 text-right">Category</h2>
        <h2 className="flex-1 text-center">Quantity</h2>
      </div>
      <div className="mb-4">
        <button
          onClick={() => setSortBy("name")}
          style={{
            backgroundColor: sortBy === "name" ? '#00FF00' : '#FFFFFF',
            color: sortBy === "name" ? '#000000' : '#000000'
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{
            backgroundColor: sortBy === "category" ? '#00FF00' : '#FFFFFF',
            color: sortBy === "category" ? '#000000' : '#000000'
          }}
        >
          Sort by Category
        </button>
      </div>
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default ItemList;
