import "@/styles/globals.css";
import Link from 'next/link';
import React from 'react';

const About = () => {
   return (
      <main className="flex min-h-screen flex-col items-center p-4">
         <div>About !!!</div>
         <Link href={"/"} className='font-medium bg-slate-200 mt-8 border-emerald-800 border rounded-md p-4'>
            {`==> Return to home`}
         </Link>
      </main>
   )
}

export default About