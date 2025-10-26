import Image from "next/image";
import Card from "@/componets/card";
import Card2 from "@/componets/card2";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen" >
      
      <Card className="bg-black rounded-2xl  text-amber-50 "  >hello</Card>
      <Card2>hello</Card2>
    </div>
  );
}
