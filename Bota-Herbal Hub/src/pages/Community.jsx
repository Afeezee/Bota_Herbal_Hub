
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Calendar } from "lucide-react";

const Community = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Herbal Community
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <motion.div
          className="p-6 bg-card rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MessageSquare className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Discussion Forums</h2>
          <p className="text-muted-foreground mb-4">
            Join conversations about herbal remedies, share experiences, and learn from others.
          </p>
          <Button className="w-full">Browse Forums</Button>
        </motion.div>

        <motion.div
          className="p-6 bg-card rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Users className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Expert Connect</h2>
          <p className="text-muted-foreground mb-4">
            Connect with certified herbalists and natural medicine practitioners.
          </p>
          <Button className="w-full">Find Experts</Button>
        </motion.div>

        <motion.div
          className="p-6 bg-card rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Calendar className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Events</h2>
          <p className="text-muted-foreground mb-4">
            Discover workshops, seminars, and gatherings in your area.
          </p>
          <Button className="w-full">View Events</Button>
        </motion.div>
      </div>

      <div className="bg-secondary rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Recent Discussions</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="bg-card p-4 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img  
                    className="w-12 h-12 rounded-full"
                    alt={`User avatar ${item}`}
                   src="https://images.unsplash.com/photo-1544212408-c711b7c19b92" />
                </div>
                <div>
                  <h3 className="font-semibold">Benefits of Chamomile Tea</h3>
                  <p className="text-muted-foreground">
                    Discussing the various health benefits and preparation methods...
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>15 replies</span>
                    <span>2 hours ago</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
