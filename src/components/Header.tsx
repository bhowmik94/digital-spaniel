import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll listener to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolledUp(false); // scrolling down
      } else {
        setIsScrolledUp(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinkClassesDesktop =
    "text-white hover:text-white visited:text-white border-b-2 border-transparent hover:border-white pb-1 transition-colors";
  const navLinkClassesMobile = "text-brandGray hover:text-brandBlack"

  return (
    <header
      className={`relative md:fixed bg-white md:bg-transparent top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isScrolledUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-5">
        {/* Top Row: Logo + Buttons */}
        <div className="flex items-center justify-between">
          <div>
            <img
              src="/Digital Spaniel logo01-01.png"
              alt="Logo"
              className="w-32 h-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-white">
            <a href="#services" className={navLinkClassesDesktop}>
              Services
            </a>
            <a href="#work" className={navLinkClassesDesktop}>
              Work
            </a>
            <a href="#about" className={navLinkClassesDesktop}>
              About
            </a>
            <a href="#blog" className={navLinkClassesDesktop}>
              Blog
            </a>
            <a href="#contact" className={navLinkClassesDesktop}>
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger / X */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="absolute bg-white shadow-sm top-0 right-0 w-1/2">
            <nav className="flex flex-col mt-4 space-y-4 text-white md:hidden p-4">
              <a
                href="#services"
                className={navLinkClassesMobile}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#work"
                className={navLinkClassesMobile}
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a
                href="#about"
                className={navLinkClassesMobile}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#blog"
                className={navLinkClassesMobile}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className={navLinkClassesMobile}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
