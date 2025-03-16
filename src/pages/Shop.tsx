import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import Footer from '../components/Footer';
import { formatPrice } from '../lib/utils'; // Assuming this file exists and contains the formatPrice function.
import { products } from '../data/products'; // Assuming this file exists and contains the products array.

//Keep the original ProductDetails component
const ProductDetails = ({ product }: { product: ProductType }) => {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-serif font-bold mb-4">{product.name}</h1>
        <img src={product.image} alt={product.name} className="w-full max-h-96 object-cover mb-4" />
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-medium mb-4">Price: {formatPrice(product.price)}</p>
        <h2 className="text-xl font-medium mb-2">Customization Options</h2>
        <div className="space-y-4">
          {Object.entries(product.options).map(([optionKey, options]) => (
            <div key={optionKey}>
              <label className="block text-lg font-medium mb-2" htmlFor={optionKey}>{optionKey}</label>
              <select id={optionKey} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-wood-walnut">
                {options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-medium mt-8 mb-2">Notes</h2>
        <textarea placeholder="Add notes or customizations..." className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-wood-walnut h-32 resize-y"></textarea>
      </div>
    );
  };


const Shop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("price-low");
  const [cart, setCart] = useState([]);

  const categories = ["All", "Tables", "Chairs", "Storage", "Cabinets"];
  const sortOptions = [
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  const addToCart = (product, selectedOptions) => {
    setCart(prev => [...prev, {
      id: Date.now(),
      product,
      quantity: 1,
      selectedOptions
    }]);
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const filteredProducts = products.filter(product =>
    activeCategory === "All" || product.category === activeCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div>
      <main className="min-h-screen bg-background">
        <section className="py-12">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              {/* Filters Sidebar */}
              <div className="hidden lg:block lg:col-span-3">
                <div className="sticky top-6 space-y-6">
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

                {/* Products Grid */}
                <div 
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                >
                  {sortedProducts.map((product) => (
                    <Link 
                      to={`/product/${product.id}`} 
                      key={product.id} 
                      className="group relative block"
                    >
                      <div className="aspect-square overflow-hidden rounded-lg bg-secondary/5 shadow-sm">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-4 space-y-2">
                        <h3 className="text-base font-medium">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">${product.price.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm text-wood-walnut font-medium">View Details →</span>
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
                <Link
                  to="/checkout"
                  className={`block w-full text-center py-3 rounded-md font-medium ${
                    cart.length > 0
                      ? 'bg-wood-walnut text-white hover:bg-wood-walnut/90'
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  } transition-colors`}
                >
                  Checkout
                </Link>
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
export {ProductDetails};

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

type CartItemType = {
  id: number;
  product: ProductType;
  quantity: number;
  selectedOptions: Record<string, string>;
};