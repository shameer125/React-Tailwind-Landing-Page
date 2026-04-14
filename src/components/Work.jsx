import React from 'react'

const Work = () => {
  return (
    <section className="py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <img
        src="https://burst.shopifycdn.com/photos/startup-desk.jpg?width=1000&format=pjpg&exif=0&iptc=0"
        alt="collaboration"
        className="w-full max-w-md mx-auto"
      />

      <div>
        <h2 className="text-3xl font-bold mb-4">Work together</h2>
        <p className="mb-4">Collaborate with your team easily.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Try it now
        </button>
      </div>
    </section>
  );
}

export default Work
