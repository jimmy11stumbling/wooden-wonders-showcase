
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingCart, Filter, ChevronDown, ChevronUp, Minus, Plus, X } from "lucide-react";

// Products data
const products = [
  {
    id: 1,
    name: "Walnut Dining Table",
    category: "Tables",
    description: "Handcrafted dining table made from solid walnut with dovetail joinery.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2574&auto=format&fit=crop",
    price: 2800,
    stock: 2,
    options: {
      size: ["6-Person", "8-Person", "10-Person"],
      finish: ["Natural Oil", "Matte Varnish", "Semi-Gloss"]
    }
  },
  {
    id: 2,
    name: "Maple Rocking Chair",
    category: "Chairs",
    description: "Comfortable rocking chair crafted from maple with hand-woven seat.",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2565&auto=format&fit=crop",
    price: 1200,
    stock: 5,
    options: {
      finish: ["Natural Oil", "Matte Varnish", "Danish Oil"],
      cushion: ["None", "Leather", "Fabric"]
    }
  },
  {
    id: 3,
    name: "Oak Bookshelf",
    category: "Storage",
    description: "Adjustable bookshelf made from quarter-sawn oak with traditional joinery.",
    image: "https://images.unsplash.com/photo-1504156668465-4b4d9c291ee6?q=80&w=2670&auto=format&fit=crop",
    price: 1850,
    stock: 3,
    options: {
      size: ["Small", "Medium", "Large"],
      finish: ["Natural Oil", "Light Stain", "Dark Stain"]
    }
  },
  {
    id: 4,
    name: "Cherry Nightstand",
    category: "Bedroom",
    description: "Elegant nightstand crafted from cherry wood with dovetail drawers.",
    image: "https://images.unsplash.com/photo-1532499012374-13e8607b5c9e?q=80&w=2670&auto=format&fit=crop",
    price: 950,
    stock: 8,
    options: {
      drawers: ["One Drawer", "Two Drawers"],
      finish: ["Natural Oil", "Matte Varnish", "Semi-Gloss"]
    }
  },
  {
    id: 5,
    name: "Walnut Coffee Table",
    category: "Tables",
    description: "Modern coffee table made from walnut with tempered glass inlay.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2574&auto=format&fit=crop",
    price: 1450,
    stock: 4,
    options: {
      size: ["Small", "Medium", "Large"],
      style: ["Glass Inlay", "Solid Top", "Storage Shelf"]
    }
  },
  {
    id: 6,
    name: "Ebony Media Console",
    category: "Storage",
    description: "Sleek media console crafted from ebony with cable management system.",
    image: "https://images.unsplash.com/photo-1581292739203-97401992b598?q=80&w=2670&auto=format&fit=crop",
    price: 2200,
    stock: 2,
    options: {
      size: ["48-inch", "60-inch", "72-inch"],
      doors: ["No Doors", "Cabinet Doors", "Media Mesh Doors"]
    }
  }
];

// Categories derived from products
const categories = ["All", ...Array.from(new Set(products.map(item => item.category)))];

// Sort options
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "priceAsc" },
  { label: "Price: High to Low", value: "priceDesc" },
  { label: "Name: A to Z", value: "nameAsc" }
];

// Product type
type ProductType = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  options: Record<string, string[]>;
};

