
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Herbal Shop
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-grow">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search herbs, supplements, and more..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 8].map((item) => (
          <motion.div
            key={item}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="aspect-square relative">
              <img  
                className="w-full h-full object-cover"
                alt={`Herbal product ${item}`}
               src="https://images.unsplash.com/photo-1685633225184-34264b292f7f" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Premium Herbal Blend</h3>
              <p className="text-muted-foreground mb-2">100% Natural ingredients</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">$29.99</span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
