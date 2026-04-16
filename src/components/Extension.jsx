import React from 'react'

const Extension = () => {
  return (
    <section className="bg-blue-900 text-white px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Use as Extension</h2>
        <p className="mb-6 text-gray-200">
          Use the web clipper extension, available on Chrome and Firefox, to
          save pages.
        </p>
        <button className="bg-blue-500 px-5 py-3 rounded-xl">Let’s Go</button>
      </div>
      <img
        src="https://illustrations.popsy.co/blue/puzzle.svg"
        alt="extension"
        className="w-full max-w-md mx-auto"
      />
    </section>
  );
}

export default Extension
