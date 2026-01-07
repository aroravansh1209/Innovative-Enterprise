import Hero from "../assets/Hero.jpeg";
import { useState } from "react";

export default function HomeHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-auto w-full flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">

      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Background image using Hero.jpeg */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${Hero})` }}
        ></div>

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/0"></div>
      </div>

      {/* Animated accent elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-600 font-semibold text-sm rounded-full border border-red-600/30">
              Enterprise IT Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">Your Complete IT Partner</h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
            From cutting-edge hardware to enterprise security, Innovative Enterprise delivers comprehensive IT solutions
            designed to drive your business forward.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-8 py-2.5 bg-red-600 text-white font-semibold rounded-full text-sm hover:bg-red-700 transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="/about-us"
              className="px-8 py-2.5 border-2 border-white text-white font-semibold rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
