
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
            Wooden Wonders
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Catalog", "Custom", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-primary/90 font-medium text-sm hover:text-wood-walnut transition-colors"
              >
                {item}
              </a>
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
              {["Home", "About", "Catalog", "Custom", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-primary/90 font-medium text-sm hover:text-wood-walnut transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
