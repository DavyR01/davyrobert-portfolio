import { projects } from '@/datas/datas';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import NavbarBackProjects from '@/app/components/NavbarProjects';
import BackToProjectsButton from '@/app/components/BackToProjectsButton';

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.projectSlug === slug);

  if (!project) return notFound();

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-8 text-black dark:text-white">
      <NavbarBackProjects />
      <BackToProjectsButton />
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
