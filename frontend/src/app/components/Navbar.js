"use client"
import Link from "next/link";
import React from "react";
import { Button } from "rsuite";
import 'rsuite/dist/rsuite.min.css';

const Navbar = () => {
  return (
    <header className="bg-themeblue w-full sticky top-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between pl-4 pr-4">
        <div>
          <h1 className="text-textcolortheme font-bold text-9xl mq450:text-5xl">QUANTUM MIND</h1>
        </div>
        <nav className="w-[40%] mq450:hidden">
          <ul className="w-full flex justify-between items-center text-textcolortheme text-base m-[0]">
            <li>
              <Link href="/" className="hover:no-underline font-bold">Home</Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:no-underline font-bold">Contact</Link>
            </li>
            <li>
              <Link href="/About" className="hover:no-underline font-bold">About</Link>
            </li>
            <li>
              <Link href="/Templates" className="hover:no-underline font-bold">Templates</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;