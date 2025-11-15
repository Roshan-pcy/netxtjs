"use client";

export default function ProgressBar({ value = 40 }: { value?: number }) {
  return (
    <div className="w-full h-2.5 bg-white/10 rounded overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
