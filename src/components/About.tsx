
import { useEffect, useRef, useState } from "react";

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
      className="py-32 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=3174&auto=format&fit=crop")',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="custom-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="inline-block text-sm uppercase tracking-wider font-medium text-white mb-3">
              Our Story
            </span>
            <h2 className="text-4xl font-serif font-semibold text-white mb-6">Crafting Excellence in Every Detail</h2>
            <p className="text-white/90 mb-8">
              With over a decade of experience, we combine traditional craftsmanship with modern design to create furniture that tells your story. Each piece is carefully crafted in our workshop, ensuring the highest quality and attention to detail.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-white">Custom Design</h3>
                <p className="text-white/80">Personalized solutions for your unique space</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-white">Expert Craftsmanship</h3>
                <p className="text-white/80">Built to last for generations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-white">Quality Materials</h3>
                <p className="text-white/80">Only the finest woods and finishes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
