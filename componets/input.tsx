"use client";

import { useRef, useState, useEffect } from "react";
import localforage from "localforage";

export default function Input() {
  const inputRef = useRef(null);
  const [textdata, setdata] = useState<string>("");
  const inout2Ref = useRef<HTMLInputElement | null>(null);
  function handClick() {
    console.log("clicked");
    console.log(inout2Ref.current?.value);
  }

  useEffect(() => {
    async function fetchdata() {
      await localforage.setItem("username", "pcy crysta");
      const value = await localforage.getItem("username");
      console.log("Stored value:", value);
    }

    fetchdata();
  }, []);

  const arrowFunction = (): void => {
    console.log("arrow function called");
    console.log(inout2Ref.current?.value);
    setdata(inout2Ref.current?.value ?? "no data");
  };

  return (
    <>
      <input
        type="text"
        ref={inout2Ref}
        placeholder="Enter name "
        className="w-200 h-40 bg-amber-50 m-10 pl-4 "
      />

      <button
        onClick={arrowFunction}
        className="bg-amber-300 w-80 h-40 text-xl text-white shadow-2xl rounded-2xl "
      >
        Save
      </button>
      <p>{textdata}</p>
    </>
  );
}
