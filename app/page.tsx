"use client";

import Image from "next/image";
import Card from "@/componets/card";
import Card2 from "@/componets/card2";
import ProfileCard from "@/componets/porfileCard";
import Input from "@/componets/input";
import Page from "@/componets/page";
import { Button } from "@/components/ui/button";
import { InputDemo } from "@/componets/shandcn";
import DictionarySearch from "@/componets/DictionarySearch";
import { useQuery, useMutation } from "@tanstack/react-query";
import OnboardingPage from "./onboarding/page";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
async function fetchPost(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json(); // ✅ wait for JSON to resolve

  console.log("Output JSON is:", data); // ✅ actual data logged
  return data;
}

export default function Home() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["poast"],
    queryFn: fetchPost,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-[24px] font-semibold text-gray-700">Loading...</p>
      </div>
    );

  if (isError)
    return (
      <p className="text-red-500 font-bold   text-[40px]">
        Error:{(error as Error).message}
      </p>
    );

  // return (
  //   <div className="flex  flex-col items-center justify-center">
  //     {data?.map((post, key) => (
  //       <div
  //         key={key}
  //         className="
  //   p-4 w-[450px] mb-4 rounded-2xl border border-gray-300
  //   bg-gradient-to-r from-amber-500 to-pink-500 
  //   transition-all duration-300 ease-in-out
  //   hover:border-white hover:w-[460px]
  // "
  //       >
  //         {" "}
  //         <h2 className="text-[20px] font-weight: 600 ">title:{post.title}</h2>
  //         <p>dis:{post.userId}</p> <p>body:{post.body}</p>
  //       </div>
  //     ))}
  //   </div>
  // );


  return(<><OnboardingPage/></>)
}
