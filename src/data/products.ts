
interface ProductType {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  estimatedTime: string;
  options: Record<string, string[]>;
};

export const products: ProductType[] = [
  // Tables
  {
    id: 1,
    name: "Victorian Dining Table",
    category: "Tables",
    description: "Elegant Victorian-style dining table with ornate carved pedestals and detailed trim work.",
    image: "/attached_assets/cm3319t-det_foa20231.webp",
    price: 3200,
    stock: 2,
    estimatedTime: "8-10 weeks",
    options: {
      size: ["6-Person", "8-Person"],
      finish: ["Dark Cherry", "Mahogany", "Espresso"]
    }
  },
  {
    id: 2,
    name: "Modern Dining Set",
    category: "Tables",
    description: "Contemporary dining set featuring clean lines and a sophisticated gray wash finish.",
    image: "/attached_assets/sausalito-brown-5-pc-dining-room_4243372P_image-3-2.webp",
    price: 4500,
    stock: 3,
    estimatedTime: "6-8 weeks",
    options: {
      size: ["6-Person", "8-Person"],
      finish: ["Gray Wash", "Natural Oak", "White Oak"]
    }
  },
  {
    id: 3,
    name: "Farmhouse Sideboard",
    category: "Storage",
    description: "Rustic farmhouse style sideboard with wine storage.",
    image: "/attached_assets/acorn-cottage-brown-server_42762787_image-item.webp",
    price: 899.99,
    stock: 5,
    estimatedTime: "4-6 weeks",
    options: {
      finish: ["Distressed Oak", "Weathered Gray", "Vintage Brown"],
      features: ["Wine Storage", "Adjustable Shelves", "Soft-Close Doors"]
    }
  },
  // Additional Tables
  {
    id: 4,
    name: "Coffee Table Set",
    category: "Tables",
    description: "Modern coffee table set with nesting side tables.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c",
    price: 1200,
    stock: 4,
    estimatedTime: "3-4 weeks",
    options: {
      finish: ["Walnut", "Oak", "Maple"],
      style: ["Round", "Square"]
    }
  },
  // Chairs
  {
    id: 5,
    name: "Dining Chairs Set",
    category: "Chairs",
    description: "Classic dining chairs with upholstered seats.",
    image: "https://images.unsplash.com/photo-1506898667547-42e22a46e125",
    price: 1600,
    stock: 8,
    estimatedTime: "4-5 weeks",
    options: {
      fabric: ["Linen", "Velvet", "Leather"],
      color: ["Beige", "Gray", "Navy"]
    }
  },
  {
    id: 6,
    name: "Accent Chair",
    category: "Chairs",
    description: "Modern accent chair with curved design.",
    image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea",
    price: 899,
    stock: 6,
    estimatedTime: "3-4 weeks",
    options: {
      fabric: ["Boucle", "Velvet"],
      color: ["Cream", "Charcoal"]
    }
  },
  {
    id: 7,
    name: "Rocking Chair",
    category: "Chairs",
    description: "Traditional wooden rocking chair.",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd",
    price: 750,
    stock: 4,
    estimatedTime: "2-3 weeks",
    options: {
      wood: ["Oak", "Maple", "Cherry"],
      finish: ["Natural", "Dark"]
    }
  },
  // Storage
  {
    id: 8,
    name: "Bookshelf",
    category: "Storage",
    description: "Modern bookshelf with adjustable shelves.",
    image: "https://images.unsplash.com/photo-1594620302200-9a425c7a684f",
    price: 1200,
    stock: 3,
    estimatedTime: "4-5 weeks",
    options: {
      size: ["Tall", "Medium", "Low"],
      finish: ["Walnut", "Oak", "White"]
    }
  },
  {
    id: 9,
    name: "Media Console",
    category: "Storage",
    description: "Entertainment center with cable management.",
    image: "https://images.unsplash.com/photo-1581292739203-97401992b598",
    price: 1800,
    stock: 2,
    estimatedTime: "5-6 weeks",
    options: {
      size: ["60 inch", "72 inch"],
      style: ["Modern", "Traditional"]
    }
  },
  // Bedroom
  {
    id: 10,
    name: "Platform Bed",
    category: "Bedroom",
    description: "Modern platform bed with headboard.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 2200,
    stock: 2,
    estimatedTime: "6-7 weeks",
    options: {
      size: ["Queen", "King"],
      finish: ["Walnut", "Oak", "Gray"]
    }
  },
  {
    id: 11,
    name: "Dresser",
    category: "Bedroom",
    description: "Six-drawer dresser with mirror.",
    image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72",
    price: 1600,
    stock: 4,
    estimatedTime: "5-6 weeks",
    options: {
      style: ["Modern", "Traditional"],
      finish: ["White", "Natural", "Dark"]
    }
  },
  {
    id: 12,
    name: "Nightstand",
    category: "Bedroom",
    description: "Bedside table with drawer and shelf.",
    image: "https://images.unsplash.com/photo-1532499012374-13e8607b5c9e",
    price: 600,
    stock: 6,
    estimatedTime: "3-4 weeks",
    options: {
      style: ["Modern", "Classic"],
      finish: ["Maple", "Walnut", "White"]
    }
  }
];
