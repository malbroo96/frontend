import propic from "../assets/propic.JPG";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 bg-gray-800 fixed top-0 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center">
          <img
            src={propic}
            alt="Akhil Joseph"
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <h1 className="text-xl font-bold text-white">Akhil Joseph</h1>
        </div>
        <div className="flex gap-6">
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
