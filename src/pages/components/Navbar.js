import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="image/Icon.png" alt="icon" className="h-8 w-8" width={24.36} height={16.71} />
          <span className="text-2xl font-bold">Nexcent</span>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        <div className={`flex-col md:flex-row md:flex items-center md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <a href="#home" className="text-gray-700">Home</a>
          <a href="#features" className="text-gray-700">Features</a>
          <a href="#community" className="text-gray-700">Community</a>
          <a href="#product" className="text-gray-700">Product</a>
          <a href="#blog" className="text-gray-700">Blog</a>
          <a href="#pricing" className="text-gray-700">Pricing</a>
          <a href="#register" className="bg-[#4CAF50] text-white px-4 py-2 rounded-md hover:bg-[#3e9f3e] transition duration-300">
            Register Now-&gt;
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
