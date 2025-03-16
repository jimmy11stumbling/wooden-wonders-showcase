import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-wood-walnut text-white/90">
      <div className="custom-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link 
              to="/"
              className="text-white font-serif text-2xl font-medium tracking-tight mb-4 inline-block"
            >
              Cabinets By Design
            </Link>
            <p className="text-white/70 mt-4 mb-6">
              Creating beautiful custom cabinets and furniture with quality craftsmanship since 1995.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/cabinetsbydesignlaredo" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/cabinetsbydesignlaredo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/cabinetsbydesignlaredo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3" role="navigation" aria-label="Footer Navigation">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=2202+Zaragoza+St+Laredo+TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-white/70 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    2202 Zaragoza St.<br />
                    Laredo, TX
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+19566451575" className="text-white/70 hover:text-white transition-colors">
                  (956) 645-1575
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@cabinetsbydesign" className="text-white/70 hover:text-white transition-colors">
                  info@cabinetsbydesign
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest designs and exclusive offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-wood-walnut hover:bg-white/90 font-medium rounded-md px-4 py-2 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© {currentYear} Wooden Wonders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;