'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Star } from 'lucide-react';

const ProjectDetails = ({ id }) => {
  // Sample project data - in real app this would come from props or API
  const project = {
    id: id,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features include dark/light mode toggle, smooth animations, and a clean, professional design.",
    longDescription: "This portfolio website showcases my skills and projects in a visually appealing and user-friendly manner. Built with cutting-edge technologies, it demonstrates my proficiency in modern web development practices. The site features a responsive design that works seamlessly across all devices, smooth animations that enhance user experience, and a dark/light mode toggle for accessibility.",
    image: "/Photo.png",
    liveUrl: "https://portfolio-demo.com",
    githubUrl: "https://github.com/username/portfolio",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: [
      "Responsive design for all screen sizes",
      "Dark/Light mode toggle",
      "Smooth animations and transitions",
      "SEO optimized",
      "Fast loading performance",
      "Modern UI/UX design"
    ],
    status: "Completed",
    startDate: "2024-01-01",
    endDate: "2024-02-01",
    category: "Web Development"
  };

  return (
    <div className="min-h-screen bg-[#030014] dark:bg-[#030014] light:bg-white py-20">
      <div className="container mx-auto px-[5%] max-w-6xl">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                    {project.status}
                  </span>
                  <span className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 dark:bg-white/5 light:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              </div>

              {/* Project Timeline */}
              <div className="flex items-center space-x-6 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Started: {new Date(project.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>Completed: {new Date(project.endDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technologies */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-black/5 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-black/10 rounded-full text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm font-medium transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-6 mt-12">Project Overview</h2>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;