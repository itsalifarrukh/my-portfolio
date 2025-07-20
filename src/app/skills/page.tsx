import { Code, FileCode, Settings, Server, Database, GitBranch, Box, Cloud, Award, Users, Smile, Github } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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

export default function SkillsPage() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 py-16 min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl mt-10 font-extrabold mb-12 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-glow text-center">
        Skills
      </h1>
      {/* Vibrant blurred background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-3xl max-h-3xl opacity-20 blur-3xl rounded-full z-0 pointer-events-none" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-[minmax(180px,_auto)]">
        {/* Frontend - spans both columns */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-emerald-400/30 hover:-translate-y-2 transition-all duration-300 col-span-1 md:col-span-2">
          <CardHeader className="flex flex-row items-center gap-3">
            {skillCategories[0].icon}
            <CardTitle className="text-2xl md:text-3xl font-bold text-emerald-400">
              {skillCategories[0].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-4 mt-2">
              {skillCategories[0].skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-emerald-400/20 hover:to-blue-500/10 transition-all duration-300 text-gray-300 font-medium font-sora text-base drop-shadow-glow">
                  {skill.icon}
                  {skill.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        {/* Backend */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-blue-400/30 hover:-translate-y-2 transition-all duration-300">
          <CardHeader className="flex flex-row items-center gap-3">
            {skillCategories[1].icon}
            <CardTitle className="text-2xl md:text-3xl font-bold text-blue-400">
              {skillCategories[1].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-4 mt-2">
              {skillCategories[1].skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-blue-400/20 hover:to-purple-500/10 transition-all duration-300 text-gray-300 font-medium font-sora text-base drop-shadow-glow">
                  {skill.icon}
                  {skill.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        {/* Tools */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-orange-400/30 hover:-translate-y-2 transition-all duration-300">
          <CardHeader className="flex flex-row items-center gap-3">
            {skillCategories[2].icon}
            <CardTitle className="text-2xl md:text-3xl font-bold text-orange-400">
              {skillCategories[2].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-4 mt-2">
              {skillCategories[2].skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-orange-400/20 hover:to-blue-500/10 transition-all duration-300 text-gray-300 font-medium font-sora text-base drop-shadow-glow">
                  {skill.icon}
                  {skill.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        {/* Soft Skills - spans both columns on desktop */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-pink-400/30 hover:-translate-y-2 transition-all duration-300 col-span-1 md:col-span-2">
          <CardHeader className="flex flex-row items-center gap-3">
            {skillCategories[3].icon}
            <CardTitle className="text-2xl md:text-3xl font-bold text-pink-400">
              {skillCategories[3].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-4 mt-2">
              {skillCategories[3].skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-pink-400/20 hover:to-purple-500/10 transition-all duration-300 text-gray-300 font-medium font-sora text-base drop-shadow-glow">
                  {skill.icon}
                  {skill.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 