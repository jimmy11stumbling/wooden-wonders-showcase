import React, { useState, useEffect } from 'react';

export const Catalog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">Featured Collection</h2>
          <p className="text-muted-foreground">
            Discover our handcrafted pieces, each telling its own unique story
          </p>
        </div>

        {/* Products Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
            {[
              {
                id: 1,
                name: "Walnut Dining Table",
                category: "Tables",
                image: "/attached_assets/pic1.jfif",
                price: "$2,800"
              },
              {
                id: 2,
                name: "Classic Cabinet",
                category: "Cabinets",
                image: "/attached_assets/pic2.jfif",
                price: "$1,200"
              },
              {
                id: 3,
                name: "Modern Coffee Table",
                category: "Tables",
                image: "/attached_assets/pic3.jfif",
                price: "$800"
              },
              {
                id: 4,
                name: "Vintage Wardrobe",
                category: "Storage",
                image: "/attached_assets/pic4.jfif",
                price: "$1,500"
              },
              {
                id: 5,
                name: "Kitchen Cabinet Set",
                category: "Cabinets",
                image: "/attached_assets/pic5.jfif",
                price: "$3,200"
              },
              {
                id: 6,
                name: "Bathroom Vanity",
                category: "Cabinets",
                image: "/attached_assets/pic6.jfif",
                price: "$900"
              }
            ].map((product) => (
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
                </div>
                <div className="p-4">
                  <div className="text-sm text-muted-foreground mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="text-wood-walnut">{product.price}</div>
                </div>
              </div>
            ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <button className="bg-transparent text-wood-walnut hover:bg-wood-walnut/10 border border-wood-walnut/30 font-medium rounded-md px-6 py-3 transition-all hover-lift">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;