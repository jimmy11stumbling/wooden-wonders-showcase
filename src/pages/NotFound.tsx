
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/20 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-serif font-bold mb-4 text-wood-walnut">404</h1>
        <p className="text-xl text-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="inline-block bg-wood-walnut hover:bg-wood-walnut/90 text-white font-medium rounded-md px-6 py-3 transition-all hover-lift"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
