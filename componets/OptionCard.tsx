"use client";

import { motion } from "framer-motion";

interface OptionCardProps {
  id: string;
  label: string;
  icon?: string;
  checked?: boolean;
  onToggle: (id: string) => void;
}

export default function OptionCard({
  id,
  label,
  icon,
  checked = false,
  onToggle,
}: OptionCardProps) {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      onClick={() => onToggle(id)}
      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 border shadow-sm transition
        ${
          checked
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            : "bg-[#191623] hover:bg-[#22202b] text-white/90 border-white/5"
        }`}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <span>{label}</span>
      </div>
      <div
        className={`w-6 h-6 rounded-md flex items-center justify-center border ${
          checked ? "bg-white/90 text-black" : "border-white/10"
        }`}
      >
        {checked ? "✓" : ""}
      </div>
    </motion.button>
  );
}
