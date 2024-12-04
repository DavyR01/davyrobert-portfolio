import "@/styles/globals.css";
import Link from 'next/link';
import React from 'react';

const Projects = () => {
   return (
      <main className="flex min-h-screen flex-col items-center p-4">
         <div>List projects !</div>
         <Link href={"/about"} className='font-medium bg-slate-200 border-emerald-800 border rounded-md p-4 mt-8'>
            {`==> go to about page`}
         </Link>
         <Link href={"/"} className='font-medium bg-slate-200 mt-2 border-emerald-800 border rounded-md p-4'>
            {`==> Return to home`}
         </Link>
      </main>)
}

export default Projects;