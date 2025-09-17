export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-50 glass-card">
      {/* MJ Logo */}
      <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent tracking-wider drop-shadow-lg">
        MJ
      </div>

      {/* Nav Links */}
      <div className="flex gap-6 text-gray-300 font-medium">
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
    </nav>
  );
}
