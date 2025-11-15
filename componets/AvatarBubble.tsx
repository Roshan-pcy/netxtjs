"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AvatarBubbleProps {
  avatarSrc?: string;
  title: string;
  subtitle?: string;
}

export default function AvatarBubble({
  avatarSrc = "/avator.png",
  title,
  subtitle,
}: AvatarBubbleProps) {
  return (
    <div className="flex items-start gap-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-12 h-12 rounded-full flex-shrink-0"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-[12px] opacity-40" />
        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-4 ring-white/10">
          <Image src={avatarSrc} alt="avatar" width={48} height={48} />
        </div>
      </motion.div>

      <div className="max-w-xl">
        <div className="bg-[#2b2940] text-white/90 rounded-xl px-5 py-3 shadow-md border border-white/5">
          <h3 className="font-semibold text-lg leading-snug">{title}</h3>
          {subtitle && <p className="text-sm text-white/60 mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
