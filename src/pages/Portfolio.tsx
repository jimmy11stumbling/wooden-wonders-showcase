
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const portfolioProjects = [
  {
    id: 1,
    title: "Mid-Century Modern Dining Set",
    description: "Custom walnut dining table with six matching chairs for a Brooklyn brownstone.",
    image: "https://images.unsplash.com/photo-1613252036716-e1eeeeddfa92?q=80&w=2670&auto=format&fit=crop",
    category: "Dining"
  },
  {
    id: 2,
    title: "Minimalist Home Office",
    description: "Complete office solution including desk, shelving, and storage in white oak.",
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=2670&auto=format&fit=crop",
    category: "Office"
  },
  {
    id: 3,
    title: "Heirloom Cherry Bedroom Suite",
    description: "Bed frame, nightstands, and dresser crafted from cherry wood for a Connecticut home.",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2670&auto=format&fit=crop",
    category: "Bedroom"
  }
];

const Portfolio = () => {
  return (
    <main className="pt-20">
      <section className="relative py-16 bg-muted/30">
        <div className="custom-container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-serif font-medium mb-4">Our Masterpieces</h1>
            <p className="text-muted-foreground">
              Each piece tells a story of craftsmanship, dedication, and timeless beauty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-sm font-medium text-wood-walnut mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-serif font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <Link
                    to="/quote"
                    className="inline-block text-sm font-medium text-wood-walnut hover:text-wood-walnut/80"
                  >
                    Request Similar Design →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/quote"
              className="inline-block bg-wood-walnut text-white px-8 py-3 rounded-md font-medium hover:bg-wood-walnut/90 transition-colors"
            >
              Start Your Custom Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
