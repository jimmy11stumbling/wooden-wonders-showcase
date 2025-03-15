
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
  }
];
export const products = [
  {
    id: 1,
    name: "Classic Kitchen Cabinet",
    price: 599.99,
    description: "Traditional style kitchen cabinet with modern functionality",
    image: "/furniture-images/cabinet-1.jpg"
  },
  // Add more products as needed
];
