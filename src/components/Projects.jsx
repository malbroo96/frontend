import React from "react";

const Projects = () => {
  const skills = [
    { name: "React", highlight: false },
    { name: "Vite", highlight: true },
    { name: "Tailwind CSS", highlight: true },
    { name: "Node.js", highlight: false },
    { name: "Express", highlight: false },
    { name: "MongoDB", highlight: false },
    { name: "Redis", highlight: false },
    { name: "TypeScript", highlight: false },
    { name: "JavaScript (ES6+)", highlight: false },
    { name: "REST APIs", highlight: false },
    { name: "Git", highlight: false },
  ];

  const projects = [
    {
      name: "HabitFlow",
      title: "Health & Fitness Tracker",
      tech: "React, Firebase, JWT",
      badge: { text: "HabitFlow", color: "bg-blue-600" },
      description: [
        "• Full health-tracking platform for workouts & nutrition.",
        "• Real-time food analysis and smart suggestions.",
        "• Secure JWT login with weekly automated activity reports.",
      ],
    },
    {
      name: "Loan Manager",
      title: "Loan Application Manager",
      tech: "React, Firebase / Backend APIs",
      badge: { text: "Loan Manager", color: "bg-green-600" },
      description: [
        "• Real-time loan status with progress tracking.",
        "• Multi-step form to collect user details.",
        "• Secure document upload & verification workflow.",
        "• Dynamic progress bar for application tracking.",
      ],
    },
    {
      name: "FinanceApp",
      title: "Smart Money Manager",
      tech: "React, JS, API Integration, Charts",
      badge: { text: "FinanceApp", color: "bg-yellow-600" },
      description: [
        "• Fetches live finance & stock market news.",
        "• Tracks income, expenses & category insights.",
        "• Interactive charts for visual spending trends.",
        "• Demat & mutual fund investment links.",
        "• Google Pay digital gold purchase support.",
      ],
    },
    {
      name: "ToDo CRUD",
      title: "Full-Stack CRUD Practice",
      tech: "MongoDB, Express, Node.js, Vite, Tailwind",
      badge: { text: "ToDo CRUD", color: "bg-purple-600" },
      description: [
        "• Full-stack CRUD app to refresh backend concepts.",
        "• REST API with MongoDB for persistence.",
        "• Responsive UI built with Tailwind + Vite.",
        "• Tested for error-handling & API flow.",
        "• Improved comfort with Vite + Tailwind stack.",
      ],
    },
    {
      name: "Casava Bites",
      title: "Fun Static Web App",
      tech: "HTML, CSS, JavaScript",
      badge: { text: "Casava Bites", color: "bg-pink-600" },
      description: [
        "• Playful static site built as a gift for a friend.",
        "• Simple, fun UI with friendly colors.",
        "• Fully responsive layout.",
        "• Hosted on Netlify for fast access.",
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span
                  className={`px-3 py-1 ${project.badge.color} text-white text-xs rounded-full mb-3 inline-block`}
                >
                  {project.badge.text}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{project.tech}</p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 bg-gray-800 border-t border-gray-700"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  skill.highlight
                    ? "bg-linear-to-r from-blue-600 to-violet-600 text-white shadow-md"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p className="text-gray-400 mb-8 text-lg">
            Feel free to reach out for collaborations or opportunities.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:akhil@example.com"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>Send Email</span>
            </a>

            <a
              href="https://github.com/malbroo96"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition flex items-center gap-2"
              aria-label="Open GitHub profile in new tab"
              title="GitHub: malbroo96"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.805 5.625-5.476 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/akhil-joseph225292/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition flex items-center gap-2"
              aria-label="Open LinkedIn profile in new tab"
              title="LinkedIn: akhil-joseph225292"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
