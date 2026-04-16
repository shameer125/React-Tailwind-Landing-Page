import React from 'react'

const Customization = () => {
  return (
    <section className="px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <img
        src="https://illustrations.popsy.co/blue/settings.svg"
        alt="customize"
        className="w-full max-w-md mx-auto"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">Customise it to your needs</h2>
        <p className="mb-6">
          Customize the app with plugins, custom themes and multiple text
          editors.
        </p>
        <button className="bg-blue-500 text-white px-5 py-3 rounded-xl">
          Let’s Go
        </button>
      </div>
    </section>
  );
}

export default Customization
