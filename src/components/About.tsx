
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-secondary/30"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div 
            className={`relative ${
              isVisible ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=2665&auto=format&fit=crop" 
                alt="Craftsman working on wooden furniture" 
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute top-20 -right-6 sm:-right-12 z-0 rounded-lg overflow-hidden shadow-xl w-3/4 h-80 hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1598106147395-be4ae3612867?q=80&w=3028&auto=format&fit=crop" 
                alt="Workshop with wooden materials" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="inline-block text-sm uppercase tracking-wider font-medium text-wood-walnut mb-3">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-balance">
              Craftsmanship Rooted in Tradition & Innovation
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2005, Wooden Wonders began as a small workshop with a big vision: to create enduring wooden furniture that combines traditional craftsmanship with contemporary design sensibilities.
              </p>
              <p>
                Each piece that leaves our studio is the result of meticulous attention to detail, ethically sourced materials, and the skilled hands of our master artisans. We believe that great furniture should not only be beautiful but tell a story that evolves with your life.
              </p>
              <p>
                Our commitment to sustainability means we work with responsibly harvested woods, utilize traditional joinery techniques that eliminate the need for excessive hardware, and finish our pieces with non-toxic, eco-friendly oils and stains.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="#catalog" 
                className="inline-flex items-center font-medium text-wood-walnut hover:text-wood-cherry transition-colors"
              >
                Discover our process
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
