import Image from "next/image";
import Card from "@/componets/card";
import Card2 from "@/componets/card2";
import ProfileCard from '@/componets/porfileCard' ; 

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen" >
      <ProfileCard/>
       
    </div>
  );
}
