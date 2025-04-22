
import React from "react";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Bota</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              Your trusted source for herbal medicine knowledge and products.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Herbs</li>
              <li>Supplements</li>
              <li>Tea Blends</li>
              <li>Equipment</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Forums</li>
              <li>Expert Advice</li>
              <li>Events</li>
              <li>Blog</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>AI Assistant</li>
              <li>Plant Identifier</li>
              <li>Courses</li>
              <li>Resources</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bota. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
