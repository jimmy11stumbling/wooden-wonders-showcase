
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=3174')] bg-cover bg-center"
          style={{ opacity: 0.9 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>
      <div className="custom-container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block text-sm uppercase tracking-wider font-medium bg-wood-walnut/90 px-3 py-1 rounded-full">
              Custom Cabinetry in Laredo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold">
              Transform Your Space with Custom Cabinets
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Expert craftsmanship meets innovative design. Discover our range of custom cabinetry solutions tailored to your unique style and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-wood-walnut hover:bg-wood-walnut/90"
              >
                <Link to="/quote">Get a Quote</Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-colors"
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
