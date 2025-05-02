// src/pages/About.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
 
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center px-6 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-6">
          About Me
        </h1>

        <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
          I'm <span className="text-blue-600 font-semibold">Tharani Gurugandhi</span>, a third-year Computer Science and Engineering student at Kongu Engineering College (CGPA: 8.32). I'm passionate about programming and love solving real-world problems using innovative technologies.
        </p>

        <p className="text-lg text-gray-700 text-center mb-6">
          I’m proud to be an alumna of <span className="font-medium text-blue-600">Bharatiya Vidya Mandir Matriculation Higher Secondary School</span> in Pollachi. I completed my <strong>SSLC in 2020</strong> and <strong>HSC in 2022</strong>.
        </p>


        {/* Resume Section */}
        <div className="text-center mb-6">

          {/* View and Download Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="/THARANIG.pdf"
              download
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 shadow-lg transition"
            >
              Download Resume
            </a>
             <a
             href="/THARANIG.pdf"
             download
             className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 shadow-lg transition"
           >
             Download CV
           </a>
          </div>
        </div>

        {/* Projects Button */}
        <div className="text-center mt-6">
          <Link
            to="/projects"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-600 shadow-md transition"
          >
            View My Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
