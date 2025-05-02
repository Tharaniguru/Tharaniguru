import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/photoCroped.jpg"; // Replace with your actual image path

function Home() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-white px-6 py-12 md:py-24">
      {/* Left: Intro */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-blue-600">Tharani Gurugandhi</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
        a passionate Computer Science Engineering student with a strong interest in Programming. I love turning innovative ideas into impactful tech projects.
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
          <Link
            to="/projects"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={profilePic}
          alt="Tharani Gurugandhi"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}

export default Home;
