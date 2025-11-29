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
      whileTap={{ scale: 0.98 }}
      onClick={() => onToggle(id)}
      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 border shadow-sm transition backdrop-blur-xl ${
        checked
          ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white border-white/20 shadow-[0_8px_32px_0_rgba(99,102,241,0.2)]"
          : "bg-white/5 hover:bg-white/10 text-white/90 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-xl">{icon}</span>}
        <span className="font-medium">{label}</span>
      </div>
      <span className="text-sm font-bold">{checked ? "✓" : ""}</span>
    </motion.button>
  );
}
