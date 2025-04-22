
import React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Leaf className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-xl font-bold">Bota</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/shop">
              <Button variant="ghost">Shop</Button>
            </Link>
            <Link to="/community">
              <Button variant="ghost">Community</Button>
            </Link>
            <Link to="/learn">
              <Button variant="ghost">Learn</Button>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
