import React from "react";
import { Button } from "rsuite";
import 'rsuite/dist/rsuite.min.css';

const Navbar = () => {
  return (
    <header className="bg-themeblue w-full sticky top-0 shadow-md z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between pl-4 pr-4">
        <div>
          <h1 className="text-textcolortheme font-bold text-9xl mq450:text-5xl">QUANTUM MIND</h1>
        </div>
        <nav className="w-[40%] mq450:hidden">
          <ul className="w-full flex justify-between items-center text-textcolortheme text-base">
            <li>
              <a href="#home" className="hover:no-underline font-bold">Home</a>
            </li>
            <li>
              <a href="#contact" className="hover:no-underline font-bold">Contact</a>
            </li>
            <li>
              <a href="#about" className="hover:no-underline font-bold">About</a>
            </li>
            <li>
              <a href="#templates" className="hover:no-underline font-bold">Templates</a>
            </li>
          </ul>
        </nav>

        <div>
          <Button appearance="primary" className="bg-textcolortheme text-white px-4 py-2 w-[120px] mq450:hidden">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;