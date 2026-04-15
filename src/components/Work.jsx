import React from "react";
import { CheckCircle } from "lucide-react";

const Work = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://burst.shopifycdn.com/photos/startup-desk.jpg?width=1000&format=pjpg&exif=0&iptc=0"
            alt="collaboration"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Work together, <br /> anywhere
          </h2>

          <p className="text-gray-600 mb-6">
            Collaborate with your team in real-time. Share ideas, manage tasks,
            and stay productive no matter where you are.
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              Real-time collaboration
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              Secure cloud storage
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <CheckCircle size={20} className="text-blue-600" />
              Access from any device
            </li>
          </ul>

          {/* Button */}
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition shadow-md">
            Try it now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
