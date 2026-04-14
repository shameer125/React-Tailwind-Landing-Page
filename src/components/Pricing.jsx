import React from 'react'

const Pricing = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {["Free", "Personal", "Organization"].map((plan, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl shadow ${
              i === 1 ? "bg-blue-900 text-white" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{plan}</h3>
            <p className="mb-4">$19.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing
