"use client";

import React, {useState} from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './items.json';

const Page = () => {

  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) =>
  {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  return (
    <main className="min-h-screen bg-black text-green-500 p-8">
      <h1 className="text-3x1 font-bold mb-8 text-center">Shopping List</h1>
      <ItemList items={items} />
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
};

export default Page;
