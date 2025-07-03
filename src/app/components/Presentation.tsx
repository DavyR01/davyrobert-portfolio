import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const Presentation = () => {
   return (
      <section
         id="introduction"
         className="flex flex-row flex-wrap lg:flex-nowrap justify-between max-w-[1400px] mx-auto px-6 text-white relative gap-12 pt-8"
      >
         {/* Fond binaire */}
         <div className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden pointer-events-none">
            <div className="number-container absolute top-0 left-[40%] animate-scroll opacity-10 text-[#5ce1e6] font-bold text-sm leading-none select-none">
               {Array.from({ length: 200 }, (_, i) => (
                  <div key={i}>0<br />1</div>
               ))}
            </div>
            <div className="number-container absolute top-0 left-[60%] animate-scroll2 opacity-10 text-[#5ce1e6] font-bold text-xs leading-none select-none">
               {Array.from({ length: 200 }, (_, i) => (
                  <div key={i}>1<br />0</div>
               ))}
            </div>
         </div>

         {/* Présentation texte */}
         <div id="presentation" className="w-full max-w-[700px] text-left mb-8 lg:mb-0"
         >
            <h2 className="text-4xl font-bold text-center lg:text-left">Bonjour je me présente</h2>

            <h1 className="text-[64px] my-4 font-bold text-center lg:text-left">
               <span className="italic font-light text-white">Davy</span>{' '}
               <span className="text-white">ROBERT</span>
            </h1>

            <h2 className="text-4xl font-bold mb-6 text-center lg:text-left">
               Et j&#39;exerce en tant que <br />
               <span className="text-[#5ce1e6]">Développeur Full</span>{' '}
               <span className="text-[#5ce1e6]">Stack</span>
            </h2>


            {/* Image profil <=1024px */}
            <div className="lg:hidden aspect-square w-[250px] md:w-[300px] min-w-[150px] max-w-full rounded-full border-2 border-[#5ce1e6] flex items-center justify-center overflow-hidden shrink-0 mx-auto my-6">
               <Image
                  src="/assets/logos/davyprofile.png"
                  width={300}
                  height={300}
                  alt="profile"
                  className="object-cover w-full h-full"
               />
            </div>

            <p className="text-white text-base mb-8">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit ab totam laboriosam ut reiciendis corrupti libero reprehenderit nesciunt! Nulla nihil, non blanditiis veritatis fugiat fuga alias mollitia enim eius?     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit ab totam laboriosam ut reiciendis corrupti libero reprehenderit nesciunt! Nulla nihil, non blanditiis veritatis fugiat fuga alias mollitia enim eius?     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit ab totam laboriosam ut reiciendis corrupti libero reprehenderit nesciunt! Nulla nihil, non blanditiis veritatis fugiat fuga alias mollitia enim eius?     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit ab totam laboriosam ut reiciendis corrupti libero reprehenderit nesciunt! Nulla nihil, non blanditiis veritatis fugiat fuga alias mollitia enim eius?     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit ab totam laboriosam ut reiciendis corrupti libero reprehenderit nesciunt! Nulla nihil, non blanditiis veritatis fugiat fuga alias mollitia enim eius?
            </p>

            <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:items-center mb-4">
               <a
                  className="bg-[#5ce1e6] text-black font-semibold py-3 px-6 text-lg rounded-lg transition-all hover:scale-105 hover:bg-white hover:text-[#5ce1e6] hover:border-[#5ce1e6] border-2 border-transparent break-words w-full sm:w-auto text-center"
                  href="/download/CV_davy_robert_2025.pdf"
                  download
               >
                  Mon CV format standard
               </a>
               <a
                  className="relative overflow-hidden bg-gradient-to-r from-[#bfc9ca] via-[#e5e8e8] to-[#bfc9ca] text-black font-semibold py-3 px-6 text-lg rounded-lg transition-all hover:scale-105 hover:from-[#e5e8e8] hover:to-[#bfc9ca] hover:text-[#1A3A34] hover:border-[#bfc9ca] border-2 border-transparent break-words w-full sm:w-auto text-center shadow-md"
                  href="/download/CV_davy_robert_détails_du_parcours_2025.pdf"
                  download
               // target="_blank"
               // rel="noopener noreferrer"
               >
                  <span className="relative z-10">Mon CV format long</span>
                  <span
                     className="absolute left-[-75%] top-0 w-[80%] h-full bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-80 blur-[1px] animate-shine pointer-events-none"
                     aria-hidden="true"
                  />
               </a>
               <div className="flex w-full justify-center sm:w-auto sm:justify-start gap-8 sm:mt-0 mt-4">
                  <a
                     href="https://github.com/davyR01"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[#5ce1e6] text-5xl sm:text-4xl hover:scale-110 transition-transform"
                  >
                     <FaGithub />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/davy-robert"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[#5ce1e6] text-5xl sm:text-4xl  hover:scale-110 transition-transform"
                  >
                     <FaLinkedin />
                  </a>
                  <a
                     href="mailto:contact@davyrobert.fr"
                     className="text-[#5ce1e6] text-5xl sm:text-4xl  hover:scale-110 transition-transform"
                  >
                     <MdEmail />
                  </a>
               </div>
            </div>
         </div>

         {/* Image profil > 1024px */}
         <div className="hidden lg:flex aspect-square w-[250px] md:w-[400px] min-w-[150px] max-w-full rounded-full border-2 border-[#5ce1e6] items-center justify-center overflow-hidden shrink-0 self-start mx-auto lg:mx-0">
            <Image
               src="/assets/logos/davyprofile.png"
               width={400}
               height={400}
               alt="profile"
               className="object-cover w-full h-full"
            />
         </div>



      </section>
   )
}

export default Presentation
