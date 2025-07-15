"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Terminal } from 'lucide-react';

const words = ['Farrukh Ali', 'a Developer', 'a Problem Solver'];

const Hero: React.FC = () => {
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);

    const type = () => {
      setTypingText(currentChar);
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        setTimeout(() => {
          setIsDeleting((prev) => !prev);
          if (!isDeleting) {
            setTimeout(() => setCharIndex(currentWord.length), 800);
          } else {
            setWordIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1));
            setCharIndex(0);
          }
        }, 1200);
        return;
      }
    };
    const timer = setTimeout(type, isDeleting ? 80 : 160);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
<section
  id="home"
  className="pt-16 pb-16 md:pt-16 md:pb-16 min-h-screen flex items-center relative overflow-hidden"
>
      {/* Vibrant blurred background glow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left: Introduction */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2 drop-shadow-glow">
                Hello, I&apos;m
              </span>
              <span className="inline-block bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {typingText}
                <span className="inline-block animate-pulse">|</span>
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold">
              MERN Stack Developer
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              I build exceptional digital experiences with MongoDB, Express, React, and Node.js. Passionate about creating
              efficient, scalable, and user-friendly web applications.
            </p>
            <div className="flex space-x-4">
              <Button asChild className="font-semibold px-6 py-3">
                <Link
                  href="#projects"
                  className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 hover:from-emerald-500 hover:to-blue-600 text-white px-6 py-3 font-semibold transition-colors"
                >
                  View My Work
                </Link>
              </Button>
              <Button asChild variant="outline" className="font-semibold px-6 py-3">
                <Link
                  href="#contact"
                  className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-6 py-3 font-semibold transition-colors"
                >
                  Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Terminal */}
          <motion.div
            className="md:w-1/2 flex justify-center mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 md:w-96" style={{ boxShadow: '0 8px 32px 0 rgba(16, 185, 129, 0.25), 0 1.5px 8px 0 rgba(99, 102, 241, 0.10)' }}>
              <motion.div
                className="terminal-window bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl rounded-2xl overflow-hidden border-2 border-transparent"
                animate={{ y: [-10, 10] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              >
                <div className="terminal-header bg-slate-700 p-2 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-300 flex items-center">
                    <Terminal className="w-4 h-4 mr-1" /> terminal
                  </span>
                </div>
                <div className="terminal-content font-mono text-sm p-4 h-80 md:h-96 overflow-y-auto">
                  <div className="command-line flex mb-2">
                    <span className="command-prompt text-emerald-400 mr-2">$</span>
                    <span className="command text-white">whoami</span>
                  </div>
                  <div className="command-output text-gray-300 mb-4">
                    MERN Stack Developer | JavaScript Enthusiast | Problem Solver
                  </div>
                  <div className="command-line flex mb-2">
                    <span className="command-prompt text-emerald-400 mr-2">$</span>
                    <span className="command text-white">cat about.txt</span>
                  </div>
                  <div className="command-output text-gray-300 mb-4">
                    3+ years experience
                    <br />
                    Full-stack development
                    <br />
                    Clean, efficient code
                    <br />
                    Passion for learning
                  </div>
                  <div className="command-line flex mb-2">
                    <span className="command-prompt text-emerald-400 mr-2">$</span>
                    <span className="command text-white">npm start</span>
                  </div>
                  <div className="command-output text-emerald-400">Starting the development server...</div>
                </div>
              </motion.div>
              {/* Vibrant border glow */}
              <div className="absolute -inset-2 rounded-2xl pointer-events-none z-[-1] bg-gradient-to-br from-emerald-400 via-blue-400 to-purple-500 opacity-30 blur-lg" />
              {/* Soft background glow */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full opacity-20 filter blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;