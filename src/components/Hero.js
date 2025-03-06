import React from "react";
import photocroped from "../assets/photoCroped.jpg";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-100 p-10 rounded-2xl shadow-lg">
      <div className="md:w-2/3 text-center md:text-left">
        <p className="text-lg text-gray-800 font-semibold leading-relaxed">
          "I'm Tharani, a passionate Computer Science Engineering student with a
          strong interest in Programming, Machine Learning, Cybersecurity, Embedded Systems,
          and Robotics. I enjoy solving real-world problems through AI and have
          worked on projects ranging from AI assistants to accident prediction
          models. With experience in Python, C, Java, and Django, I love
          exploring innovative technologies and building impactful solutions."
        </p>
      </div>
      <img
        src={photocroped}
        alt="Tharani"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-gray-300 shadow-md mt-6 md:mt-0 md:ml-10"
      />
    </section>
  );
}

export default Hero;
