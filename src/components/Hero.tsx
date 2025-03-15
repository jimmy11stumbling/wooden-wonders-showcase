
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/60" />
        <img
          src="/furniture-images/hero-bg.jpg"
          alt="Workshop background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="custom-container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="space-y-6">
            <span className="inline-block text-sm uppercase tracking-wider font-medium bg-wood-walnut/90 px-3 py-1 rounded-full">
              Custom Furniture & Cabinetry
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium">
              Crafting Your Perfect Space
            </h1>
            <p className="text-lg text-gray-200">
              Transform your home with handcrafted custom cabinets and furniture pieces that blend artistry with functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-block px-6 py-3 bg-wood-walnut text-white rounded-lg hover:bg-wood-walnut/90 transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                to="/shop"
                className="inline-block px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-wood-walnut transition-colors"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
