"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingEntry() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/onboarding/screen1");
  }, []);

  return null;
}
