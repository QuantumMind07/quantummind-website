"use client";
import React from 'react';

const Main = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {console.log("about")}

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Quantum Mind. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Main;
