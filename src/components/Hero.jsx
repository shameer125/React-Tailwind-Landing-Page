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
        src="https://images.unsplash.com/photo-1774364083016-e3f1d4b5680c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="dashboard"
        className="w-full max-w-md mx-auto"
      />
    </section>
  );
}

export default Hero
