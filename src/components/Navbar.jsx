import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 w-full flex justify-between items-center py-3 px-5 z-50
      bg-black/10 backdrop-blur-md border-b border-white/20 shadow-md"
      style={{ fontFamily: "SpaceGrotesk" }}
    >
      <div className="text-xl font-normal inline-flex items-center">
        <span className="text-[#ac6af4] font-medium">Govind Sankar</span>
        <span className="text-white">'s Portfolio</span>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {["home", "about", "projects", "certificates", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section === "home" ? "top" : section);
            }}
            className="flex items-center gap-2 font-normal text-white hover:text-[#b788e8] transition-colors"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)} >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="absolute top-full right-0 w-2/3 bg-black/90 p-5 flex flex-col space-y-4 md:hidden">
          {["home", "about", "projects", "certificates", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section === "home" ? "top" : section);
              }}
              className="text-white hover:text-[#b788e8] transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;