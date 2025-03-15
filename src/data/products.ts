
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
    description: "Spacious wardrobe with contemporary design.",
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
    name: "Luxury Bathroom Vanity",
    category: "Cabinets",
    description: "Elegant bathroom vanity with premium finish.",
    image: "/attached_assets/pic3.jfif",
    price: 1800,
    stock: 4,
    estimatedTime: "5-7 weeks",
    options: {
      size: ["36-inch", "48-inch"],
      finish: ["White", "Gray", "Navy"]
    }
  },
  {
    id: 7,
    name: "Premium Kitchen Set",
    category: "Cabinets",
    description: "Complete kitchen storage solution.",
    image: "/attached_assets/pic4.jfif",
    price: 3500,
    stock: 2,
    estimatedTime: "7-9 weeks",
    options: {
      layout: ["L-Shape", "U-Shape"],
      finish: ["White", "Wood Grain"]
    }
  },
  {
    id: 8,
    name: "Classic Cabinet Set",
    category: "Cabinets",
    description: "Traditional cabinet set with timeless design.",
    image: "/attached_assets/pic5.jfif",
    price: 2800,
    stock: 3,
    estimatedTime: "6-8 weeks",
    options: {
      finish: ["Cherry", "Maple", "Oak"]
    }
  },
  {
    id: 9,
    name: "Storage Solutions",
    category: "Storage",
    description: "Modern storage cabinet with clean lines.",
    image: "/attached_assets/pic6.jfif",
    price: 1600,
    stock: 4,
    estimatedTime: "4-6 weeks",
    options: {
      size: ["Standard", "Large"],
      finish: ["White", "Black"]
    }
  },
  {
    id: 10,
    name: "Designer Kitchen",
    category: "Cabinets",
    description: "Premium kitchen cabinet system.",
    image: "/attached_assets/pic7.jfif",
    price: 4500,
    stock: 2,
    estimatedTime: "8-10 weeks",
    options: {
      layout: ["Custom"],
      finish: ["Premium Wood", "Custom Color"]
    }
  },
  {
    id: 11,
    name: "Modern Bathroom Set",
    category: "Cabinets",
    description: "Contemporary bathroom storage solution.",
    image: "/attached_assets/pic8.jfif",
    price: 2200,
    stock: 3,
    estimatedTime: "5-7 weeks",
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
    name: "Bathroom Vanity",
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
  },
  {
    id: 7,
    name: "Kitchen Storage System",
    category: "Cabinets",
    description: "Complete kitchen storage solution with modern functionality.",
    image: "/attached_assets/pic4.jfif",
    price: 3500,
    stock: 2,
    estimatedTime: "7-9 weeks",
    options: {
      layout: ["L-Shape", "U-Shape"],
      finish: ["White", "Wood Grain"]
    }
  },
  {
    id: 8,
    name: "Traditional Cabinet Set",
    category: "Cabinets",
    description: "Classic cabinet set with timeless design.",
    image: "/attached_assets/pic5.jfif",
    price: 2800,
    stock: 3,
    estimatedTime: "6-8 weeks",
    options: {
      finish: ["Cherry", "Maple", "Oak"]
    }
  },
  {
    id: 9,
    name: "Modern Storage Cabinet",
    category: "Storage",
    description: "Contemporary storage solution with clean lines.",
    image: "/attached_assets/pic6.jfif",
    price: 1600,
    stock: 4,
    estimatedTime: "4-6 weeks",
    options: {
      size: ["Standard", "Large"],
      finish: ["White", "Black"]
    }
  },
  {
    id: 10,
    name: "Luxury Kitchen Design",
    category: "Cabinets",
    description: "Premium kitchen cabinet system with high-end finishes.",
    image: "/attached_assets/pic7.jfif",
    price: 4500,
    stock: 2,
    estimatedTime: "8-10 weeks",
    options: {
      layout: ["Custom"],
      finish: ["Premium Wood", "Custom Color"]
    }
  },
  {
    id: 11,
    name: "Designer Bathroom Cabinet",
    category: "Cabinets",
    description: "Designer bathroom storage solution with modern aesthetics.",
    image: "/attached_assets/pic8.jfif",
    price: 2200,
    stock: 3,
    estimatedTime: "5-7 weeks",
    options: {
      size: ["24-inch", "36-inch", "48-inch"],
      finish: ["Modern White", "Gray Oak"]
    }
  }
];
