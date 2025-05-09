
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/10 z-[-1]"></div>
      <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,122,255,0.05)_0%,rgba(255,255,255,0)_100%)] fixed inset-0 z-[-1]"></div>
      
      <div className="glass rounded-2xl p-12 max-w-lg mx-auto text-center">
        <h1 className="text-8xl font-bold text-primary mb-6">404</h1>
        <p className="text-xl text-foreground mb-8">The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="button-primary inline-flex"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
