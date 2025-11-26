import React, { useState, useEffect } from "react";
import { Sun, Moon, Linkedin, Braces, Github } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: persist dark mode preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  const projects = [
    {
      title: "SmartRoutes",
      desc: "Incident reporting, live map, filtering built with React.",
      tags: ["React", "Springboot", "Tailwind CSS", "Maven", "Vite", "JSX", "Java", "Java database H2"],
      url: "https://github.com/Sphelele494/Travel-Risk-Monitor.git",
    },
    {
      title: "JavaScript Ludo & Chess Game",
      desc: "A browser Ludo implementation with move validation",
      tags: ["Vanilla JS", "Algorithms"],
      url: "https://github.com/Khanyo03/KASINO-GAMES-.git",
    },
    {
      title: "Record label website",
      desc: "Markdown-powered website with syntax highlighting and themes.",
      tags: ["HTML", "CSS", "Netbeans"],
      url:  "https://mosguaprecords.netlify.app/",
    },
    {
      title: "BMICalculator & VehicleRegistration",
      desc: "Java portfolio project",
      tags: ["Java", "VS Code", "Intellij"],
      url: "https://github.com/Khanyo03/BmiCalculator.git",
    },
    {
      title: "VehicleRegistration",
      desc: "Java portfolio project",
      tags: ["Java", "Intellij"],
      url: "https://github.com/Khanyo03/VehicleRegistration-intellij.git",
    },
  ];

  const certificates = [
    { title: "Microsoft Azure fundamentals (AZ-900)", date: "May 28, 2025", url: "https://learn.microsoft.com/api/credentials/share/en-us/KHANYORAILO-9332/1FA501BF4DBF5656?sharingId=499429ABA06BD048" },
    { title: "JAVA SE 8 (OCA)", date: "Sep 02, 2025", url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5A6C404B9DBCAE32B089C5A5279D86D2E3040A58C93B4F36FD6D9441A6E2371C" },
    { title: "Power BI (PL-300)", date: "Oct 29, 2025", url: "https://learn.microsoft.com/api/credentials/share/en-us/KHANYORAILO-9332/6BB5C094A3F2399F?sharingId" },
    { title: "Power BI (AI-900)", date: "In progress", url: "#" },
  
  ];

  return (
    <div className={`min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors`}>
      {/* Header / Navigation */}
      <header className="sticky top-4 z-40 flex justify-center">
        <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-full shadow-lg px-6 py-3 flex gap-8 items-center">
          <a href="#home" className="text-green-700 dark:text-green-400 font-medium hover:text-white dark:hover:text-white transition">Home</a>
          <a href="#about" className="text-green-700 dark:text-green-400 font-medium hover:text-white dark:hover:text-white transition">About</a>
          <a href="#projects" className="text-green-700 dark:text-green-400 font-medium hover:text-white dark:hover:text-white transition">Projects</a>
          <a href="#certificates" className="text-green-700 dark:text-green-400 font-medium hover:text-white dark:hover:text-white transition">Certificates</a>
          <a href="#contact" className="text-green-700 dark:text-green-400 font-medium hover:text-white dark:hover:text-white transition">Contact</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 text-gray-600 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400 transition"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </header>

      {/* Rest of your component remains the same */}
      <main className="px-6 sm:px-12 lg:px-24 pt-8">
        {/* Hero Section */}
        <section id="home" className="max-w-4xl mx-auto">
          <div className="flex flex-col items-start gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center overflow-hidden shadow dark:bg-yellow-500">
                <Braces />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt="hero"
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=fc8f6c9b8f0e2c15a0d7b7c3d6a1f2b8"
                  className="w-64 h-40 object-cover rounded-3xl"
                />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
              I'm Khanyo Lebone Railo —{" "}
              <span className="text-green-700 dark:text-green-400">
                Software Developer 
              </span>
            </h1>

            <p className="text-gray-700 dark:text-gray-300 max-w-2xl text-lg">
              I build web apps, developer tools, and clean UI experiences. I focus on readable code,
              thoughtful UX, and delivering reliable production-ready software.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow hover:shadow-md dark:bg-green-600"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="inline-block bg-green-700 text-white border-gray-200 px-6 py-3 rounded-full font-medium dark:bg-green-600"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-16 max-w-3xl">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
             I'm Khanyo Lebone Railo. I've worked on a variety of projects over the years and I'm proud of the progress 
             I've made. Many of my projects are open source, and I enjoy collaborating with other developers to build tools 
             that help people. In the year 2025 I attended the Monkey and River hackathon hosted at Momentum Life Insurence.
             The hackathon pushed creativity, strategy, and technical skills to the next level. I had the opportunity to work 
             alongside some seriously talented individuals, and the energy throughout the event was absolutely contagious. 
             The challenge wasn't just about building something quickly - it was about thinking differently, adapting fast, 
             and solving real-world problems under pressure. I walked away with new ideas, new friends, and a renewed appreciation 
             for the power of collaborative innovation.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 border rounded-full text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href={p.url} className="text-teal-500 dark:text-teal-400 font-medium">
                    View project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Certificates</h2>
          <div className="space-y-4">
            {certificates.map((a) => (
              <div
                key={a.title}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-50 dark:border-gray-700 shadow-sm flex justify-between items-center"
              >
                <div>
                  <div className="text-sm text-gray-400">{a.date}</div>
                  <div className="text-lg font-medium">{a.title}</div>
                </div>
                <a href={a.url} className="text-teal-500 dark:text-teal-400 font-medium">
                  View Certificates ›
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Portfolio</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-50 dark:border-gray-700">
            <div className="space-y-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/khanyo-lebone-railo-10b4a228b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white shadow">
                    <Linkedin />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-teal-400">@Khanyo Lebone Railo</div>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Khanyo03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white shadow">
                    <Github />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-teal-400">@Khanyo03</div>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-16 mb-24">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <div className="max-w-xl bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
            <p className="text-gray-600 dark:text-gray-300">Interested in working together? Send me a message.</p>
            <form className="mt-4 grid grid-cols-1 gap-3">
              <input className="border border-gray-200 dark:border-gray-700 bg-transparent rounded-md px-4 py-3" placeholder="Your name" />
              <input className="border border-gray-200 dark:border-gray-700 bg-transparent rounded-md px-4 py-3" placeholder="Email" />
              <textarea className="border border-gray-200 dark:border-gray-700 bg-transparent rounded-md px-4 py-3 h-24" placeholder="Message" />
              <button className="mt-2 bg-green-700 dark:bg-green-600 text-white px-4 py-3 rounded-md font-medium">Send message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t dark:border-gray-800 py-5 mt-5">
        <div className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-400">
          <div>© {new Date().getFullYear()} Khanyo Lebone Railo. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}