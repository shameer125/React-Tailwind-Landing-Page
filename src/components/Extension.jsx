import React from 'react'

const Extension = () => {
  return (
    <section className="relative bg-blue-900 text-white px-6 py-20 overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent)]"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <span className="inline-block bg-blue-700 text-sm px-4 py-1 rounded-full mb-4">
            EXTENSION
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Use as Extension
          </h2>

          <p className="mb-8 text-gray-300 text-lg leading-relaxed">
            Install our powerful web clipper extension for Chrome and Firefox to
            instantly save, organize, and access your content anytime, anywhere.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-semibold">
              Add to Browser
            </button>
            <button className="border border-white/30 hover:bg-white/10 transition px-6 py-3 rounded-xl">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Card */}
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-3xl"></div>

          <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-2xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DkvZuU6NukTFRDr-KYp5jwDn0wQhzCZV1A&s"
              alt="extension"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Extension
