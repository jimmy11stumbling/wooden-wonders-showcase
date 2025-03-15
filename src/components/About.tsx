import React, { useState, useEffect, useRef } from 'react';

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
                src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?q=80&w=2487" 
                alt="Elegant wooden cabinet showcase" 
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute top-20 -right-6 sm:-right-12 z-0 rounded-lg overflow-hidden shadow-xl w-3/4 h-80 hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2487" 
                alt="Handcrafted wooden furniture display" 
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
            <h2 className="text-3xl font-bold mb-6">Crafting Excellence in Every Detail</h2>
            <p className="text-muted-foreground mb-8">
              With over a decade of experience, we combine traditional craftsmanship with modern design to create furniture that tells your story. Each piece is carefully crafted in our workshop, ensuring the highest quality and attention to detail.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-2">Custom Design</h3>
                <p className="text-muted-foreground">Personalized solutions for your unique space</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Expert Craftsmanship</h3>
                <p className="text-muted-foreground">Built to last for generations</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Quality Materials</h3>
                <p className="text-muted-foreground">Only the finest woods and finishes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;