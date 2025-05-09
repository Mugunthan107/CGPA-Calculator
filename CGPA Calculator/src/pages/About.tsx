
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator, Share2, Zap, User, Download } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/10 z-[-1]"></div>
      <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,122,255,0.05)_0%,rgba(255,255,255,0)_100%)] fixed inset-0 z-[-1]"></div>
      
      <div className="w-full max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="CGPA Calculator Banner" 
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent flex items-center">
            <div className="px-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">About Our CGPA Calculator</h1>
              <p className="mt-2 text-white/90 max-w-md text-lg drop-shadow-md">A professional tool designed to simplify your academic grade calculations</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="w-20 h-1 bg-primary/30 rounded-full mb-6"></div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">About CGPA Calculator</h1>
          <p className="mt-3 text-muted-foreground text-center max-w-2xl">
            Learn more about our professional CGPA calculation tool
          </p>
        </div>
        
        {/* Team Member Info - Member 4 */}
        <div className="glass rounded-2xl p-8 shadow-xl mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <User className="mr-2 h-6 w-6 text-primary" />
            About Page Developer
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-2xl flex-shrink-0">
              M
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-center md:text-left">Mathumathi</h3>
              <p className="text-lg leading-relaxed mb-4">
                As the About Page Developer, Mathumathi is responsible for creating informative, user-friendly content that explains the CGPA Calculator's functionality and purpose. With expertise in UX writing and information architecture, they ensure users understand how to make the most of this tool.
              </p>
              <p className="text-lg leading-relaxed">
              Mathumathi is passionate about creating clear documentation and explanatory content that makes complex tools accessible to all users.
              </p>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-2xl p-8 shadow-xl mb-10">
          <h2 className="text-2xl font-bold mb-6">What is CGPA?</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed mb-4">
                CGPA stands for Cumulative Grade Point Average. It is a standard method of measuring academic achievement in universities and colleges. The CGPA system assigns grade points to each course and then calculates a weighted average based on the credit hours.
              </p>
              <p className="text-lg leading-relaxed">
                Our calculator simplifies this process by allowing you to input your grades and credit hours for each subject, and then calculating the final CGPA automatically.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Student studying" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="glass rounded-2xl p-8 shadow-xl mb-10">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 rounded-xl bg-primary/5">
              <Calculator className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Calculation</h3>
              <p className="text-center text-muted-foreground">
                Input grades and credits to instantly calculate your CGPA
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-primary/5">
              <Share2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Shareable Results</h3>
              <p className="text-center text-muted-foreground">
                Generate links to share your CGPA calculation with others
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-xl bg-primary/5">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-center text-muted-foreground">
                Lightning fast calculations with smooth user experience
              </p>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-2xl p-8 shadow-xl mb-10">
          <h2 className="text-2xl font-bold mb-6">How to Use</h2>
          <div className="flex flex-col-reverse md:flex-row gap-8">
            <ol className="list-decimal list-inside space-y-4 pl-4 md:w-1/2">
              <li className="text-lg">Navigate to the Calculator page</li>
              <li className="text-lg">Add subjects using the "Add Subject" button</li>
              <li className="text-lg">Enter your grade (1-10) and credit hours (1-5) for each subject</li>
              <li className="text-lg">Click "Calculate CGPA" to see your result</li>
              <li className="text-lg">Use the "Share" button to generate a shareable link</li>
            </ol>
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Student using calculator" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
        
        
        
        <div className="flex justify-center mt-8">
          <Button asChild className="flex items-center">
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;

