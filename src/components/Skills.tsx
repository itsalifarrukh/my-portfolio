"use client";
import { motion } from 'framer-motion';
import {
  Code,
  FileCode,
  Settings,
  Server,
  Database,
  GitBranch,
  Box,
  Cloud,
  Award,
  Users,
  Smile,
  Github,
} from 'lucide-react';

// Data-driven skills with Lucide icons (using only valid Lucide icons)
const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="w-7 h-7 text-emerald-400 drop-shadow-glow" />,
    skills: [
      { name: 'React.js', icon: <Code className="w-6 h-6 text-blue-400" /> },
      { name: 'JavaScript', icon: <Code className="w-6 h-6 text-yellow-400" /> },
      { name: 'HTML5', icon: <FileCode className="w-6 h-6 text-orange-400" /> },
      { name: 'CSS3', icon: <FileCode className="w-6 h-6 text-blue-300" /> },
      { name: 'Redux', icon: <Settings className="w-6 h-6 text-purple-400" /> },
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="w-7 h-7 text-blue-500 drop-shadow-glow" />,
    skills: [
      { name: 'Node.js', icon: <Server className="w-6 h-6 text-green-400" /> },
      { name: 'Express.js', icon: <Settings className="w-6 h-6 text-gray-300" /> },
      { name: 'MongoDB', icon: <Database className="w-6 h-6 text-green-500" /> },
      { name: 'REST API', icon: <Server className="w-6 h-6 text-blue-400" /> },
    ],
  },
  {
    title: 'Tools',
    icon: <GitBranch className="w-7 h-7 text-orange-400 drop-shadow-glow" />,
    skills: [
      { name: 'Git', icon: <GitBranch className="w-6 h-6 text-orange-400" /> },
      { name: 'Docker', icon: <Box className="w-6 h-6 text-blue-400" /> },
      { name: 'AWS', icon: <Cloud className="w-6 h-6 text-yellow-300" /> },
      { name: 'Jest', icon: <Award className="w-6 h-6 text-pink-400" /> },
      { name: 'Github', icon: <Github className="w-6 h-6 text-white" /> },
    ],
  },
  {
    title: 'Soft Skills',
    icon: <Smile className="w-7 h-7 text-pink-400 drop-shadow-glow" />,
    skills: [
      { name: 'Teamwork', icon: <Users className="w-6 h-6 text-emerald-400" /> },
      { name: 'Communication', icon: <Smile className="w-6 h-6 text-blue-400" /> },
      { name: 'Problem Solving', icon: <Code className="w-6 h-6 text-purple-400" /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full py-16 min-h-[70vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Vibrant blurred background glow, matching Hero/About */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-3xl max-h-3xl opacity-30 blur-3xl rounded-full z-0  animate-pulse-slow" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center relative drop-shadow-glow"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 animate-gradient-move">
            Skills
          </span>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="group rounded-3xl p-6 flex flex-col items-center justify-start bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-emerald-400/30 transition-all duration-300 relative overflow-visible"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center gap-2">
                {category.icon}
                <span className="text-lg font-bold text-white drop-shadow-glow font-sora">
                  {category.title}
                </span>
              </div>
              <div className="flex flex-col gap-4 w-full mt-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-emerald-400/20 hover:to-blue-500/10 transition-all duration-300 group-hover:scale-105"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: skillIdx * 0.08 }}
                    viewport={{ once: true }}
                  >
                    {skill.icon}
                    <span className="text-gray-300 font-medium font-sora text-base drop-shadow-glow">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;