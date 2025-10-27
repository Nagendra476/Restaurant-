import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white flex justify-between items-center p-4">
      <div className="text-xl font-bold">Book my Order</div>
      <div>
        <button className="mr-4">Search Items</button>
        <input type="text" placeholder="Search" className="p-1 rounded" />
        
        <button className="ml-4">
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
