import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Whitepace</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a href="Hero">Products</a>
          <a href="Solutions">Solutions</a>
          <a href="Resources">Resources</a>
          <a href="Pricing">Pricing</a>
              </div>
                      {/* Desktop Button */}
        <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-lg">
          Login
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
          </div>
          
                {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg w-fit">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar
