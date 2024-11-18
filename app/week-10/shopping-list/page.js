"use client";

import React, {useState,useEffect} from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import {getAuth} from 'firebase/auth';
import {getItems,addItem} from '../_services/shopping-list-service.js';


const Page = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const loadItems = async (user) => {
    try {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };
  useEffect(() => {
    if (user) {
      loadItems(user);
    }
  }, [user]);

  const handleAddItem = async (newItem) =>
  {
    if (!user) return;
    try {
      const id = await addItem(user.uid, newItem);
      const itemId = { ...newItem, id };
      setItems((prevItems) => [...prevItems, itemId]);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
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
