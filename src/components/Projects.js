// src/pages/Projects.js
import React from "react";
import { Link } from "react-router-dom";
import { FaPython, FaReact, FaRobot, FaShoppingCart ,FaUtensils} from "react-icons/fa";

function Projects() {
  const projectList = [
    {
      title: "E-Commerce Website",
      description:
        "Developed a Django-based e-commerce platform with product browsing, purchasing, and management features.",
      tech: ["Django", "HTML", "CSS"],
      icon: <FaShoppingCart className="text-4xl text-blue-600" />,
      github: "https://github.com/Tharaniguru/e-commerce_with_django", // ← Your GitHub link
    },
    {
      title: "Voice Assistant",
      description:
        "Built a Python-based voice assistant with task automation and fun features.",
      tech: ["Python", "SpeechRecognition"],
      icon: <FaRobot className="text-4xl text-green-600" />,
      github: "https://github.com/Tharaniguru/JARVIS", // ← Your GitHub link
    },
    {
      title: "Recipe Sharing Web App",
      description:
        "Web app using Django and MySQL for sharing recipes and delivery requests.",
      tech: ["Django", "MySQL", "HTML/CSS"],
      icon: <FaUtensils className="text-4xl text-red-500" />,
      github: "https://github.com/Tharaniguru/RecipeSharing", // ← Your GitHub link
    },
    {
      title: "Chat Application (Ongoing)",
      description:
        "Developing a real-time chat app with AI-assisted messaging using the MERN stack.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      icon: <FaPython className="text-4xl text-purple-600" />,
      github: "https://github.com/Tharaniguru/CN_Chat_Application", // ← Your GitHub link
    },
  ];
  

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 px-6 py-12 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-10 text-center">
        My Projects
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300"
          >
            <div className="mb-4">{project.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {project.title}
            </h2>
            <p className="text-gray-700 text-md mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="text-sm text-gray-500 mb-4">
              <strong>Technologies:</strong> {project.tech.join(", ")}
            </div>
            <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:text-blue-800 font-medium transition"
        >
          View on GitHub &rarr;
        </a>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
