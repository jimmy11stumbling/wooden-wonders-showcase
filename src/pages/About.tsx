
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="min-h-screen py-24">
      <div className="custom-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm uppercase tracking-wider font-medium text-wood-walnut mb-3">
            About Us
          </span>
          <h1 className="text-4xl font-serif font-semibold mb-6">
            Our Story & Craftsmanship
          </h1>
          <p className="text-muted-foreground mb-8">
            We specialize in creating bespoke wooden furniture that combines traditional craftsmanship with modern design sensibilities. Each piece is carefully crafted in our Laredo workshop.
          </p>
          <Button asChild className="bg-wood-walnut hover:bg-wood-walnut/90">
            <Link to="/quote">Get Started</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default About;
