const skills = [
  { name: "React", icon: "💻" },
  { name: "Node.js", icon: "🖧" },
  { name: "Python", icon: "🐍" },
  { name: "Tailwind CSS", icon: "🌸" },
  { name: "JavaScript", icon: "🔧" },
  { name: "MongoDB", icon: "📦" },
  { name: "Express.js", icon: "⚙️" },
  { name: "Docker", icon: "🐳" },
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg p-6 bg-white text-center flex flex-col justify-center items-center shadow-lg"
            >
              <div className="text-6xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Skilled in {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
