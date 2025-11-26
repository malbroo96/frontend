export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold">HabitFlow</h3>
          <p className="text-gray-400 text-sm mt-2">
            A habit-tracking web app built using React, managing streaks and
            user habits.
          </p>
          <a
            href="https://habit-flow-new.vercel.app/"
            target="_blank"
            className="text-blue-400 underline mt-3 inline-block"
          >
            View Live
          </a>
        </div>
        
        {/* Project 2 */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold">Personal finance manager</h3>
          <p className="text-gray-400 text-sm mt-2">
            A responsive React application which enable to track the finance.
        
          </p>
          <a
            href="https://masai-react-five.vercel.app"
            target="_blank"
            className="text-blue-400 underline mt-3 inline-block"
          >
            View Live
          </a>
        </div>


      
      </div>
    </section>
  );
}
