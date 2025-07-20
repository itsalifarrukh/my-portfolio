import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 py-16 min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl mt-10 font-extrabold mb-12 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-glow text-center">
        About Me
      </h1>
      {/* Vibrant blurred background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-3xl max-h-3xl opacity-20 blur-3xl rounded-full z-0 pointer-events-none" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-[minmax(180px,_auto)]">
        {/* Professional Summary - spans both columns */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-emerald-400/30 hover:-translate-y-2 transition-all duration-300 col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-emerald-400">
              Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-lg">
              A brief summary about your professional background, skills, and what makes you unique as a developer. (Replace this with your own summary.)
            </p>
          </CardContent>
        </Card>
        {/* Professional Experience */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-blue-400/30 hover:-translate-y-2 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-blue-400">
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              <li>
                <div className="font-semibold text-white">Senior MERN Developer - Tech Solutions Inc.</div>
                <div className="text-gray-400 text-sm mb-1">2021 - Present</div>
                <div className="text-gray-300">Lead development of enterprise-level applications, mentored junior developers, and implemented CI/CD pipelines.</div>
              </li>
              {/* Add more professional experiences here */}
            </ul>
          </CardContent>
        </Card>
        {/* Past Experience */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-purple-400/30 hover:-translate-y-2 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-purple-400">
              Past Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              <li>
                <div className="font-semibold text-white">Full Stack Developer - Digital Creations</div>
                <div className="text-gray-400 text-sm mb-1">2019 - 2021</div>
                <div className="text-gray-300">Developed and maintained multiple client projects, improved application performance by 40%, and introduced React best practices.</div>
              </li>
              {/* Add more past experiences here */}
            </ul>
          </CardContent>
        </Card>
        {/* Education - spans both columns on desktop */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-emerald-400/30 hover:-translate-y-2 transition-all duration-300 col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-emerald-400">
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6 md:flex md:space-y-0 md:space-x-12">
              <li>
                <div className="font-semibold text-white">BSc in Computer Science - State University</div>
                <div className="text-gray-400 text-sm mb-1">2015 - 2019</div>
                <div className="text-gray-300">Specialized in Web Technologies and Software Engineering. Graduated with honors.</div>
              </li>
              {/* Add more education here */}
            </ul>
          </CardContent>
        </Card>
        {/* Certifications */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-blue-400/30 hover:-translate-y-2 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-blue-400">
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              <li>
                <div className="font-semibold text-white">Full Stack Web Development - Coding Bootcamp</div>
                <div className="text-gray-400 text-sm mb-1">2018</div>
                <div className="text-gray-300">Intensive 12-week program focusing on modern JavaScript frameworks and full-stack development.</div>
              </li>
              {/* Add more certifications here */}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
} 