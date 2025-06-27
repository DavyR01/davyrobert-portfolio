import Link from "next/link";

export default function Home() {
   return (
      <main className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <div className="flex flex-col items-center gap-8">
            {`My Portfolio's content`}
            {/* <div>My Portfolio&apos;s content</div> */}
            <Link href={"/projects"} className='font-medium bg-slate-800 border-emerald-800 border rounded-md p-4 text-zinc-300 mt-8'>
               My projects
            </Link>
         </div>
      </main>
   );
}