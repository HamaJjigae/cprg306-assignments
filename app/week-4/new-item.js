"use client";
import { useState } from "react";

export default function Counter() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col items-center p-4 border" style={{ backgroundColor: '#000000', borderColor: '#00FF00', color: '#00FF00', fontFamily: 'Courier, monospace' }}>
      <div className="p-4 border text-center" style={{ width: '200px', backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00' }}>
        Count: {quantity}
      </div> 

      <div className="flex items-center justify-between space-x-4 mt-4">
        <button 
          onClick={decrement} 
          disabled={quantity === 1} 
          className={`p-2 border rounded ${quantity === 1 ? 'opacity-50' : ''}`}
          style={{ backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00' }}
        >
          -
        </button>
        
        <button 
          onClick={increment} 
          disabled={quantity === 20} 
          className={`p-2 border rounded ${quantity === 20 ? 'opacity-50' : ''}`}
          style={{ backgroundColor: '#000000', color: '#00FF00', borderColor: '#00FF00' }}
        >
          +
        </button>
      </div>
    </div>
  );
}
