export type ProductType = {
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
  {
    id: 1,
    name: "Walnut Dining Table",
    category: "Tables",
    description: "Handcrafted dining table made from solid walnut with dovetail joinery. Each piece is carefully crafted to your specifications with attention to detail and superior craftsmanship.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2574&auto=format&fit=crop",
    price: 2800,
    stock: 2,
    estimatedTime: "6-8 weeks",
    options: {
      size: ["6-Person", "8-Person", "10-Person"],
      finish: ["Natural Oil", "Matte Varnish", "Semi-Gloss"]
    }
  },
  {
    id: 2,
    name: "Maple Rocking Chair",
    category: "Chairs",
    description: "Comfortable rocking chair crafted from maple with hand-woven seat. Traditional design meets modern comfort in this timeless piece.",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2565&auto=format&fit=crop",
    price: 1200,
    stock: 5,
    estimatedTime: "4-6 weeks",
    options: {
      finish: ["Natural Oil", "Matte Varnish", "Danish Oil"],
      cushion: ["None", "Leather", "Fabric"]
    }
  },
  {
    id: 3,
    name: "Oak Bookshelf",
    category: "Storage",
    description: "Elegant oak bookshelf with adjustable shelves and intricate crown molding. Perfect for displaying your book collection or treasured items.",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=2669&auto=format&fit=crop",
    price: 1800,
    stock: 3,
    estimatedTime: "5-7 weeks",
    options: {
      size: ["Small", "Medium", "Large"],
      finish: ["Light Oak", "Medium Oak", "Dark Oak"]
    }
  },
  {
    id: 4,
    name: "Cherry Wood Coffee Table",
    category: "Tables",
    description: "Beautiful cherry wood coffee table featuring a live edge design and metal hairpin legs.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2670&auto=format&fit=crop",
    price: 950,
    stock: 4,
    estimatedTime: "3-5 weeks",
    options: {
      finish: ["Natural", "Dark Cherry", "Espresso"]
    }
  },
  {
    id: 5,
    name: "Rustic Kitchen Island",
    category: "Kitchen",
    description: "Handcrafted kitchen island made from reclaimed barn wood. Features storage drawers and a butcher block top.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2670&auto=format&fit=crop",
    price: 2200,
    stock: 2,
    estimatedTime: "6-8 weeks",
    options: {
      size: ["Standard", "Large"],
      features: ["Wine Rack", "Towel Bar", "Extra Drawers"]
    }
  },
  {
    id: 6,
    name: "Modern Bed Frame",
    category: "Bedroom",
    description: "Contemporary bed frame crafted from solid maple with floating nightstands.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2670&auto=format&fit=crop",
    price: 2400,
    stock: 2,
    estimatedTime: "7-9 weeks",
    options: {
      size: ["Queen", "King"],
      finish: ["Natural", "Espresso", "White Oak"]
    }
  }
];