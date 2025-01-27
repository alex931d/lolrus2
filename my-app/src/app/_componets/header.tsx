import Image from "next/image";
import lolrusImage from "../../../public/bucket.png"
export default function Header() {
  return (
   <div className="w-full min-h-[120px] flex items-center bg-header-color justify-center overflow-hidden">
    <section className="pl-2 pr-2 w-full h-full flex items-center justify-center relative">
        <h1 className=" text-white  text-7xl font-bold">"I has a bucket!"</h1>
        <Image src={lolrusImage} width={150} height={150} alt="lolrus" className=" absolute top-0 right-[30px]"/>
    </section>
   </div>
  );
}
