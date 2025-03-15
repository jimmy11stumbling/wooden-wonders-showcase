import { type ProductType } from '@/types/product';

export interface ProductType {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  estimatedTime?: string;
  options: {
    [key: string]: string[];
  };
}

export const products: ProductType[] = [
  {
    id: 1,
    name: "Walnut Dining Table",
    category: "Tables",
    description: "Handcrafted dining table made from solid walnut with dovetail joinery.",
    image: "/product-images/pic1.jfif",
    price: 2800,
    stock: 2,
    estimatedTime: "4-6 weeks",
    options: {
      size: ["6-Person", "8-Person", "10-Person"],
      finish: ["Natural Oil", "Matte Varnish", "Semi-Gloss"]
    }
  },
  {
    id: 2,
    name: "Modern Sideboard",
    category: "Storage",
    description: "Contemporary sideboard with clean lines and ample storage space.",
    image: "/product-images/pic2.jfif",
    price: 1950,
    stock: 3,
    estimatedTime: "3-5 weeks",
    options: {
      size: ["48-inch", "60-inch", "72-inch"],
      finish: ["Natural Oak", "Walnut Stain", "Black"]
    }
  },
  {
    id: 3,
    name: "Accent Chair",
    category: "Chairs",
    description: "Elegant accent chair with premium upholstery and solid wood frame.",
    image: "/product-images/pic3.jfif",
    price: 1200,
    stock: 5,
    estimatedTime: "2-3 weeks",
    options: {
      fabric: ["Linen", "Velvet", "Leather"],
      woodFinish: ["Natural", "Dark Oak", "Espresso"]
    }
  },
  {
    id: 4,
    name: "Coffee Table Set",
    category: "Tables",
    description: "Nested coffee table set with marble tops and brass-finished legs.",
    image: "/product-images/pic4.jfif",
    price: 1600,
    stock: 4,
    estimatedTime: "3-4 weeks",
    options: {
      marbleType: ["White Carrara", "Black Marquina"],
      metalFinish: ["Brass", "Chrome", "Black"]
    }
  },
  {
    id: 5,
    name: "Entertainment Unit",
    category: "Storage",
    description: "Modern entertainment center with cable management and adjustable shelving.",
    image: "/product-images/pic5.jfif",
    price: 2200,
    stock: 2,
    estimatedTime: "4-6 weeks",
    options: {
      size: ["60-inch", "72-inch"],
      finish: ["White Oak", "Dark Walnut", "Black"]
    }
  },
  {
    id: 6,
    name: "Bedroom Set",
    category: "Bedroom",
    description: "Complete bedroom set including bed frame, nightstands, and dresser.",
    image: "/product-images/pic6.jfif",
    price: 4500,
    stock: 2,
    estimatedTime: "6-8 weeks",
    options: {
      size: ["Queen", "King"],
      finish: ["Light Oak", "Cherry", "Espresso"]
    }
  },
  {
    id: 7,
    name: "Console Table",
    category: "Tables",
    description: "Slim console table perfect for entryways with drawer storage.",
    image: "/product-images/pic7.jfif",
    price: 950,
    stock: 6,
    estimatedTime: "2-3 weeks",
    options: {
      length: ["36-inch", "48-inch"],
      finish: ["Natural", "Weathered Gray", "Dark Brown"]
    }
  },
  {
    id: 8,
    name: "Bathroom Vanity",
    category: "Storage",
    description: "Modern bathroom vanity with marble top and soft-close drawers.",
    image: "/product-images/pic8.jfif",
    price: 2200,
    stock: 3,
    estimatedTime: "4-5 weeks",
    options: {
      size: ["24-inch", "36-inch", "48-inch"],
      finish: ["White", "Gray Oak", "Espresso"]
    }
  }
];