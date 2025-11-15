"use client";

import { useState } from "react";
import AvatarBubble from "@/componets/AvatarBubble";
import OptionCard from "@/componets/OptionCard";
import ProgressBar from "@/componets/ProgressBar";
import ContinueButton from "@/componets/ContinueButton";

export default function OnboardingPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    { id: "freeze", label: "I freeze when I speak", icon: "😨" },
    { id: "express", label: "I can't express myself", icon: "🎯" },
    { id: "accent", label: "My accent isn't clear", icon: "👂" },
    { id: "grammar", label: "Grammar mistakes", icon: "🧠" },
    { id: "reply", label: "Can't reply quickly", icon: "🐢" },
  ];

  function toggleOption(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b0b39] to-[#0b0316] py-14 px-6 flex justify-center">
      <div className="max-w-[360px] w-full">
        <ProgressBar value={40} />

        <div className="mt-6">
          <AvatarBubble
            title="What's stopping you when you speak English?"
            subtitle="select from this "
          />
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {options.map((opt) => (
            <OptionCard
              key={opt.id}
              id={opt.id}
              label={opt.label}
              icon={opt.icon}
              checked={selected.includes(opt.id)}
              onToggle={toggleOption}
            />
          ))}
        </div>

        <ContinueButton
          onClick={() => alert(`Selected: ${selected.join(", ")}`)}
          disabled={selected.length === 0}
        />

        
      </div>
    </div>
  );
}
