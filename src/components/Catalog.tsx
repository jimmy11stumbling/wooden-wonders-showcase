import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Product data
const products = [
  {
    id: 1,
    name: "Walnut Dining Table",
    category: "Tables",
    description: "Handcrafted dining table made from solid walnut with dovetail joinery.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2574&auto=format&fit=crop",
    price: "$2,800"
  },
  {
    id: 2,
    name: "Maple Rocking Chair",
    category: "Chairs",
    description: "Comfortable rocking chair crafted from maple with hand-woven seat.",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2565&auto=format&fit=crop",
    price: "$1,200"
  },
  {
    id: 3,
    name: "Oak Bookshelf",
    category: "Storage",
    description: "Adjustable bookshelf made from quarter-sawn oak with traditional joinery.",
    image: "https://images.unsplash.com/photo-1504156668465-4b4d9c291ee6?q=80&w=2670&auto=format&fit=crop",
    price: "$1,850"
  },
  {
    id: 4,
    name: "Cherry Nightstand",
    category: "Bedroom",
    description: "Elegant nightstand crafted from cherry wood with dovetail drawers.",
    image: "https://images.unsplash.com/photo-1532499012374-13e8607b5c9e?q=80&w=2670&auto=format&fit=crop",
    price: "$950"
  },
  {
    id: 5,
    name: "Walnut Coffee Table",
    category: "Tables",
    description: "Modern coffee table made from walnut with tempered glass inlay.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2574&auto=format&fit=crop",
    price: "$1,450"
  },
  {
    id: 6,
    name: "Ebony Media Console",
    category: "Storage",
    description: "Sleek media console crafted from ebony with cable management system.",
    image: "https://images.unsplash.com/photo-1581292739203-97401992b598?q=80&w=2670&auto=format&fit=crop",
    price: "$2,200"
  }
];

// Categories derived from products
const categories = ["All", ...Array.from(new Set(products.map(item => item.category)))];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(product => product.category === activeCategory);

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
      id="catalog"
      ref={sectionRef}
      className="py-24"
    >
      <div className="custom-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm uppercase tracking-wider font-medium text-wood-walnut mb-3">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Timeless Wooden Masterpieces
          </h2>
          <p className="text-muted-foreground">
            Browse our collection of handcrafted wooden furniture, each piece uniquely designed and meticulously crafted to last generations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-wood-walnut text-white"
                  : "bg-secondary hover:bg-secondary/70 text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover-lift"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 w-full">
                    <span className="text-white font-medium text-lg">{product.price}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-serif font-medium">{product.name}</h3>
                  <span className="text-xs bg-secondary rounded-full px-2 py-1">{product.category}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <a
                  href="#custom"
                  className="inline-flex items-center text-sm font-medium text-wood-walnut hover:text-wood-cherry transition-colors"
                >
                  Inquire about this piece
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Link to="/full-collection" className="bg-transparent text-wood-walnut hover:bg-wood-walnut/10 border border-wood-walnut/30 font-medium rounded-md px-6 py-3 transition-all hover-lift">
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Catalog;