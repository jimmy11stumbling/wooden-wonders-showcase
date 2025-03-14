
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Art of Hand-Carved Joinery",
    excerpt: "Explore the traditional techniques that make our furniture stand the test of time.",
    category: "Craftsmanship",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1581904581031-ca9280ed1248?q=80&w=2574&auto=format&fit=crop",
    author: "Thomas Wright",
    authorRole: "Master Craftsman"
  },
  {
    id: 2,
    title: "Sustainable Forestry: Our Wood Sourcing Process",
    excerpt: "Learn how we ensure every piece of wood is responsibly harvested to protect our forests.",
    category: "Sustainability",
    date: "May 28, 2023",
    image: "https://images.unsplash.com/photo-1595356700455-a80174f067da?q=80&w=2670&auto=format&fit=crop",
    author: "Emily Chen",
    authorRole: "Materials Specialist"
  },
  {
    id: 3,
    title: "Caring for Your Wooden Furniture Through the Seasons",
    excerpt: "Simple maintenance tips to keep your wooden furniture beautiful for generations.",
    category: "Maintenance",
    date: "April 12, 2023",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2670&auto=format&fit=crop",
    author: "James Peterson",
    authorRole: "Furniture Designer"
  },
  {
    id: 4,
    title: "From Sketch to Showroom: The Journey of Custom Furniture",
    excerpt: "Follow the process of how your custom design becomes a finished masterpiece.",
    category: "Process",
    date: "March 5, 2023",
    image: "https://images.unsplash.com/photo-1580130601253-fd0420ece8b3?q=80&w=2670&auto=format&fit=crop",
    author: "Lisa Wong",
    authorRole: "Design Director"
  },
  {
    id: 5,
    title: "Exploring Different Wood Types and Their Unique Characteristics",
    excerpt: "A guide to selecting the perfect wood for your custom furniture project.",
    category: "Materials",
    date: "February 18, 2023",
    image: "https://images.unsplash.com/photo-1597113366853-fea190b6cd82?q=80&w=2670&auto=format&fit=crop",
    author: "Michael Brooks",
    authorRole: "Wood Expert"
  }
];

// Portfolio projects data
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

type TabType = "blog" | "portfolio";

const Blog = () => {
  const [activeTab, setActiveTab] = useState<TabType>("blog");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-secondary/20">
          <div className="custom-container">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                {activeTab === "blog" ? "Our Journal" : "Portfolio"}
              </h1>
              <p className="text-muted-foreground">
                {activeTab === "blog" 
                  ? "Insights, tips, and stories from the world of wooden craftsmanship." 
                  : "Explore our past custom creations and signature pieces."}
              </p>
              
              {/* Tabs */}
              <div className="flex justify-center mt-8">
                <div className="inline-flex bg-secondary/30 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab("blog")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === "blog"
                        ? "bg-white shadow-sm"
                        : "hover:bg-white/20"
                    }`}
                  >
                    Journal
                  </button>
                  <button
                    onClick={() => setActiveTab("portfolio")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTab === "portfolio"
                        ? "bg-white shadow-sm"
                        : "hover:bg-white/20"
                    }`}
                  >
                    Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section 
          ref={sectionRef}
          className="py-16"
        >
          <div className="custom-container">
            {activeTab === "blog" ? (
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
              >
                {blogPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover-lift"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs bg-secondary rounded-full px-2 py-1">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-medium mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-secondary rounded-full mr-2"></div>
                          <div>
                            <p className="text-sm font-medium">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                          </div>
                        </div>
                        <a 
                          href="#" 
                          className="text-wood-walnut hover:text-wood-cherry transition-colors flex items-center text-sm font-medium"
                        >
                          Read more
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
              >
                {portfolioProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover-lift"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex items-end">
                        <div className="p-6 w-full text-white">
                          <span className="text-xs bg-wood-walnut/90 rounded-full px-2 py-1 mb-2 inline-block">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-serif font-medium">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-sm font-medium text-wood-walnut hover:text-wood-cherry transition-colors"
                      >
                        View details
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
