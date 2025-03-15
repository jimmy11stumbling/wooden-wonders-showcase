import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: "Walnut Dining Table",
    category: "Tables",
    description: "Handcrafted dining table made from solid walnut with dovetail joinery.",
    image: "/attached_assets/pic1.jfif",
    price: "$2,800"
  },
  {
    id: 2,
    name: "Maple Rocking Chair",
    category: "Chairs",
    description: "Comfortable rocking chair crafted from maple with hand-woven seat.",
    image: "/attached_assets/pic2.jfif",
    price: "$1,200"
  },
  {
    id: 3,
    name: "Oak Bookshelf",
    category: "Storage",
    description: "Adjustable bookshelf made from quarter-sawn oak with traditional joinery.",
    image: "/attached_assets/pic3.jfif",
    price: "$1,850"
  },
  {
    id: 4,
    name: "Cherry Nightstand",
    category: "Bedroom",
    description: "Elegant nightstand crafted from cherry wood with dovetail drawers.",
    image: "/attached_assets/pic4.jfif",
    price: "$950"
  },
  {
    id: 5,
    name: "Walnut Coffee Table",
    category: "Tables",
    description: "Modern coffee table made from walnut with tempered glass inlay.",
    image: "/attached_assets/pic5.jfif",
    price: "$1,450"
  },
  {
    id: 6,
    name: "Ebony Media Console",
    category: "Storage",
    description: "Sleek media console with cable management.",
    image: "/attached_assets/pic6.jfif",
    price: "$2,200"
  }
];

export function Catalog() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link 
          key={product.id}
          to={`/product/${product.id}`}
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="aspect-square overflow-hidden bg-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = './placeholder.svg';
                console.error('Image failed to load:', e.currentTarget.src);
              }}
            />
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="mt-2 font-medium">{product.price}</p>
            <Button className="mt-2 w-full">View Details</Button>
          </div>
        </Link>
      ))}
    </div>
  );
}