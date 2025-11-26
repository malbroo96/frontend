export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 bg-gray-800 fixed top-0 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Akhil Joseph</h1>
        <div className="flex gap-6">
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
