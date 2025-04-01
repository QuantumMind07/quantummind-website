"use client";
import React from 'react';

const Main = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {console.log("about")}

      <main className="flex-grow container mx-auto p-6">{children}</main>
    </div>
  );
}

export default Main;
