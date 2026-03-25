import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { MoveLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background page-section">
      <div className="section-container text-center max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Large 404 Text */}
        <h1 className="text-8xl md:text-9xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
          404
        </h1>
        
        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        
        {/* Description */}
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="btn-primary flex items-center gap-2 hover:scale-105 transition duration-300 shadow-lg"
        >
          <MoveLeft size={20} />
          Return to Homepage
        </Link>
        
      </div>
    </div>
  );
};

export default NotFound;
