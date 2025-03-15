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
    name: "Custom Dining Set",
    category: "Sets",
    description: "Complete dining set including table and six chairs in rich hardwood.",
    image: "/attached_assets/sausalito-brown-5-pc-dining-room_4243372P_image-3-2.webp",
    price: 3200,
    stock: 2,
    estimatedTime: "8-10 weeks",
    options: {
      size: ["6-Piece", "8-Piece"],
      finish: ["Natural", "Dark Stain"]
    }
  }
];