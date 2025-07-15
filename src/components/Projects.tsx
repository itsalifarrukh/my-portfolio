"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Server, Database, Cloud } from "lucide-react";
import Image from 'next/image';

const projects = [
  {
    title: "VIP Portfolio",
    description:
      "A premium, glassy portfolio site with immersive animations and a luxury UI/UX, built with Next.js, TypeScript, and Tailwind.",
    image: "/globe.svg",
    tech: [
      { name: "Next.js", icon: <Server className="w-5 h-5 text-blue-400" /> },
      { name: "TypeScript", icon: <Code className="w-5 h-5 text-cyan-400" /> },
      { name: "Tailwind", icon: <Cloud className="w-5 h-5 text-emerald-400" /> },
    ],
    links: [
      { label: "GitHub", url: "#", icon: <Github className="w-5 h-5" /> },
      { label: "Live Demo", url: "#", icon: <ExternalLink className="w-5 h-5" /> },
    ],
  },
  {
    title: "MERN SaaS Dashboard",
    description:
      "A full-featured SaaS dashboard with analytics, user management, and real-time updates. Built with the MERN stack.",
    image: "/window.svg",
    tech: [
      { name: "MongoDB", icon: <Database className="w-5 h-5 text-green-400" /> },
      { name: "Express.js", icon: <Server className="w-5 h-5 text-gray-300" /> },
      { name: "React.js", icon: <Code className="w-5 h-5 text-blue-400" /> },
      { name: "Node.js", icon: <Server className="w-5 h-5 text-green-400" /> },
    ],
    links: [
      { label: "GitHub", url: "#", icon: <Github className="w-5 h-5" /> },
      { label: "Live Demo", url: "#", icon: <ExternalLink className="w-5 h-5" /> },
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce platform with payment integration, product management, and order tracking.",
    image: "/next.svg",
    tech: [
      { name: "React.js", icon: <Code className="w-5 h-5 text-blue-400" /> },
      { name: "Node.js", icon: <Server className="w-5 h-5 text-green-400" /> },
      { name: "MongoDB", icon: <Database className="w-5 h-5 text-green-400" /> },
    ],
    links: [
      { label: "GitHub", url: "#", icon: <Github className="w-5 h-5" /> },
      { label: "Live Demo", url: "#", icon: <ExternalLink className="w-5 h-5" /> },
    ],
  },
  {
    title: "Real-time Chat App",
    description:
      "A modern chat application with real-time messaging, notifications, and group chat features.",
    image: "/vercel.svg",
    tech: [
      { name: "React.js", icon: <Code className="w-5 h-5 text-blue-400" /> },
      { name: "Node.js", icon: <Server className="w-5 h-5 text-green-400" /> },
      { name: "MongoDB", icon: <Database className="w-5 h-5 text-green-400" /> },
    ],
    links: [
      { label: "GitHub", url: "#", icon: <Github className="w-5 h-5" /> },
      { label: "Live Demo", url: "#", icon: <ExternalLink className="w-5 h-5" /> },
    ],
  },
  {
    title: "Analytics Dashboard",
    description:
      "A visually rich analytics dashboard with charts, filters, and export features for business insights.",
    image: "/file.svg",
    tech: [
      { name: "React.js", icon: <Code className="w-5 h-5 text-blue-400" /> },
      { name: "Node.js", icon: <Server className="w-5 h-5 text-green-400" /> },
      { name: "MongoDB", icon: <Database className="w-5 h-5 text-green-400" /> },
    ],
    links: [
      { label: "GitHub", url: "#", icon: <Github className="w-5 h-5" /> },
      { label: "Live Demo", url: "#", icon: <ExternalLink className="w-5 h-5" /> },
    ],
  },
  {
    title: "Portfolio CMS",
    description:
      "A headless CMS for managing portfolio content, projects, and blog posts with a beautiful admin UI.",
    image: "/globe.svg",
    tech: [
      { name: "Next.js", icon: <Server className="w-5 h-5 text-blue-400" /> },
      { name: "TypeScript", icon: <Code className="w-5 h-5 text-cyan-400" /> },
      { name: "Tailwind", icon: <Cloud className="w-5 h-5 text-emerald-400" /> },
    ],
    links: [
      { label: "GitHub", url: "#", icon: <Github className="w-5 h-5" /> },
      { label: "Live Demo", url: "#", icon: <ExternalLink className="w-5 h-5" /> },
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full py-16 min-h-[70vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Vibrant blurred background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-3xl max-h-3xl opacity-30 blur-3xl rounded-full z-0  animate-pulse-slow" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center relative drop-shadow-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 animate-gradient-move">
            Projects
          </span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group rounded-2xl p-6 flex flex-col bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-emerald-400/30 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden min-h-[340px]"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-emerald-400/10 via-blue-500/10 to-purple-600/10 flex items-center justify-center">
                <Image
                  src={project.image.replace('/public', '')}
                  alt={project.title}
                  width={320}
                  height={180}
                  className="object-contain w-2/3 h-2/3 mx-auto drop-shadow-glow group-hover:scale-105 transition-transform duration-300"
                  priority={idx === 0}
                />
              </div>
              {/* Project Title */}
              <h3 className="text-lg font-bold text-white mb-1 font-sora drop-shadow-glow">
                {project.title}
              </h3>
              {/* Project Description */}
              <p className="text-gray-300 mb-2 text-sm min-h-[48px]">
                {project.description}
              </p>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-500/20 text-xs text-white font-medium shadow-sm border border-white/10"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-400/20 to-blue-500/20 text-white font-semibold hover:bg-emerald-500/30 hover:text-white transition-colors border border-white/10 shadow group text-xs font-semibold"
                  >
                    {link.icon}
                    <span className="hidden md:inline-block">{link.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;