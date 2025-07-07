import { notFound } from 'next/navigation';
import { projects } from '@/datas/datas';
import Image from 'next/image';

interface ProjectProps {
   params: {
      slug: string;
   };
}

const ProjectPage = ({ params }: ProjectProps) => {
   const project = projects.find((p) =>
      p.projectSlug === params.slug
   );

   if (!project) return notFound();

   return (
      <section className="max-w-[1200px] mx-auto px-4 py-20 text-black dark:text-white">
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
};

export default ProjectPage;
