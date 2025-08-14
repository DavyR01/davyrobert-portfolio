'use client'
import { projects } from '@/datas';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import NavbarBackProjects from '@/app/components/NavbarProjects';
import BackToProjectsButton from '@/app/components/BackToProjectsButton';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { formatText } from '@/utils/formatText';

export default function ProjectPage() {
  const params = useParams();
  const t = useTranslations();
  const { slug } = params;
  const project = projects.find((p) => p.projectSlug === slug);

  const videoFallbackText = t('notFound.videoNotSupported');

  if (!project) return notFound();
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-8 pt-32 text-black dark:text-white">
      <NavbarBackProjects />
      <BackToProjectsButton />
      <div className='md:w-[85%] lg:w-[80%] mx-auto'>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.name}</h1>
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 group">
          {project.video ? (
            <video
              className="w-full h-full" // object-cover
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={project.video} type="video/mp4" />
              <source src={project.video} type="video/webm" />
              <source src={project.video} type="video/ogg" />
              {videoFallbackText}
            </video>
          ) : project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1000px"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              <span className="text-lg">{t('notFound.noMediaAvailable')}</span>
            </div>
          )}

          {/* Lien "voir le projet" avec effet de hover - uniquement pour les images */}
          {project.sourceWeb && project.image && !project.video && (
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <a
                href={project.sourceWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <AiOutlineEye className="w-6 h-6" />
                <span className="font-medium">{t('project.viewProject')}</span>
              </a>
            </div>
          )}
        </div>

        {/* Section Contexte et Compétences */}
        <div className="grid gap-8 mb-8">

          {/* Contexte du projet */}
          <div className="bg-[#f6f6f6] dark:bg-gray-900 p-4 sm:p-5 rounded-xl border border-[#e5e5e5] dark:border-transparent shadow">
            <h2 className="text-2xl font-bold mb-4 text-[--primary-color]">
              {t('project.context.title')}
            </h2>
            <div
              className="text-base leading-relaxed text-black dark:text-gray-300"
              dangerouslySetInnerHTML={{
                __html: formatText(t(`project.context.${project.descriptionKey}`))
              }}
            />
          </div>

          {/* Savoir-faire et compétences */}
          <div className="bg-[#f6f6f6] dark:bg-gray-900 p-4 sm:p-5  rounded-xl border border-[#e5e5e5] dark:border-transparent shadow">
            <h2 className="text-2xl font-bold mb-4 text-[--primary-color]">
              {t('project.skills.title')}
            </h2>
            <div
              className="text-base leading-relaxed text-black dark:text-gray-300"
              dangerouslySetInnerHTML={{
                __html: formatText(t(`project.skills.${project.descriptionKey}`))
              }}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">
          {t('project.techStack.title')}
        </h2>
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
            <div className='flex items-center gap-4'>
              <div
                className="text-[--primary-color]"
              >
                {t('project.viewGithub')}
              </div>
              <a
                href={`${project.sourceGithub}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full dark:bg-[var(--bg-dark)]/70 flex items-center justify-center text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] cursor-pointer"
              >
                <AiFillGithub className="w-9 h-9 hover:text-[--primary-color] hover:font-bold" />
              </a>
            </div>
          )}
          {project.sourceWeb && (
            <div className='flex items-center gap-4'>
              <div
                className=""
              >
                {t('project.viewProjectLink')}
              </div>
              <a
                href={project.sourceWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full dark:bg-[var(--bg-dark)]/70 flex items-center justify-center text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] cursor-pointer"
              >
                <AiFillEye className="w-9 h-9 hover:text-[--primary-color] hover:font-bold" />
              </a>
            </div>
          )}
          {project.learnMore && (
            <div className='flex items-center gap-4'>
              <div
                className=""
              >
                {t('project.learnMore')}
              </div>
              <a
                href={project.learnMore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full dark:bg-[var(--bg-dark)]/70 flex items-center justify-center text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] cursor-pointer"
              >
                <AiFillEye className="w-9 h-9 hover:text-[--primary-color] hover:font-bold" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
