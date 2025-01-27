import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import lolrus2Image from "../../../public/lolrus2.png"
import lolrusImage from "../../../public/bucket.png"
import Image from "next/image";

export default function Body() {
  return (
    <div className=" w-full flex flex-col gap-5 items-center">
        <section className="p-6 max-w-[1280px] w-full">
           <Card className="bg-footer-color">
        
             <CardContent>
               <div className="flex items-center w-full p-6 gap-2 ">
                <Avatar className="w-[70px] h-[70px]">
                    <AvatarImage src={lolrusImage.src} className="bg-white" />
                </Avatar>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">$lolrus is now <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">public!</span></h1>

               </div>
               <CardFooter>
               <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
               <span className="text-white font-semibold">
                In loving memory of Lolrus the Walrus.  
                 Rest in peace, dear friend. You brought joy, laughter, and love to all who knew you.  
                     Your playful spirit and gentle nature will forever be remembered. We all loved you deeply and will carry your memory in our hearts.  
                    </span>    
               </blockquote>
                  
                       </CardFooter>
             </CardContent>
           </Card>
        </section>
        <section className="w-full max-w-[1280px] flex flex-col gap-5 p-6 max-sm:mb-[200px]">
        <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">why $lolrus ?</h3>
        <div className="flex flex-wrap gap-4 w-full">
        <Card className="w-full  ">
                    <CardContent></CardContent>
                </Card> 
                <Card className="w-full  bg-secound-footer-color relative overflow-hidden">
                    <CardHeader>
                    <span className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Because Lolrus Deserves It!</span>
                    
                    </CardHeader>
                    <CardContent className="">
                    <p className="mb-6 text-lg text-gray-900 font-semibold lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Lolrus the Walrus became a viral sensation in 2006, stealing hearts with his unforgettable expression and the legendary line, I has a bucket. $LOLrus is more than a meme coin—its a tribute to a meme icon who united millions through laughter and nostalgia. Join us in honoring Lolrus by keeping his legacy alive in the blockchain world.</p>
                      
                    </CardContent>
                    <Image className=" absolute top-[10%] left-[84%]  -rotate-45 max-sm:left-[75%] max-sm:top-[35%]" height={300} width={300} alt="lolrus2" src={lolrus2Image} />
                </Card>
                <Card className="w-full">
                    <CardContent></CardContent>
                </Card>
                       
                  </div>
        </section>
    </div>
  );
}
