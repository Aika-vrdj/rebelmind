"use client";

import { motion } from "framer-motion";

interface TypeTraitsProps {
  traits: string[];
}

export default function TypeTraits({ traits }: TypeTraitsProps) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-card rounded-lg p-6"
    >
      <h2 className="text-2xl font-semibold mb-4">Key Traits</h2>
      <ul className="list-disc list-inside space-y-2">
        {(traits ?? []).map((trait) => (
          <li key={trait ?? ""}>{trait}</li>
        ))}
      </ul>
    </motion.div>
  );
}
