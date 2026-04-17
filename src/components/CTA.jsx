import React from 'react'

const CTA = () => {
  return (
    <section className="relative bg-blue-400 text-white px-6 py-24 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent)]"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* badge */}
        <span className="inline-block bg-blue-700 text-sm px-4 py-1 rounded-full mb-6">
          GET STARTED
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Your work, everywhere you are
        </h2>

        <p className="mb-10 text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
          Access your notes, tasks, and projects from any device — mobile,
          tablet, or desktop. Stay productive wherever you go.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-xl font-semibold shadow-lg">
            Try Whitepace Free
          </button>
          <button className="border border-white/30 hover:bg-white/10 transition px-8 py-4 rounded-xl">
            Learn More
          </button>
        </div>

        {/* decorative glow button shadow */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      </div>
    </section>
  );
}

export default CTA
