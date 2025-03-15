"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const enneagramTypes = [
  { number: 1, name: "The Reformer", color: "bg-black" },
  { number: 2, name: "The Helper", color: "bg-black" },
  { number: 3, name: "The Achiever", color: "bg-black" },
  { number: 4, name: "The Individualist", color: "bg-black" },
  { number: 5, name: "The Investigator", color: "bg-black" },
  { number: 6, name: "The Loyalist", color: "bg-black" },
  { number: 7, name: "The Enthusiast", color: "bg-black" },
  { number: 8, name: "The Challenger", color: "bg-black" },
  { number: 9, name: "The Peacemaker", color: "bg-black" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-7xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&h=800&fit=crop&q=80"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&h=800&fit=crop&q=80";
              }}
              alt="Sacred geometry background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                The Enneagram Hub
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover the ancient wisdom of the Enneagram, a powerful tool for
                personal growth and understanding. Explore all nine personality types
                and uncover insights about yourself and others.
              </p>
              <Link
                href="/quiz"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Take the Enneagram Quiz
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {enneagramTypes.map((type, index) => (
            <motion.div
              key={type.number}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/type/${type.number}`}>
                <div className={`${type.color} rounded-lg p-6 h-full transition-transform hover:scale-105 cursor-pointer`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold">{type.number}</span>
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">{type.name}</h2>
                  <p className="text-sm opacity-90">
                    {type.number === 1 && "Principled perfectionists striving for integrity and improvement"}
                    {type.number === 2 && "Caring nurturers with an intuitive sense for others' needs"}
                    {type.number === 3 && "Dynamic achievers pursuing success and admiration"}
                    {type.number === 4 && "Creative individualists seeking authenticity and depth"}
                    {type.number === 5 && "Insightful observers gathering knowledge and understanding"}
                    {type.number === 6 && "Loyal guardians seeking security through vigilance"}
                    {type.number === 7 && "Enthusiastic adventurers chasing new experiences"}
                    {type.number === 8 && "Powerful protectors leading with strength and justice"}
                    {type.number === 9 && "Peaceful mediators harmonizing with their environment"}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
