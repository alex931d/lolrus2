import Image from "next/image";
import lolrusImage from "../../../public/bucket.png"
export default function Footer() {
  return (
<div className="fixed bottom-0 left-0 w-full min-h-[200px] bg-footer-color flex items-center justify-center">
     <section className="max-w-[900px] w-full flex items-center justify-center">
       <div>
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white"> <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Links:</span></h1>
<ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
    <li className="flex gap-2">
        <span className="text-xl text-white font-semibold">
        Twitter: 
        </span>
      
        <a href="https://x.com/lolruscoinso" className="font-semibold text-xl text-blue-600 underline dark:text-blue-500 hover:no-underline">https://x.com/lolruscoinso</a>
    </li>
    <li>
    <span className="text-xl text-white font-semibold">
        Telegram: 
        </span>: 
        <a href="https://t.me/+8Uy2-6r1CBIxZDU0" className=" font-semibold text-xl text-blue-600 underline dark:text-blue-500 hover:no-underline">https://t.me/+8Uy2-6r1CBIxZDU0</a>

    </li>
    <li>
    <span className="text-xl text-white font-semibold">
        Coin: 
        </span>
    </li>
</ul>
       </div>
     </section>
</div>
  );
}
