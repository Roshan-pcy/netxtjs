"use client"; // <-- THIS MUST BE THE VERY FIRST LINE

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";

export function InputDemo() {
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handSumbit() {
    if (inputRef.current) {
      alert("Email: " + inputRef.current.value);
      setEmail(inputRef.current.value); // update state only on submit
    }
  }

  return (
    <div className="space-y-2 w-80 flex flex-col gap-2 m-2.5">
      <p>Input data: {email}</p>
      <Input
        type="email"
        placeholder="Email"
        ref={inputRef} // uncontrolled, no value/onChange
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handSumbit}
      >
        Submit
      </button>
    </div>
  );
}
