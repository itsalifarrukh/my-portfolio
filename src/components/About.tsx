"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section id="about" className="w-full py-16 min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Vibrant blurred background glow, matching Hero */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-3xl max-h-3xl opacity-20 blur-3xl rounded-full z-0" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left: Animated Profile Image */}
          <motion.div
            className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Avatar className="w-64 h-64 border-4 border-emerald-400 shadow-2xl">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
                  alt="Developer profile"
                />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border-2 border-emerald-500 shadow-lg">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Glassy Card with Tabs */}
          <motion.div
            className="md:w-2/3 md:pl-12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative overflow-hidden text-center md:text-left">
                <span className="inline-block animate-shine bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  About Me
                </span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-8 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 pointer-events-none" />
              </h2>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-slate-700/80 rounded-lg mb-4">
                  <TabsTrigger
                    value="about"
                    className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white cursor-pointer flex items-center gap-2 font-semibold"
                  >
                    <User className="w-4 h-4" /> About
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white cursor-pointer flex items-center gap-2 font-semibold"
                  >
                    <Briefcase className="w-4 h-4" /> Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white cursor-pointer flex items-center gap-2 font-semibold"
                  >
                    <GraduationCap className="w-4 h-4" /> Education
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="mt-4">
                  <p className="text-gray-300 mb-4 text-lg">
                    I&apos;m a passionate MERN stack developer with expertise in building modern web applications. My journey in
                    web development started 3 years ago, and since then I&apos;ve been obsessed with creating clean, efficient,
                    and user-friendly digital experiences.
                  </p>
                  <p className="text-gray-300 mb-4">
                    I specialize in JavaScript technologies across the whole stack (MongoDB, Express.js, React.js, Node.js).
                    My approach combines technical excellence with creative problem-solving to deliver high-quality solutions.
                  </p>
                  <p className="text-gray-300">
                    When I&apos;m not coding, you can find me contributing to open-source projects, learning new technologies, or
                    sharing knowledge with the developer community.
                  </p>
                </TabsContent>

                <TabsContent value="experience" className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-white">Senior MERN Developer</h3>
                      <p className="text-gray-300">Tech Solutions Inc. • 2021 - Present</p>
                      <p className="text-gray-300 mt-2">
                        Lead development of enterprise-level applications, mentored junior developers, and implemented CI/CD
                        pipelines.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Full Stack Developer</h3>
                      <p className="text-gray-300">Digital Creations • 2019 - 2021</p>
                      <p className="text-gray-300 mt-2">
                        Developed and maintained multiple client projects, improved application performance by 40%, and
                        introduced React best practices.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-white">BSc in Computer Science</h3>
                      <p className="text-gray-300">State University • 2015 - 2019</p>
                      <p className="text-gray-300 mt-2">
                        Specialized in Web Technologies and Software Engineering. Graduated with honors.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Full Stack Web Development</h3>
                      <p className="text-gray-300">Coding Bootcamp • 2018</p>
                      <p className="text-gray-300 mt-2">
                        Intensive 12-week program focusing on modern JavaScript frameworks and full-stack development.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 2.5s linear infinite;
        }
        @keyframes shine-glow {
          0%, 100% { opacity: 0; }
          40% { opacity: 0; }
          50% { opacity: 1; }
          60% { opacity: 0; }
        }
        .animate-shine-glow {
          animation: shine-glow 2.5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;