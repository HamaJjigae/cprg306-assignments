"use client";

import React, {useState} from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import itemsData from './items.json';


const Page = () => {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const handleAddItem = (newItem) =>
  {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  const handleItemSelect = (item) => {
    const name = item.name
    .split(',')[0]
    .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(name);
  };
  return (
    <main className="min-h-screen bg-black text-green-500 p-8">
      <h1 className="text-3x1 font-bold mb-8 text-center">Shopping List</h1>
      <div className="flex space-x-8">
        <div className="w-1/2">
          <ItemList items={items} onItemSelect={handleItemSelect} />
          <NewItem onAddItem={handleAddItem} />
        </div>

        <div className="w-1/2">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>  );
};

export default Page;
