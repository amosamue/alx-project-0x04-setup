"use client";
import React from "react";
import { useCount } from "@/context/CountContext";

const Header: React.FC = () => {
  const { count, increment, decrement } = useCount();

  return (
    <header className="p-4 bg-gray-100 flex items-center justify-between">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment} className="mr-2 p-1 bg-green-500 text-white">+1</button>
        <button onClick={decrement} className="p-1 bg-red-500 text-white">-1</button>
      </div>
    </header>
  );
};

export default Header;
