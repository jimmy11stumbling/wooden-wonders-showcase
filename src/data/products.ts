interface ProductType {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  stock: number;
  estimatedTime?: string;
  options: Record<string, string[]>;
}

export const products: ProductType[] = [
  {
    id: 1,
    name: "Victorian Dining Table",
    category: "Tables",
    description: "Elegant Victorian-style dining table with ornate carved pedestals and detailed trim work. Features a rich dark wood finish and accommodates 6-8 people comfortably.",
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
    description: "Contemporary dining set featuring clean lines and a sophisticated gray wash finish. Includes a table and matching chairs with upholstered seats.",
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
    description: "Rustic farmhouse style sideboard with wine storage. Features X-pattern doors, three drawers, and a distressed oak finish.",
    image: "/attached_assets/acorn-cottage-brown-server_42762787_image-item.webp",
    price: 899.99,
    stock: 5,
    estimatedTime: "4-6 weeks",
    options: {
      finish: ["Distressed Oak", "Weathered Gray", "Vintage Brown"],
      hardware: ["Black Iron", "Antique Brass", "Oil-Rubbed Bronze"]
    }
  }
];