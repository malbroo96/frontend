export default function Skills() {
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

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className={
              `px-4 py-2 rounded-full font-medium ` +
              (skill.highlight
                ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md"
                : "bg-gray-800 text-gray-300")
            }
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
