"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import onBoardingStore from "@/lib/storage/OnboardingStore";
import AvatarBubble from "@/componets/AvatarBubble";
import OptionCard from "@/componets/OptionCard";
import ProgressBar from "@/componets/ProgressBar";
import ContinueButton from "@/componets/ContinueButton";

export default function OnboardingScreen7() {
  const router = useRouter();
  const screen = onBoardingStore.screens[6];

  const [selected, setSelected] = useState<string[]>([]);

  function toggleOption(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
    onBoardingStore.toggle(id);
  }

  function finishOnboarding() {
    localStorage.setItem("onboardingDone", "true");
    router.replace("/dashboard"); // or home page
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b0b39] to-[#0b0316] py-14 px-6 flex justify-center">
      <div className="max-w-[360px] w-full">
        <ProgressBar value={100} />

        <AvatarBubble title={screen.question} subtitle="Choose one" />

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
          onClick={finishOnboarding}
          disabled={selected.length === 0}
        />
      </div>
    </div>
  );
}
