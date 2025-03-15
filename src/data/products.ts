
export const products = [
  {
    id: 1,
    name: "Walnut Dining Table",
    category: "Tables",
    description: "Handcrafted dining table made from solid walnut with dovetail joinery.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2574&auto=format&fit=crop",
    price: 2800,
    stock: 2,
    options: {
      size: ["6-Person", "8-Person", "10-Person"],
      finish: ["Natural Oil", "Matte Varnish", "Semi-Gloss"]
    }
  },
  {
    id: 2,
    name: "Maple Rocking Chair",
    category: "Chairs",
    description: "Comfortable rocking chair crafted from maple with hand-woven seat.",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2565&auto=format&fit=crop",
    price: 1200,
    stock: 5,
    options: {
      finish: ["Natural Oil", "Matte Varnish", "Danish Oil"],
      cushion: ["None", "Leather", "Fabric"]
    }
  }
];
