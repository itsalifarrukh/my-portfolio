import { Github, ExternalLink, Code, Server, Cloud } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  fork: boolean;
  private: boolean;
  updated_at: string;
}

const projects = [
  {
    title: "VIP Portfolio",
    description:
      "A premium, glassy portfolio site with immersive animations and a luxury UI/UX, built with Next.js, TypeScript, and Tailwind.",
    image: "/projects/vip-portfolio.png", // Replace with actual screenshot
    tech: [
      { name: "Next.js", icon: <Server className="w-5 h-5 text-blue-400" /> },
      { name: "TypeScript", icon: <Code className="w-5 h-5 text-cyan-400" /> },
      {
        name: "Tailwind",
        icon: <Cloud className="w-5 h-5 text-emerald-400" />,
      },
    ],
    links: [
      { label: "GitHub", url: "#", icon: <Github className="w-5 h-5" /> },
      {
        label: "Live Demo",
        url: "#",
        icon: <ExternalLink className="w-5 h-5" />,
      },
    ],
  },
  // Add more projects here with actual screenshots
];

async function fetchGithubRepos() {
  const res = await fetch("https://api.github.com/users/itsalifarrukh/repos", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  const data: GithubRepo[] = await res.json();
  return data
    .filter((repo: GithubRepo) => !repo.fork && !repo.private)
    .sort(
      (a: GithubRepo, b: GithubRepo) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
}

export default async function ProjectsPage() {
  const githubRepos: GithubRepo[] = await fetchGithubRepos();
  return (
    <main className="w-full max-w-5xl mx-auto px-4 py-16 min-h-[60vh] relative">
      {/* Vibrant blurred background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-3xl max-h-3xl bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 opacity-20 blur-3xl rounded-full z-0" />
      <h1 className="text-4xl md:text-5xl mt-10 font-extrabold mb-12 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-glow text-center">
        Projects
      </h1>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
        {/* Featured Project */}
        <div className="col-span-1 md:col-span-2">
          <Card className="bg-[#1e293b]/80 backdrop-blur-xl border border-emerald-400 shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300 min-h-[400px] flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                width={64}
                height={64}
                className="rounded-xl"
              />
              <CardTitle className="text-3xl font-bold text-emerald-400 drop-shadow-glow">
                {projects[0].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <p className="text-gray-300 text-lg">{projects[0].description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {projects[0].tech.map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-400/20 text-white text-sm"
                  >
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                {projects[0].links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-blue-500 text-white font-semibold hover:scale-105 transition-transform"
                  >
                    {link.icon} {link.label}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        {/* GitHub Projects */}
        {githubRepos.length > 0 &&
          githubRepos.map((repo) => (
            <div key={repo.id}>
              <Card className="bg-[#1e293b]/80 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-emerald-400/30 transition-all duration-300 min-h-[380px] flex flex-col">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Github className="w-8 h-8 text-emerald-400 drop-shadow-glow" />
                  <CardTitle className="text-2xl font-bold text-emerald-400 drop-shadow-glow">
                    {repo.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-gray-300 text-lg">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {repo.language && (
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-400/20 text-white text-sm">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-blue-500 text-white font-semibold hover:scale-105 transition-transform"
                    >
                      <Github className="w-5 h-5" /> View on GitHub
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
    </main>
  );
}
