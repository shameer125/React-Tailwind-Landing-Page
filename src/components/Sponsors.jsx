import React from 'react'

const Sponsors = () => {
  return (
    <section className="px-6 py-16 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-10">Our sponsors</h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <img src="https://cdn.simpleicons.org/apple" className="h-8" />
        <img src="https://cdn.simpleicons.org/microsoft" className="h-8" />
        <img src="https://cdn.simpleicons.org/slack" className="h-8" />
        <img src="https://cdn.simpleicons.org/google" className="h-8" />
      </div>
    </section>
  );
}

export default Sponsors
