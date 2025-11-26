export default function Skills() {
  const skills = [
    "React", "Node.js", "Express", "MongoDB",
    "JavaScript", "Tailwind CSS", "Git", "REST APIs"
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, idx) => (
          <span 
            key={idx}
            className="px-4 py-2 bg-gray-800 rounded-full text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