// Cart item type
type CartItemType = {
  id: number;
  product: ProductType;
  quantity: number;
  selectedOptions: Record<string, string>;
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

const Shop = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState(sortOptions[0].value);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const addToCart = (product: ProductType) => {
    // Create default selected options (first option for each category)
    const selectedOptions: Record<string, string> = {};
    Object.keys(product.options).forEach(optionKey => {
      selectedOptions[optionKey] = product.options[optionKey][0];
    });

    // Check if product with same options already exists in cart
    const existingItemIndex = cart.findIndex(
      item => item.id === product.id && 
        Object.keys(selectedOptions).every(
          key => item.selectedOptions[key] === selectedOptions[key]
        )
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Add new item to cart
      setCart([...cart, {
        id: Date.now(), // Unique identifier for cart item
        product,
        quantity: 1,
        selectedOptions
      }]);
    }

    // Show toast notification
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (cartItemId: number) => {
    setCart(cart.filter(item => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cart.map(item => {
      if (item.id === cartItemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Filter and sort products
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "nameAsc":
        return a.name.localeCompare(b.name);
      case "newest":
      default:
        return 0; // No sorting (maintain original order)
    }
  });

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-secondary/20">
          <div className="custom-container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Shop Our Collection
              </h1>
              <p className="text-muted-foreground">
                Browse our selection of handcrafted wooden furniture pieces, ready to ship to your home.
              </p>
            </div>
          </div>
        </section>
        
        {/* Shop Content */}
        <section 
          ref={sectionRef}
          className="py-16"
        >
          <div className="custom-container">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden flex justify-between mb-6">
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center text-sm font-medium bg-secondary/50 hover:bg-secondary px-4 py-2 rounded-md transition-colors"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {isFilterOpen ? (
                    <ChevronUp className="h-4 w-4 ml-2" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-2" />
                  )}
                </button>
                
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="relative flex items-center text-sm font-medium bg-wood-walnut text-white px-4 py-2 rounded-md transition-colors"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-wood-cherry text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </div>
              
              {/* Sidebar Filters (Desktop always visible, Mobile toggleable) */}
              <div className={`lg:col-span-3 lg:block ${isFilterOpen ? 'block' : 'hidden'} mb-8 lg:mb-0`}>
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h3 className="text-lg font-medium mb-4">Filters</h3>
                  
                  {/* Categories */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Categories</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            activeCategory === category
                              ? "bg-wood-walnut/10 text-wood-walnut font-medium"
                              : "hover:bg-secondary/40"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sort By */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Sort By</h4>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full border border-input rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Price Range (simplified) */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Price Range</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="px-3 py-2 text-sm border border-input rounded-md hover:bg-secondary/40 transition-colors">
                        Under $1000
                      </button>
                      <button className="px-3 py-2 text-sm border border-input rounded-md hover:bg-secondary/40 transition-colors">
                        $1000-$2000
                      </button>
                      <button className="px-3 py-2 text-sm border border-input rounded-md hover:bg-secondary/40 transition-colors">
                        $2000-$3000
                      </button>
                      <button className="px-3 py-2 text-sm border border-input rounded-md hover:bg-secondary/40 transition-colors">
                        Over $3000
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Product Grid */}
              <div className="lg:col-span-9">
                {/* Desktop Cart Button */}
                <div className="hidden lg:flex justify-end mb-6">
                  <button 
                    onClick={() => setIsCartOpen(true)}
                    className="relative flex items-center text-sm font-medium bg-wood-walnut text-white px-4 py-2 rounded-md transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    View Cart ({cartItemCount})
                  </button>
                </div>
                
                {/* Products */}
                <div 
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                >
                  {sortedProducts.map((product) => (
                    <div 
                      key={product.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-2 right-2 bg-wood-walnut text-white text-sm font-medium rounded-full px-3 py-1">
                          {formatPrice(product.price)}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-serif font-medium">{product.name}</h3>
                          <span className="text-xs bg-secondary rounded-full px-2 py-1">{product.category}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                          </span>
                          <button
                            onClick={() => addToCart(product)}
                            disabled={product.stock === 0}
                            className={`px-4 py-2 rounded-md text-sm font-medium ${
                              product.stock > 0
                                ? 'bg-wood-walnut text-white hover:bg-wood-walnut/90'
                                : 'bg-muted text-muted-foreground cursor-not-allowed'
                            } transition-colors`}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Empty State */}
                {sortedProducts.length === 0 && (
                  <div className="text-center py-12 bg-secondary/20 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No products found</h3>
                    <p className="text-muted-foreground mb-4">Try changing your filter criteria.</p>
                    <button
                      onClick={() => setActiveCategory("All")}
                      className="text-wood-walnut hover:text-wood-cherry transition-colors"
                    >
                      Reset filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Cart Drawer */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full flex flex-col animate-slide-in-right">
              {/* Cart Header */}
              <div className="p-6 border-b border-muted flex justify-between items-center">
                <h3 className="text-xl font-medium">Your Cart ({cartItemCount})</h3>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Cart Items */}
              <div className="flex-grow overflow-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h4 className="text-lg font-medium mb-2">Your cart is empty</h4>
                    <p className="text-muted-foreground mb-4">Add items from our shop to get started.</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-wood-walnut hover:text-wood-cherry transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.id} className="border-b border-muted pb-6">
                        <div className="flex gap-4">
                          <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between">
                              <h4 className="font-medium">{item.product.name}</h4>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-muted-foreground hover:text-red-600 transition-colors"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {Object.entries(item.selectedOptions).map(([key, value]) => (
                                `${key}: ${value}`
                              )).join(', ')}
                            </p>
                            <div className="mt-2 flex justify-between items-center">
                              <div className="flex items-center border border-input rounded-md">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="px-2 py-1 text-muted-foreground hover:text-foreground"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="px-2">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-2 py-1 text-muted-foreground hover:text-foreground"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                              <span className="font-medium">
                                {formatPrice(item.product.price * item.quantity)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Cart Footer */}
              <div className="p-6 border-t border-muted bg-secondary/20">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Shipping and taxes calculated at checkout
                </p>
                <button 
                  disabled={cart.length === 0}
                  className={`w-full py-3 rounded-md font-medium ${
                    cart.length > 0
                      ? 'bg-wood-walnut text-white hover:bg-wood-walnut/90'
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  } transition-colors`}
                >
                  Checkout
                </button>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center mt-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
