
import { useState, useRef, useEffect } from 'react';
import CustomRequestContent from './CustomRequestContent';
import CustomRequestForm from './CustomRequestForm';
import { useToast } from "@/hooks/use-toast";

const customOptions = [
  {
    category: "Wood Types",
    options: ["Walnut", "Oak", "Maple", "Cherry", "Ebony", "Reclaimed"]
  },
  {
    category: "Finishes",
    options: ["Natural Oil", "Matte Varnish", "Semi-Gloss", "Hand-Rubbed Wax", "Custom Stain"]
  },
  {
    category: "Hardware",
    options: ["Brass", "Blackened Steel", "Brushed Nickel", "Copper", "Leather Pulls"]
  }
];

const CustomRequest = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSelectionChange = (selection: Record<string, string[]>) => {
    setSelectedOptions(selection);
    
    // Show toast when user makes first selection
    const totalSelected = Object.values(selection).reduce(
      (sum, options) => sum + options.length, 0
    );
    
    if (totalSelected === 1) {
      toast({
        title: "Option selected",
        description: "Great choice! You can select multiple options from each category.",
      });
    }
  };

  return (
    <section 
      id="custom" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-secondary/50 to-secondary/10"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <CustomRequestContent 
            isVisible={isVisible} 
            customOptions={customOptions} 
            onSelectionChange={handleSelectionChange}
          />
          
          {/* Form */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-serif font-medium mb-6">Request a Custom Design</h3>
              <CustomRequestForm selectedOptions={selectedOptions} />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 bg-wood-oak/20 rounded-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomRequest;
