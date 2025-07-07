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
    <section className="max-w-[1200px] mx-auto px-4 py-20 text-black dark:text-white">
      <NavbarBackProjects />
      <Link href="/#projets" className="inline-flex items-center gap-2 text-black dark:text-white font-medium bg-[#f6f6f6] dark:bg-[#222] px-4 py-2 rounded-lg shadow hover:bg-[#ececec] dark:hover:bg-[#333] border border-[#e5e5e5] dark:border-[#444] mb-6">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.25 15L6.25 10L11.25 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-semibold">Retour aux projets</span>
      </Link>
      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
      <Image
        src={project.image}
        alt={project.name}
        width={800}
        height={450}
        className="rounded-xl mb-6"
      />
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
          className="text-[--primary-color] underline"
        >
          Voir le projet
        </a>
      )}
    </section>
  );
}
