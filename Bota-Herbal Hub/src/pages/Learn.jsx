
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, Camera, Book, Award } from "lucide-react";

const Learn = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Learn About Herbal Medicine
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          className="bg-primary/10 rounded-lg p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Bot className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-semibold">AI Assistant</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Ask questions about herbs, their uses, and get instant, accurate responses from our AI.
          </p>
          <div className="bg-background rounded-lg p-4">
            <input
              type="text"
              placeholder="Ask about any herb..."
              className="w-full p-2 border rounded-lg mb-2"
            />
            <Button className="w-full">Ask AI</Button>
          </div>
        </motion.div>

        <motion.div
          className="bg-secondary rounded-lg p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Camera className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-semibold">Plant Identifier</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Upload a photo of any plant to identify it and learn about its properties.
          </p>
          <Button className="w-full">Upload Photo</Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="aspect-video relative">
              <img  
                className="w-full h-full object-cover"
                alt={`Herbal course ${item}`}
               src="https://images.unsplash.com/photo-1586768835949-e593c97c8967" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Beginner Friendly</span>
              </div>
              <h3 className="font-semibold mb-2">Introduction to Herbal Medicine</h3>
              <p className="text-muted-foreground mb-4">Learn the basics of herbal healing and natural remedies.</p>
              <Button variant="outline" className="w-full">Start Learning</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
