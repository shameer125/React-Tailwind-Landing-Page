import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ali Khan",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Whitepace completely transformed how our team collaborates. It's fast, simple, and powerful.",
  },
  {
    name: "Sara Ahmed",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The interface is clean and intuitive. I can manage my work from anywhere without stress.",
  },
  {
    name: "Usman Tariq",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "Best productivity tool we've used so far. Highly recommended for growing teams.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
      <p className="text-gray-500 mb-12">
        Trusted by teams all around the world
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 mb-6 italic">"{t.review}"</p>

            {/* User */}
            <div className="flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full mb-3 object-cover"
              />
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
