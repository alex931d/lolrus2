import Image from "next/image";
import Header from "@/app/_componets/header"
import { Button } from "@/components/ui/button";
import Body from "./_componets/body";
import Footer from "./_componets/footer";
export default function Home() {
  return (
     <div className=" w-full h-min-screen ">
           <Header />
           <Body />
           <Footer />
     </div>
  );
}
