import React from 'react'

const Hero = () => {
  return (
    <section className="bg-blue-900 text-white px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Get More Done with whitepace
        </h1>
        <p className="mb-6 text-gray-200">
          Project management software that enables your teams to collaborate.
        </p>
        <button className="bg-blue-500 px-6 py-3 rounded-xl">
          Try whitepace free
        </button>
      </div>

      {/* Image */}
      <img
        src="https://illustrations.popsy.co/blue/dashboard.svg"
        alt="dashboard"
        className="w-full max-w-md mx-auto"
      />
    </section>
  );
}

export default Hero
