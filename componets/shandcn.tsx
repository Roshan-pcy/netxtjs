"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { CheckedState } from "@radix-ui/react-checkbox";

export function InputDemo() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState<CheckedState>(false); // ✅ Typed for Checkbox
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit() {
    // Validate checkbox
    if (checked !== true) {
      alert("⚠️ You must accept the terms to continue!");
      return;
    }

    // Read email value
    if (inputRef.current) {
      const value = inputRef.current.value;
      setEmail(value);
      alert(`✅ Submitted Email: ${value}`);
    }
  }

  return (
    <div className="space-y-4 w-80 flex flex-col m-2.5">
      <p>Input data: {email}</p>

      {/* Email Input */}
      <Input type="email" placeholder="Enter your email" ref={inputRef} />

      {/* Checkbox with label */}
      <div className="flex items-center gap-2">
        <Checkbox checked={checked} onCheckedChange={setChecked} id="terms" />
        <Label htmlFor="terms">I accept the terms & conditions</Label>
      </div>

      {/* Submit Button */}
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
