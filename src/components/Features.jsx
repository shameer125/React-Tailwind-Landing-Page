import React from 'react'

const Features = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Project Management</h2>
          <p className="mb-4">
            Images, videos, PDFs and audio files are supported.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>

        {/* Image */}
        <img
          src="https://cdn.pixabay.com/blog/preview/2026/04/06/06-27-49-719_960_720.jpg"
          alt="team"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
}

export default Features
