
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Elizabeth Chen",
    role: "Interior Designer",
    quote: "The craftsmanship of Wooden Wonders furniture is unmatched. My clients are always impressed by the quality and attention to detail in every piece.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Roberts",
    role: "Homeowner",
    quote: "Our custom dining table from Wooden Wonders has become the centerpiece of our home. The quality is exceptional, and the team was a pleasure to work with throughout the process.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Restaurant Owner",
    quote: "We commissioned custom tables for our restaurant, and the result exceeded our expectations. The durability has been impressive, even with daily commercial use.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    rating: 4
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Architect",
    quote: "As an architect, I appreciate craftsmanship that respects both form and function. Wooden Wonders creates pieces that are not just furniture but architectural elements.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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
      id="testimonials" 
      ref={sectionRef}
      className="py-24 bg-wood-walnut/10"
    >
      <div className="custom-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm uppercase tracking-wider font-medium text-wood-walnut mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            We take pride in our client relationships and the furniture we create together. Here's what some of our customers have to say.
          </p>
        </div>
        
        <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Desktop carousel */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-white p-8 rounded-lg shadow-md flex flex-col"
                >
                  <div className="flex items-center mb-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-foreground mb-6 flex-grow italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile carousel (single testimonial) */}
          <div className="md:hidden">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              
              <blockquote className="text-foreground mb-6 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[currentIndex].rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-border hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index ? "bg-wood-walnut w-4" : "bg-wood-walnut/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-border hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
