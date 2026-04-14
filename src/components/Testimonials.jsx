import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 bg-blue-100 rounded-xl">
            <p className="mb-4">"Amazing product!"</p>
            <h4 className="font-bold">Client {i}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials
