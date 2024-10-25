import React from 'react';
import Item from './item.js';

const ItemList = () => {
  const items =
    [
      { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
      { name: "bread 🍞", quantity: 2, category: "bakery" },
      { name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
      { name: "bananas 🍌", quantity: 6, category: "produce" },
      { name: "broccoli 🥦", quantity: 3, category: "produce" },
      { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" },
      { name: "pasta sauce 🍝", quantity: 3, category: "canned goods" },
      { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
      { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
      { name: "paper towels, 6 pack", quantity: 1, category: "household" },
      { name: "dish soap 🍽️", quantity: 1, category: "household" },
      { name: "hand soap 🧼", quantity: 4, category: "household" },
    ];
  return (
    <div>
      <div className="flex justify-between p-4 border-b text-lg font-bold"
        style={{ backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00', fontFamily: 'Courier, monospace' }}>
        <h2 className="flex-1">Name</h2>
        <h2 className="flex-1 text-right">Category</h2>
        <h2 className="flex-1 text-center">Quantity</h2>
      </div>

      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default ItemList;
