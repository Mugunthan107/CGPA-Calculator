
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, CheckCircle, BarChart4, Share2, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background gradients */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/15 z-[-1]"></div>
      <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,122,255,0.08)_0%,rgba(255,255,255,0)_100%)] fixed inset-0 z-[-1]"></div>
      
      <div className="w-full max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Hero section with enhanced animation */}
          <div className="animate-fade-in space-y-6 mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Calculator className="h-7 w-7 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Professional CGPA Calculator</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Calculate Your Academic <span className="text-primary">Success</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track and analyze your academic performance with our advanced CGPA calculator. 
              Simple, accurate, and designed for students.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg animate-pulse">
                <Link to="/calculate">
                  Start Calculating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="px-6 py-6 text-lg">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Features section with icons */}
          <div className="mt-16 glass p-8 rounded-2xl shadow-lg max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-2xl font-bold mb-8 flex items-center justify-center">
              <BarChart4 className="mr-2 h-6 w-6 text-primary" />
              Why Students Choose Our Calculator
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start space-x-3 bg-white/50 p-4 rounded-xl hover:shadow-md transition-all">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Simple & Intuitive</h3>
                  <p className="text-muted-foreground">Easy-to-use interface designed for quick and hassle-free calculations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 bg-white/50 p-4 rounded-xl hover:shadow-md transition-all">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Accurate Results</h3>
                  <p className="text-muted-foreground">Get precise CGPA calculations based on your course grades and credits.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 bg-white/50 p-4 rounded-xl hover:shadow-md transition-all">
                <Share2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Easily Shareable</h3>
                  <p className="text-muted-foreground">Generate links to share your CGPA results with advisors or friends.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 bg-white/50 p-4 rounded-xl hover:shadow-md transition-all">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Works Everywhere</h3>
                  <p className="text-muted-foreground">Responsive design ensures perfect functionality on all your devices.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button asChild variant="secondary" className="mt-4">
                <Link to="/calculate">
                  Try It Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Team Members Section */}
          <div className="mt-16 glass p-8 rounded-2xl shadow-lg max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-2xl font-bold mb-8 flex items-center justify-center">
              <Users className="mr-2 h-6 w-6 text-primary" />
              Our Team Members
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white/50 p-4 rounded-xl hover:shadow-md transition-all flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  M
                </div>
                <h3 className="text-lg font-semibold">Muhilan</h3>
                <p className="text-muted-foreground text-sm mt-1">Home Page Developer</p>
              </div>
              
              <div className="bg-white/50 p-4 rounded-xl hover:shadow-md transition-all flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  p
                </div>
                <h3 className="text-lg font-semibold">Poovizhi</h3>
                <p className="text-muted-foreground text-sm mt-1">Login Page Developer</p>
              </div>
              
              <div className="bg-white/50 p-4 rounded-xl hover:shadow-md transition-all flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  M
                </div>
                <h3 className="text-lg font-semibold">Mugunthan</h3>
                <p className="text-muted-foreground text-sm mt-1">CGPA Calculator Developer</p>
              </div>
              
              <div className="bg-white/50 p-4 rounded-xl hover:shadow-md transition-all flex flex-col items-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4">
                  M
                </div>
                <h3 className="text-lg font-semibold">Mathumathi</h3>
                <p className="text-muted-foreground text-sm mt-1">About Page Developer</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">Visit each page to learn more about the team member responsible for it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
