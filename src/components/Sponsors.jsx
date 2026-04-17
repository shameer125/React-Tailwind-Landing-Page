import React from 'react'

const Sponsors = () => {
  return (
    <section className="relative px-6 py-20 text-center bg-white overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent)]"></div>

      <div className="relative max-w-6xl mx-auto">
        <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
          TRUSTED BY
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Sponsors</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="https://cdn.simpleicons.org/apple"
              alt="Apple"
              className="h-10 opacity-60 hover:opacity-100 transition"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.shutterstock.com/image-illustration/kyiv-ukraine-november-15-2023-260nw-2388851351.jpg"
              alt="Microsoft"
              className="h-10 opacity-60 hover:opacity-100 transition"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGfnygji2TvZUUYXKLE5vHRDnI9NBBK_WCQ&s"
              alt="Slack"
              className="h-10 opacity-60 hover:opacity-100 transition"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="https://cdn.simpleicons.org/google"
              alt="Google"
              className="h-10 opacity-60 hover:opacity-100 transition"
            />
          </div>
        </div>

        {/* subtle line */}
        <div className="mt-12 h-px bg-gray-200 max-w-2xl mx-auto"></div>
      </div>
    </section>
  );
}

export default Sponsors
