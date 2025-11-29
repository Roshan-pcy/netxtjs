"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import onBoardingStore from "@/lib/storage/OnboardingStore";
import AvatarBubble from "@/componets/AvatarBubble";
import OptionCard from "@/componets/OptionCard";
import ProgressBar from "@/componets/ProgressBar";
import ContinueButton from "@/componets/ContinueButton";

export default function OnboardingScreen5() {
  const router = useRouter();
  const screen = onBoardingStore.screens[4];

  const [selected, setSelected] = useState<string[]>([]);

  function toggleOption(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
    onBoardingStore.toggle(id);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b0b39] to-[#0b0316] py-14 px-6 flex justify-center">
      <div className="max-w-[360px] w-full">
        <ProgressBar value={70} />

        <AvatarBubble title={screen.question} subtitle="Select your reason" />

        <div className="mt-8 flex flex-col gap-3">
          {screen.options.map((opt: string) => (
            <OptionCard
              key={opt}
              id={opt}
              label={opt}
              icon="✨"
              checked={selected.includes(opt)}
              onToggle={toggleOption}
            />
          ))}
        </div>

        <ContinueButton
          onClick={() => router.push("/onboarding/screen6")}
          disabled={selected.length === 0}
        />
      </div>
    </div>
  );
}
