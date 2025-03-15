
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [notes, setNotes] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  const handleOptionChange = (category: string, value: string) => {
    setSelectedOptions(prev => ({ ...prev, [category]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-serif font-medium">{product.name}</h1>
          <p className="text-xl font-medium">${product.price.toLocaleString()}</p>
          <p className="text-gray-600">{product.description}</p>
          
          {/* Options Selection */}
          {Object.entries(product.options).map(([category, options]) => (
            <div key={category} className="space-y-2">
              <h3 className="text-sm font-medium uppercase">{category}</h3>
              <div className="flex gap-2">
                {options.map(option => (
                  <button
                    key={option}
                    onClick={() => handleOptionChange(category, option)}
                    className={`px-4 py-2 rounded-md text-sm ${
                      selectedOptions[category] === option
                        ? 'bg-wood-walnut text-white'
                        : 'bg-secondary/10 hover:bg-secondary/20'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Custom Notes */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium uppercase">Custom Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any special requests or customizations..."
              className="w-full h-32 p-3 rounded-md border border-input bg-background resize-none"
            />
          </div>

          <button className="w-full py-3 bg-wood-walnut text-white rounded-md hover:bg-wood-walnut/90 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
