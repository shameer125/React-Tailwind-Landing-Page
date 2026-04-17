import React from 'react'

const Customization = () => {
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative order-1 md:order-none">
          <div className="absolute -inset-4 bg-blue-200/40 blur-2xl rounded-3xl"></div>
          <div className="relative bg-white p-6 rounded-3xl shadow-2xl border">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/013/087/516/small/diagonal-golden-line-glass-cube-on-black-background-illustration-of-website-banner-poster-sign-corporate-business-social-media-post-billboard-agency-advertising-media-motion-video-animation-wave-vector.jpg"
              alt="customize"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
            CUSTOMIZATION
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Customise it to your needs
          </h2>

          <p className="mb-8 text-gray-600 text-lg leading-relaxed">
            Tailor your workflow with powerful customization options. Add
            plugins, switch themes, and choose from multiple editors to match
            your productivity style.
          </p>

          {/* Features list */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-gray-700">Custom themes & layouts</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-gray-700">Plugin & extension support</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-gray-700">Multiple editor modes</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl font-semibold">
              Start Customizing
            </button>
            <button className="border border-gray-300 hover:bg-gray-100 transition px-6 py-3 rounded-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customization
