import "@/styles/globals.css";
import Link from 'next/link';
import React from 'react';

const Projets = () => {
   return (
      <main className="flex min-h-screen flex-col items-center p-4">
         <div className="text-white">Page en savoir plus !</div>
         <Link href={"/#projets"} className='font-medium bg-slate-200 mt-8 border-emerald-800 border rounded-md p-4'>
            {`==> Return to projects`}
         </Link>
      </main>
   )
}

export default Projets