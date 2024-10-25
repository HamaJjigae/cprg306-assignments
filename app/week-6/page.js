import React from 'react';
import ItemList from './item-list.js';

const Page = () => {
  return (
    <main className="min-h-screen bg-black text-green-500 p-8">
      <h1 className="text-3x1 font-bold mb-8 text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
