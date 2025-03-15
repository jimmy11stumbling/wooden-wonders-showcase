
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { formatPrice } from '../lib/utils';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Product not found</h2>
          <Link to="/shop" className="text-wood-walnut hover:text-wood-cherry">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleOptionChange = (optionName, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value
    }));
  };

  const addToCart = () => {
    console.log('Adding to cart:', {
      product,
      quantity,
      selectedOptions,
      notes
    });
  };

  return (
    <div>
      <main className="min-h-screen bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/shop"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary/5">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
              <p className="text-2xl font-medium text-wood-walnut mb-6">
                {formatPrice(product.price)}
              </p>
              <p className="text-muted-foreground mb-8">
                {product.description}
              </p>

              {/* Product Options */}
              <div className="space-y-6 mb-8">
                {product.options && Object.entries(product.options).map(([optionName, values]) => (
                  <div key={optionName}>
                    <label className="block text-sm font-medium mb-2">
                      {optionName.charAt(0).toUpperCase() + optionName.slice(1)}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {values.map((value) => (
                        <button
                          key={value}
                          onClick={() => handleOptionChange(optionName, value)}
                          className={`px-4 py-2 border rounded-md text-sm transition-colors ${
                            selectedOptions[optionName] === value
                              ? 'border-wood-walnut bg-wood-walnut/10 text-wood-walnut'
                              : 'border-input hover:bg-secondary/40'
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom Notes */}
              <div className="space-y-2 mb-8">
                <h3 className="text-sm font-medium uppercase">Custom Notes</h3>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add any special requests or customizations..."
                  className="w-full h-32 p-3 rounded-md border border-input bg-background resize-none"
                />
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="w-24 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                  />
                </div>
                <button
                  onClick={addToCart}
                  className="w-full py-3 bg-wood-walnut text-white rounded-md font-medium hover:bg-wood-walnut/90 transition-colors"
                >
                  Add to Cart
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-muted">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Estimated Time:</span>
                    <p className="text-muted-foreground">{product.estimatedTime}</p>
                  </div>
                  <div>
                    <span className="font-medium">Stock:</span>
                    <p className="text-muted-foreground">{product.stock} available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
