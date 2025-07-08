import { projects } from '@/datas/datas';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import NavbarBackProjects from '@/app/components/NavbarProjects';

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.projectSlug === slug);

  if (!project) return notFound();

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-8 text-black dark:text-white">
      <NavbarBackProjects />
      <Link href="/#projets" className="inline-flex items-center gap-2 text-black dark:text-white font-medium bg-[#f6f6f6] dark:bg-[#222] px-4 py-2 rounded-lg shadow hover:bg-[#ececec] dark:hover:bg-[#333] border border-[#e5e5e5] dark:border-[#444] mb-6 mx-0">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.25 15L6.25 10L11.25 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-semibold text-sm md:text-base">Retour aux projets</span>
      </Link>
      <div className='md:w-[85%] lg:w-[70%] mx-auto'>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.name}</h1>
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1200px) 100vw, 1000px"
            priority
          />
        </div>
        <p className="text-lg leading-relaxed mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={`px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-sm ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        {project.sourceWeb && (
          <a
            href={project.sourceWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--primary-color] hover:text-[--primary-color] hover:font-bold"
          >
            VOIR LE PROJET
          </a>
        )}
      </div>
    </section>
  );
}
