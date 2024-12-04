import "@/styles/globals.css";
import { default as Link } from "next/link";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center p-4">
         <div>
            <div>{`My Portfolio's content`}</div>
            {/* <div>My Portfolio&apos;s content</div> */}
         </div>
         <Link href={"/projects"} className='font-medium bg-slate-800 border-emerald-800 border rounded-md p-4 text-zinc-300 mt-8'>
            {`==> My projects`}
         </Link>
      </main>
   );
}
