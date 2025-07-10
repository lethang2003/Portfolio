"use client";

import React from "react";
import GradientText from "./GradientText";
import ScrambledText from "./ScrambledText";
import ShinyText from "./ShinyText";
import StarBorder from "./StarBorder";

type ProjectCardProps = {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubFrontend?: string;
  githubBackend?: string;
  github?: string;
};

export default function ProjectCard({
  title,
  role,
  description,
  technologies,
  demoLink,
  githubFrontend,
  githubBackend,
  github,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/10 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 max-w-2xl w-full transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="mb-6">
          <GradientText
            className="text-3xl font-bold tracking-tight mb-2"
            colors={["#7afcff", "#feff9c", "#ff7eb9"]}
            animationSpeed={2}
          >
            {title}
          </GradientText>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium text-gray-300 tracking-wide">{role}</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-8">
          <ScrambledText className="text-gray-300 leading-relaxed text-base">
            {description}
          </ScrambledText>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-8">
          <ShinyText
            text="Tech Stack"
            speed={3}
            className="text-xl font-semibold mb-4 text-white"
          />
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <StarBorder key={tech} color="cyan" speed="4s">
                <span className="text-sm font-medium px-3 py-1">{tech}</span>
              </StarBorder>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="pt-6 border-t border-gray-700/50">
          <div className="flex gap-6 flex-wrap">
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 font-medium"
              >
                <span className="text-lg">🚀</span>
                <span className="group-hover/link:underline underline-offset-4">Live Demo</span>
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {githubFrontend && (
              <a 
                href={githubFrontend} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-all duration-300 font-medium"
              >
                <span className="text-lg">⚡</span>
                <span className="group-hover/link:underline underline-offset-4">Frontend</span>
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {githubBackend && (
              <a 
                href={githubBackend} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-all duration-300 font-medium"
              >
                <span className="text-lg">🔧</span>
                <span className="group-hover/link:underline underline-offset-4">Backend</span>
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 text-green-400 hover:text-green-300 transition-all duration-300 font-medium"
              >
                <span className="text-lg">📁</span>
                <span className="group-hover/link:underline underline-offset-4">Source Code</span>
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors duration-500"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-500/20 group-hover:border-purple-400/40 transition-colors duration-500"></div>
      </div>
    </div>
  );
}