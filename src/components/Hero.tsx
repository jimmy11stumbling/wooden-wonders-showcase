
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1525224359517-96e9f27019bd?q=80&w=2663&auto=format&fit=crop')] bg-cover bg-center"
          style={{ opacity: 0.9 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>
      
      <div className="custom-container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block text-sm uppercase tracking-wider font-medium bg-wood-walnut/90 px-3 py-1 rounded-full">
              Handcrafted Excellence
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight md:leading-tight lg:leading-tight">
              Where Nature Meets <br /> Artistry in Wood
            </h1>
            
            <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto text-balance">
              Each piece tells a story of craftsmanship, sustainability, and timeless design. Discover furniture that transforms spaces and lasts generations.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#catalog" 
                className="bg-wood-walnut hover:bg-wood-walnut/90 text-white font-medium rounded-md px-6 py-3 transition-all hover-lift"
              >
                Explore Our Collection
              </a>
              <a 
                href="#custom" 
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-md px-6 py-3 transition-all hover-lift"
              >
                Request Custom Design
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown className="text-white/70 h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
