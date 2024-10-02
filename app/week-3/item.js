import React from 'react';

const Item = ({ name, quantity, category }) =>
  {
    return (
      <li className="flex justify-between items-center p-4 border-b text-lg"
        style={{
          backgroundColor: '#000000',
          color: '#00FF00',
          borderColor: '#00FF00',
          fontFamily: 'Courier, monospace',
        }}>
      <span className="flex-1">{name}</span>
      <span className="flex-1 text-right">{category}</span>
      <span className="flex-1 text-center">{quantity}</span>
      </li>
    );
  };

export default Item;
