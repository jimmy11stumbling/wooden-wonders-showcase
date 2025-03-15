import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import Footer from '../components/Footer';
import Navbar from "@/components/Navbar"; // Added Navbar import

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [isVisible, setIsVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const cartItemCount = cart.length;
  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  const categories = ["All", "Living Room", "Dining Room", "Bedroom", "Office"];
  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "newest", label: "Newest" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return new Date(b.date) - new Date(a.date);
      default:
        return 0;
    }
  }).filter(product => 
    activeCategory === "All" || product.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col"> {/* Added flex-col for layout */}
      <Navbar /> {/* Added Navbar */}
      <main className="flex-grow"> {/* Added flex-grow to make main occupy available space */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif">Our Collection</h2>

              {/* Mobile Filters Toggle */}
              <div className="flex gap-4 lg:hidden">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="text-sm font-medium"
                >
                  Filters
                </button>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="relative text-sm font-medium"
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

              {/* Sidebar Filters */}
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

                  {/* Price Range */}
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
                    <Link 
                      to={`/product/${product.id}`} 
                      key={product.id} 
                      className="group relative block"
                    >
                      <div className="aspect-square overflow-hidden rounded-lg bg-secondary/5">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-4 space-y-1">
                        <h3 className="text-sm font-medium">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">${product.price.toLocaleString()}</p>
                        <div className="mt-2 invisible group-hover:visible">
                          <span className="text-xs text-wood-walnut">View Details →</span>
                        </div>
                      </div>
                    </Link>
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