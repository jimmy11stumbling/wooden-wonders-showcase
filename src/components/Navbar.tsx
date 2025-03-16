import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items - updated to include new pages
  const navItems = [
    { label: "Home", path: "/", isSection: false },
    { label: "About", path: "/#about", isSection: true },
    { label: "Catalog", path: "/#catalog", isSection: true },
    { label: "Custom", path: "/#custom", isSection: true },
    { label: "Shop", path: "/products", isSection: false }, //Updated Path
    { label: "Blog", path: "/blog", isSection: false },
    { label: "FAQ", path: "/faq", isSection: false },
    { label: "Contact", path: "/#contact", isSection: true }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-morphism shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="custom-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="text-wood-walnut font-serif text-2xl font-medium tracking-tight"
          >
            Cabinets by Design
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isSection ? (
                <a
                  key={item.label}
                  href={item.path}
                  className="text-primary/90 font-medium text-sm hover:text-wood-walnut transition-colors"
                  onClick={() => {
                    if (item.path.startsWith('/#')) {
                      const targetId = item.path.substring(2);
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-primary/90 font-medium text-sm hover:text-wood-walnut transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary/80 hover:text-wood-walnut transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-morphism absolute top-full left-0 w-full animate-fade-in shadow-lg">
          <div className="custom-container py-5">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.isSection ? (
                  <a
                    key={item.label}
                    href={item.path}
                    className="text-primary/90 font-medium text-sm hover:text-wood-walnut transition-colors py-2"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (item.path.startsWith('/#')) {
                        const targetId = item.path.substring(2);
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-primary/90 font-medium text-sm hover:text-wood-walnut transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;