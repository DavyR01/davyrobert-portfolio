'use client';

import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="pt-32 px-4">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                <h2 className="text-center text-[--primary-color] uppercase text-4xl font-bold mb-12">
                    <span className="italic dark:text-white text-black">Me</span> Contacter
                </h2>

                <div className="max-w-[800px] text-lg leading-7 text-black dark:text-white font-hk text-justify">
                    <p className="mb-6">
                        Vous êtes à la recherche d’un développeur, d’un intégrateur web ou encore d’un testeur pour renforcer votre équipe ? <br /><br />
                        Je suis actuellement à la recherche d’une opportunité professionnelle et serais ravi d’échanger autour d’une future collaboration. <br /><br />

                        N’hésitez pas à me contacter, que ce soit pour discuter d’un projet, en savoir plus sur mon profil, ou simplement me poser des questions. <br /><br />
                        Je reste disponible et réactif, et je me ferai un plaisir de vous répondre.
                    </p>

                    <a
                        href="mailto:contact@davyrobert.fr"
                        className="relative inline-block mt-6 text-lg font-semibold dark:text-[--primary-color] border-2 dark:border-[--primary-color] border-[var(--primary-color)] text-[var(--text-color-dark)] px-10 py-4 overflow-hidden transition-colors duration-200 group rounded-lg"
                    >
                        <span className="relative z-10 group-hover:text-[var(--text-color-dark)] transition-colors duration-200">contact@davyrobert.fr</span>
                        <span className="absolute inset-0 bg-[--primary-color] w-0 group-hover:w-full transition-all duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
