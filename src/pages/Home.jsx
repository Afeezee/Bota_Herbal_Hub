
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Brain, ShoppingBag } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Discover the Power of Natural Healing
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join our community of herbal medicine enthusiasts, learn from experts, and find the best natural products for your wellbeing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="mr-4">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-6 bg-card rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ShoppingBag className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Herbal Shop</h3>
              <p className="text-muted-foreground">
                Browse and purchase high-quality herbal products from verified suppliers.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-card rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                Connect with fellow enthusiasts and share your knowledge and experiences.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-card rounded-lg shadow-lg"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-muted-foreground">
                Get instant answers about herbs and identify plants with our AI technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square relative">
                  <img 
                    className="w-full h-full object-cover"
                    alt={`Herbal product ${item}`}
                   src="https://images.unsplash.com/photo-1586768835949-e593c97c8967" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Herbal Product {item}</h3>
                  <p className="text-muted-foreground mb-4">Natural healing blend</p>
                  <Button className="w-full">Learn More</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
