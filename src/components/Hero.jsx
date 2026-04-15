import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white px-6 py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Get More Done with <span className="text-blue-300">Whitepace</span>
          </h1>

          <p className="text-gray-200 text-lg mb-8">
            Powerful project management software that helps teams collaborate,
            organize tasks, and boost productivity from anywhere.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-500 hover:bg-blue-400 transition px-6 py-3 rounded-xl font-medium flex items-center gap-2">
              Try for free
              <ArrowRight size={18} />
            </button>

            <button className="border border-white/30 hover:bg-white/10 transition px-6 py-3 rounded-xl">
              Learn more
            </button>
          </div>

          {/* Small text */}
          <p className="text-sm text-gray-300 mt-4">
            No credit card required • Free forever plan available
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1774364083016-e3f1d4b5680c?q=80&w=764&auto=format&fit=crop"
            alt="dashboard"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
