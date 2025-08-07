'use client'
import { projects } from '@/datas/datas';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import NavbarBackProjects from '@/app/components/NavbarProjects';
import BackToProjectsButton from '@/app/components/BackToProjectsButton';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function ProjectPage() {
  const params = useParams();
  const t = useTranslations();
  const { slug } = params;
  const project = projects.find((p) => p.projectSlug === slug);

  if (!project) return notFound();
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-8 pt-32 text-black dark:text-white">
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
        <p className="text-lg leading-relaxed mb-6">{t(`myProjects.description.${project.descriptionKey}`)}</p>
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
        <div className='flex flex-col gap-4 mt-8'>
          {project.sourceGithub && (
            <div>
              <a
                href={project.sourceGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--primary-color] hover:text-[--primary-color] hover:font-bold"
              >
                {t('project.viewGithub')}
              </a>
            </div>
          )}
          {project.sourceWeb && (
            <div>
              <a
                href={project.sourceWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--primary-color] hover:text-[--primary-color] hover:font-bold"
              >
                {t('project.viewProject')}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
