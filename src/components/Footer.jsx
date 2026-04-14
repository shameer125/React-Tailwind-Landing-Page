import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white px-6 py-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Try Whitepace today</h2>
      <p className="mb-6 text-gray-300">Take your work everywhere you go</p>

      <img
        src="https://illustrations.popsy.co/blue/work-from-home.svg"
        alt="cta"
        className="w-40 mx-auto mb-6"
      />

      <button className="bg-blue-500 px-6 py-3 rounded-xl mb-6">
        Try Today
      </button>
      <p className="text-gray-300">© 2026 Whitepace</p>
    </footer>
  );
}

export default Footer
