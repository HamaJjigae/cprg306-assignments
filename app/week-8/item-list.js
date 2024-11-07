"use client";

import React from 'react';
import Item from './item.js';
import { useState } from 'react';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });
  return (
    <div>
        <div className="mb-4 mt-4 flex justify-between space-x-4">
        <button
          onClick={() => setSortBy("name")}
          className="p-2 border rounded"
          style={{
            backgroundColor: sortBy === "name" ? '#00FF00' : '#000000',
            color: sortBy === "name" ? '#000000' : '#00FF00',
            borderColor: '#00FF00',
            flex: '0 0 25%',
            maxWidth: '150px',
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className="p-2 border rounded"
          style={{
            backgroundColor: sortBy === "category" ? '#00FF00' : '#000000',
            color: sortBy === "category" ? '#000000' : '#00FF00',
            borderColor: '#00FF00',
            flex: '0 0 25%',
            maxWidth: '150px',
          }}
        >
          Sort by Category
        </button>
      </div>
      <div className="flex justify-between p-4 border-b text-lg font-bold"
        style={{ backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00', fontFamily: 'Courier, monospace' }}>
        <h2 className="flex-1">Name</h2>
        <h2 className="flex-1 text-right">Category</h2>
        <h2 className="flex-1 text-center">Quantity</h2>
      </div>
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={() => onItemSelect(item)}
        />
      ))}
    </div>
  );
};

export default ItemList;
