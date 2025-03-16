import { type ProductType } from '@/types/product';

export const products: ProductType[] = [
  {
    id: 1,
    name: "Walnut Dining Table",
    category: "Tables",
    description: "Handcrafted dining table made from solid walnut with dovetail joinery.",
    image: "/attached_assets/sausalito-brown-5-pc-dining-room_4243372P_image-3-2.webp",
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
    name: "Server Cabinet",
    category: "Storage",
    description: "Elegant server cabinet with ample storage space and classic design.",
    image: "/attached_assets/acorn-cottage-brown-server_42762787_image-item.webp",
    price: 1850,
    stock: 3,
    estimatedTime: "5-7 weeks",
    options: {
      finish: ["Natural Oil", "Light Stain", "Dark Stain"]
    }
  },
  {
    id: 3,
    name: "Modern Coffee Table",
    category: "Tables",
    description: "Contemporary coffee table with sleek design and durable construction.",
    image: "/attached_assets/cm3319t-det_foa20231.webp",
    price: 950,
    stock: 4,
    estimatedTime: "3-5 weeks",
    options: {
      finish: ["Natural", "Espresso", "Walnut"]
    }
  },
  {
    id: 4,
    name: "Custom Kitchen Cabinet",
    category: "Cabinets",
    description: "Beautiful custom kitchen cabinet with premium finish.",
    image: "/attached_assets/pic1.jfif",
    price: 1200,
    stock: 5,
    estimatedTime: "4-6 weeks",
    options: {
      finish: ["Natural", "Dark Stain", "White"]
    }
  },
  {
    id: 5,
    name: "Modern Wardrobe",
    category: "Storage",
    description: "Spacious wardrobe with contemporary design and multiple compartments.",
    image: "/attached_assets/pic2.jfif",
    price: 2500,
    stock: 3,
    estimatedTime: "6-8 weeks",
    options: {
      size: ["Standard", "Large"],
      finish: ["Natural", "Espresso"]
    }
  },
  {
    id: 6,
    name: "Designer Bathroom Vanity",
    category: "Cabinets",
    description: "Elegant bathroom vanity with premium hardware and finish.",
    image: "/attached_assets/pic3.jfif",
    price: 1800,
    stock: 4,
    estimatedTime: "5-7 weeks",
    options: {
      size: ["36-inch", "48-inch"],
      finish: ["White", "Gray", "Navy"]
    }
  }
];