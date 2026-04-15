import React from "react";
import { CheckCircle } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Powerful Project Management
          </h2>

          <p className="text-gray-600 mb-6">
            Manage all your files, tasks, and team collaboration in one place.
            Images, videos, PDFs, and audio files are fully supported.
          </p>

          {/* Features list */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              Organize tasks easily
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              Secure cloud storage
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              Real-time team collaboration
            </li>
          </ul>

          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition shadow-md">
            Get Started →
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://cdn.pixabay.com/blog/preview/2026/04/06/06-27-49-719_960_720.jpg"
            alt="team"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
