import Image from "next/image";
import Card from "@/componets/card";
import Card2 from "@/componets/card2";
import ProfileCard from "@/componets/porfileCard";
import Input from "@/componets/input";
import Page from "@/componets/page";
import { Button } from "@/components/ui/button";
import { InputDemo } from "@/componets/shandcn";

export default function Home() {
  return (
    <div className="justify-center items-center h-screen">
      {/* <ProfileCard /> */}
      {/* <Input />
      <Button>Click Me</Button> */}
      {/* <Page /> */}

      <InputDemo></InputDemo>
    </div>
  );
}
