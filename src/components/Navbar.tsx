import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="custom-container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-xl font-semibold">Wood Craft</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">About</Link>
            <Link to="/products" className="text-foreground/80 hover:text-foreground transition-colors">Products</Link>
            <Link to="/gallery" className="text-foreground/80 hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/custom" className="text-foreground/80 hover:text-foreground transition-colors">Custom</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

function MobileNav() {
  return (
    <div className="flex flex-col space-y-4 py-4">
      <Link
        to="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        About
      </Link>
      <Link
        to="/products"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        to="/custom"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Custom Orders
      </Link>
      <Link
        to="/gallery"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Gallery
      </Link>
      <Link
        to="/contact"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Contact
      </Link>
    </div>
  );
}