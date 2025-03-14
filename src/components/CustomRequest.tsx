
import { useState, useRef, useEffect } from 'react';
import { Upload, Check } from 'lucide-react';

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
  const sectionRef = useRef<HTMLElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => setFormSubmitted(false), 3000);
    }, 500);
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
      id="custom" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-secondary/50 to-secondary/10"
    >
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="inline-block text-sm uppercase tracking-wider font-medium text-wood-walnut mb-3">
              Custom Design
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Bring Your Vision to Life
            </h2>
            <p className="text-muted-foreground mb-8">
              Our custom furniture service allows you to create pieces that perfectly fit your space, style, and needs. From initial concept to final delivery, we work closely with you at every step.
            </p>
            
            {/* Custom options */}
            <div className="space-y-6">
              {customOptions.map((item) => (
                <div key={item.category}>
                  <h3 className="text-lg font-medium mb-3">{item.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.options.map((option) => (
                      <span 
                        key={option}
                        className="bg-white border border-border px-3 py-1 rounded-full text-sm"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Process steps */}
            <div className="mt-12">
              <h3 className="text-lg font-medium mb-4">Our Custom Process</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-wood-walnut text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                  <p className="text-sm">Initial consultation to discuss your needs and ideas</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-wood-walnut text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                  <p className="text-sm">Design concept and material selection</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-wood-walnut text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                  <p className="text-sm">Detailed proposal with sketches and pricing</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-wood-walnut text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">4</span>
                  <p className="text-sm">Crafting your custom piece with regular updates</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-wood-walnut text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">5</span>
                  <p className="text-sm">Delivery and installation in your space</p>
                </li>
              </ol>
            </div>
          </div>
          
          {/* Form */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-serif font-medium mb-6">Request a Custom Design</h3>
              
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Request Submitted!</h4>
                  <p className="text-muted-foreground">We'll be in touch within 24 hours to discuss your custom project.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="furniture-type" className="block text-sm font-medium mb-1">Furniture Type</label>
                    <select 
                      id="furniture-type" 
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                    >
                      <option value="">Select a furniture type</option>
                      <option value="table">Table</option>
                      <option value="chair">Chair</option>
                      <option value="cabinet">Cabinet</option>
                      <option value="bed">Bed</option>
                      <option value="desk">Desk</option>
                      <option value="shelving">Shelving</option>
                      <option value="other">Other (specify below)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-1">Project Description</label>
                    <textarea 
                      id="description" 
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                      placeholder="Describe your custom furniture needs, including dimensions, materials preferences, and any special requirements..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Upload Reference Images (optional)</label>
                    <div className="border border-dashed border-input rounded-md p-4 text-center">
                      <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Drag and drop files here, or click to browse</p>
                      <input type="file" multiple className="hidden" />
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-wood-walnut hover:bg-wood-walnut/90 text-white font-medium rounded-md px-6 py-3 transition-all"
                  >
                    Submit Request
                  </button>
                </form>
              )}
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
