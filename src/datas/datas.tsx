import React from 'react';
// ATTENTION : Ce fichier doit être en .tsx car il contient du JSX dans les objets de catégories.
import Image from 'next/image';
import { Category, DataExperience, ProjectCardProps, Qualities } from '../types/types';
// React-Icon imports
import { BsCheck2Square } from 'react-icons/bs';
import { DiDotnet, DiJavascript } from 'react-icons/di';
import { FaDocker, FaSymfony } from 'react-icons/fa';
import { FaAws, FaBitbucket } from 'react-icons/fa6';
import { FiRefreshCw, FiTarget } from 'react-icons/fi';
import { GrMysql } from 'react-icons/gr';
import { HiLightningBolt, HiOutlineQuestionMarkCircle, HiOutlineUser } from 'react-icons/hi';
import { SiExpress, SiKotlin, SiNodedotjs, SiOvh, SiPostgresql, SiReact, SiSqlite, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';
import { IoAdd } from 'react-icons/io5';
import { HiOutlineEye } from 'react-icons/hi2';

const methods = {
   items: [
      {
         label: 'DevOps',
         icon: (
            <Image src="/assets/icons/devops.svg" alt="DevOps" width={20} height={20} className="inline w-5 h-5" />
         ),
      },
      {
         label: 'Agile',
         icon: (
            <Image src="/assets/icons/agile.svg" alt="Agile" width={20} height={20} className="inline w-5 h-5" />
         ),
      },
      {
         label: 'Scrum',
         icon: (
            <Image src="/assets/icons/scrum.svg" alt="Scrum" width={20} height={20} className="inline w-5 h-5" />
         ),
      },
   ],
};

// Function to generate qualities with translations
const getQualities = (tQualities: (key: string) => string): Qualities => ({
   title: 'Qualités', // This could also be translated if needed
   items: [
      {
         label: tQualities('autonome'),
         icon: <HiOutlineUser size={20} className="inline" />,
      },
      {
         label: tQualities('rigoureux'),
         icon: <BsCheck2Square size={20} className="inline" />,
      },
      {
         label: tQualities('attentive'),
         icon: <HiOutlineEye size={20} className="inline" />,
      },
      {
         label: tQualities('adaptatif'),
         icon: <FiRefreshCw size={20} className="inline" />,
      },
      {
         label: tQualities('goutChallenge'),
         icon: <FiTarget size={20} className="inline" />,
      },
      {
         label: tQualities('curieux'),
         icon: <HiOutlineQuestionMarkCircle size={20} className="inline" />,
      },
   ],
});

const categories: Category[] = [
   {
      titleKey: 'languages',
      items: [
         { icon: <SiTypescript />, label: 'typescript' },
         { icon: <DiJavascript />, label: 'Javascript' },
         {
            icon: (
               <Image
                  src="/assets/skills/java2.svg"
                  alt="Java"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Java',
         },
         { icon: <SiKotlin />, label: 'Kotlin' },
         {
            icon: (
               <Image
                  src="/assets/skills/csharp.svg"
                  alt="C#"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'C#',
         },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                  alt="PHP"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'PHP',
         },
      ],
   },
   {
      titleKey: 'frontend',
      items: [
         {
            icon: (
               <Image
                  src="/assets/skills/nextjs.png"
                  alt="NextJS"
                  width={96}
                  height={96}
                  className="w-16 h-16"
               />
            ),
            label: 'nextjs',
         },
         { icon: <SiReact />, label: 'react' },
         {
            icon: (
               <Image
                  src="/assets/skills/angular.svg"
                  alt="Angular"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Angular',
         },
         { icon: <SiTailwindcss />, label: 'TailwindCSS' },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  alt="ViteJS"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'ViteJS',
         },
         {
            icon: (
               <Image
                  src="/assets/skills/bootstrap.svg"
                  alt="Bootstrap"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Bootstrap',
         },
         {
            icon:
               (
                  <Image
                     src="/assets/skills/material-ui2.svg"
                     alt="Material UI"
                     width={96}
                     height={96}
                     className="w-16 h-16"
                  />
               ),
            label: 'Material UI',
         },
         // {
         //    icon: (
         //       <Image
         //          src="/assets/skills/material-ui.png"
         //          alt="Material UI"
         //          width={48}
         //          height={48}
         //          className="w-16 h-16"
         //       />
         //    ),
         //    label: 'Material UI',
         // },
         // {
         //    icon:
         //       <i className="devicon-bootstrap-plain colored"></i>
         //    ,
         //    label: 'TEST 2'
         // },
         // {
         //    icon:
         //       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" />
         //    ,
         //    label: 'TEST 3'
         // }

      ],
   },
   {
      titleKey: 'backend',
      items: [
         { icon: <SiNodedotjs />, label: 'NodeJS' },
         { icon: <SiExpress />, label: 'Express' },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
                  alt="GraphQL"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'GraphQL',
         },
         { icon: <DiDotnet />, label: '.NET' },
         { icon: <FaSymfony />, label: 'Symfony' },
         { icon: <SiPostgresql />, label: 'postgresql' },
         { icon: <GrMysql />, label: 'MySQL' },
         { icon: <SiSqlite />, label: 'SQLite' },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"
                  alt="Swagger"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Swagger',
         },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                  alt="Postman"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Postman',
         },
      ],
   },
   {
      titleKey: 'tools',
      items: [
         { icon: <FaDocker />, label: 'Docker' },
         { icon: <FaAws />, label: 'AWS' },
         {
            icon: (
               <Image
                  src="/assets/skills/azuredevops.svg"
                  alt="Azure DevOps"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Azure DevOps',
         },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg"
                  alt="Android Studio"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Android Studio',
         },
         {
            icon: (
               <Image
                  src="/assets/skills/firebase.svg"
                  alt="Firebase"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Firebase',
         },
         {
            icon: (
               <Image
                  src="/assets/skills/sharepoint.png"
                  alt="Sharepoint"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Sharepoint',
         },
         { icon: <SiOvh />, label: 'OVH Cloud' },
         {
            icon: (
               <SiVercel />
            ),
            label: 'Vercel',
         },
         {
            icon: (
               <Image
                  src="/assets/skills/github3.png"
                  alt="GitHub"
                  width={48}
                  height={48}
                  className="w-14 h-14"
               />
            ),
            label: 'git & github',
         },
         {
            icon: (
               <Image
                  src="/assets/skills/gitlab.svg"
                  alt="GitLab"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'gitlab',
         },
         { icon: <FaBitbucket />, label: 'Bitbucket' },
         {
            icon: (
               <Image
                  src="/assets/skills/figma.svg"
                  alt="Figma"
                  width={48}
                  height={48}
                  className="w-14 h-14"
               />
            ),
            label: 'figma',
         },
      ],
   },
];


const data_experiences: DataExperience[] = [
   {
      yearKey: 'years.y2025',
      experiencesKey: [
         {
            titleKey: 'experiences.entrepreneurship.title',
            tasksKey: [
               'experiences.entrepreneurship.tasks.t1',
               'experiences.entrepreneurship.tasks.t2',
               'experiences.entrepreneurship.tasks.t3',
               'experiences.entrepreneurship.tasks.t4',
               'experiences.entrepreneurship.tasks.t5',
               'experiences.entrepreneurship.tasks.t6',
            ],
         },
         {
            titleKey: 'experiences.portfolio.title',
            tasksKey: [
               'experiences.portfolio.tasks.t1',
               'experiences.portfolio.tasks.t2',
               'experiences.portfolio.tasks.t3',
               'experiences.portfolio.tasks.t4',
            ],
         },
      ],
      icons: [
         {
            icon: (
               <Image
                  src="/assets/skills/shopify.svg"
                  alt="Shopify"
                  width={64}
                  height={64}
               />
            ),
            label: 'Shopify',
         },
         { icon: <IoAdd className="w-16 h-16" />, label: 'Plus' },
         {
            icon: (
               <Image
                  src="/assets/skills/nextjs.png"
                  alt="NextJS"
                  width={64}
                  height={64}
               />
            ),
            label: 'nextjs',
         },
         { icon: <SiTailwindcss />, label: 'TailwindCSS' },
         { icon: <SiTypescript />, label: 'typescript' },
         { icon: <SiOvh />, label: 'OVH Cloud' },
         { icon: (<SiVercel />), label: 'Vercel', },
         { icon: <FaDocker />, label: 'Docker' },
      ],
   },
   {
      yearKey: 'years.y2023_2024',
      experiencesKey: [
         {
            titleKey: 'experiences.bluesoft.title',
            tasksKey: [
               'experiences.bluesoft.tasks.t1',
               'experiences.bluesoft.tasks.t2',
            ],
         },
         {
            titleKey: 'experiences.wcs_cda.title',
            tasksKey: [
               'experiences.wcs_cda.tasks.t1',
               'experiences.wcs_cda.tasks.t2',
               // 'experiences.wcs_cda.tasks.cta',
            ],
         },
      ],
      icons: [
         {
            icon: (
               <Image
                  src="/assets/skills/angular.svg"
                  alt="Angular"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Angular',
         },
         { icon: <SiTypescript />, label: 'typescript' },
         {
            icon: (
               <Image
                  src="/assets/skills/csharp.svg"
                  alt="C#"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'C#',
         },
         { icon: <DiDotnet />, label: '.NET' },
         { icon: <FaAws />, label: 'AWS' },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"
                  alt="Swagger"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Swagger',
         },
         {
            icon: (
               <Image
                  src="/assets/skills/azuredevops.svg"
                  alt="Azure DevOps"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Azure DevOps',
         },
         { icon: <IoAdd className="w-16 h-16" />, label: 'Plus' },
         {
            icon: (
               <Image
                  src="/assets/skills/nextjs.png"
                  alt="NextJS"
                  width={64}
                  height={64}
                  className="w-25 h-25"
               />
            ),
            label: 'nextjs',
         },
         { icon: <SiReact />, label: 'react' },
         { icon: <SiTailwindcss />, label: 'TailwindCSS' },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
                  alt="GraphQL"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'GraphQL',
         },
         { icon: <SiPostgresql />, label: 'postgresql' },
         { icon: <SiSqlite />, label: 'SQLite' },
      ],
   },
   {
      yearKey: 'years.y2023_stage',
      experiencesKey: [
         {
            titleKey: 'experiences.bluesoft.title',
            tasksKey: [
               'experiences.bluesoft_stage.tasks.t1',
               'experiences.bluesoft_stage.tasks.t2',
            ],
         },
      ],
      icons: [
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg"
                  alt="Android Studio"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Android Studio',
         },
         {
            icon: (
               <Image
                  src="/assets/skills/java2.svg"
                  alt="Java"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Java',
         },
         { icon: <SiKotlin />, label: 'Kotlin' },
         {
            icon: (
               <Image
                  src="/assets/skills/firebase.svg"
                  alt="Firebase"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'Firebase',
         },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg"
                  alt="JIRA"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'JIRA',
         },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                  alt="PHP"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'PHP',
         },
         { icon: <FaSymfony />, label: 'Symfony' },
         { icon: <SiTypescript />, label: 'typescript' },

      ],
   },
   {
      yearKey: 'years.y2022_2023',
      experiencesKey: [
         {
            titleKey: 'experiences.wcs_dwwm.title',
            tasksKey: [
               'experiences.wcs_dwwm.tasks.t1',
               'experiences.wcs_dwwm.tasks.t2',
               // 'experiences.wcs_dwwm.tasks.cta',
            ],
         },
         {
            titleKey: 'experiences.projects_done.title',
            tasksKey: [
               'experiences.projects_done.tasks.t1',
               'experiences.projects_done.tasks.t2',
               'experiences.projects_done.tasks.t3',
            ],
         },
      ],
      icons: [
         { icon: <SiReact />, label: 'react' },
         { icon: <DiJavascript />, label: 'Javascript' },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  alt="ViteJS"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: 'ViteJS',
         },
         { icon: <SiNodedotjs />, label: 'NodeJS' },
         { icon: <SiExpress />, label: 'Express' },
         { icon: <GrMysql />, label: 'MySQL' },
      ],
   },
];

const projects: Omit<ProjectCardProps, 'index'>[] = [
   {
      name: "Ecosystem QVMD",
      descriptionKey: "ecosystemQVMD",
      tags: [
         { name: "ANGULAR", color: "dark:text-[--primary-color]" },
         { name: "TYPESCRIPT", color: "dark:text-[--primary-color]" },
         { name: "C#", color: "dark:text-[--primary-color]" },
         { name: ".NET", color: "dark:text-[--primary-color]" },
         { name: "AWS", color: "dark:text-[--primary-color]" },
         { name: "POSTGRESQL", color: "dark:text-[--primary-color]" },
         { name: "SWAGGER", color: "dark:text-[--primary-color]" },
         { name: "JASMINE", color: "dark:text-[--primary-color]" },
         { name: "XUNIT", color: "dark:text-[--primary-color]" },
         { name: "AZURE DEV OPS", color: "dark:text-[--primary-color]" },
         { name: "DOCKER", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/ecosystem-qvmd.png",
      video: "",
      sourceWeb: "https://www.quiveutmesdechets.fr/",
      sourceGithub: "",
      learnMore: "",
      projectSlug: "ecosystem-qvmd",
   },
   {
      name: "Make Sense",
      descriptionKey: "makeSense",
      tags: [
         { name: "REACTJS", color: "dark:text-[--primary-color]" },
         { name: "VITEJS", color: "dark:text-[--primary-color]" },
         { name: "NODEJS", color: "dark:text-[--primary-color]" },
         { name: "EXPRESS", color: "dark:text-[--primary-color]" },
         { name: "MYSQL", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/makesense2.png",
      video: "",
      sourceWeb: "https://make-sense.davyrobert.fr",
      sourceGithub: "https://github.com/DavyR01/Make_Sense_Project",
      projectSlug: "makesense",
   },
   {
      name: "Wild Rent",
      descriptionKey: "wildRent",
      tags: [
         { name: "NEXTJS", color: "dark:text-[--primary-color]" },
         { name: "TYPESCRIPT", color: "dark:text-[--primary-color]" },
         { name: "TAILWINDCSS", color: "dark:text-[--primary-color]" },
         { name: "GRAPHQL", color: "dark:text-[--primary-color]" },
         { name: "APOLLO", color: "dark:text-[--primary-color]" },
         { name: "JEST", color: "dark:text-[--primary-color]" },
         { name: "PLAYWRIGHT", color: "dark:text-[--primary-color]" },
         { name: "POSTGRESQL", color: "dark:text-[--primary-color]" },
         { name: "SQLITE", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/wildrent.png",
      video: "",
      sourceWeb: "https://wildrent.davyrobert.fr/",
      sourceGithub: "https://github.com/DavyR01/Wild-rent-myRepo",
      projectSlug: "wildrent",
   },
   {
      name: "MyCrit Job",
      descriptionKey: "myCrit",
      tags: [
         { name: "JAVA", color: "dark:text-[--primary-color]" },
         { name: "KOTLIN", color: "dark:text-[--primary-color]" },
         { name: "ANDROID STUDIO", color: "dark:text-[--primary-color]" },
         { name: "FIREBASE", color: "dark:text-[--primary-color]" },
         { name: "SQLITE", color: "dark:text-[--primary-color]" },
         { name: "JIRA", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/crit_job5.png",
      video: "",
      sourceWeb: "",
      projectSlug: "crit-job",
      learnMore: "https://play.google.com/store/apps/details?id=com.critjob.mycrit&hl=fr&pli=1"
   },
   {
      name: "Eurowatt Super7",
      descriptionKey: "eurowatt",
      tags: [
         { name: "PHP", color: "dark:text-[--primary-color]" },
         { name: "SYMFONY", color: "dark:text-[--primary-color]" },
         { name: "AZURE DEV OPS", color: "dark:text-[--primary-color]" },
         { name: "POSTGRESQL", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/super7_interface.png",
      video: "",
      sourceWeb: "",
      projectSlug: "eurowatt-super7",
      learnMore: "https://eurowatt.com/en"
   },
   {
      name: "Virtual Met'Art",
      descriptionKey: "virtuelMetArt",
      tags: [
         { name: "REACTJS", color: "dark:text-[--primary-color]" },
         { name: "VITEJS", color: "dark:text-[--primary-color]" },
         { name: "TAILWINDCSS", color: "dark:text-[--primary-color]" },
         { name: "REST API", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/virtual_met_art.png",
      video: "",
      sourceWeb: "https://virtual-met-art01.davyrobert.fr",
      sourceGithub: "https://github.com/DavyR01/Virtual-MET-ART",
      projectSlug: "virtual-met-art",
   },
   {
      name: "France Trivia",
      descriptionKey: "franceTrivia",
      tags: [
         { name: "JAVASCRIPT", color: "dark:text-[--primary-color]" },
         { name: "HTML", color: "dark:text-[--primary-color]" },
         { name: "CSS", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/france_trivia.png",
      video: "",
      sourceWeb: "https://france-trivia.davyrobert.fr/",
      sourceGithub: "https://github.com/DavyR01/Projet-P1-WCS",
      projectSlug: "france-trivia",
   },
   {
      name: "Blog Project JS",
      descriptionKey: "blogProject",
      tags: [
         { name: "JAVASCRIPT", color: "dark:text-[--primary-color]" },
         { name: "SCSS", color: "dark:text-[--primary-color]" },
         { name: "NODEJS", color: "dark:text-[--primary-color]" },
         { name: "WEBPACK", color: "dark:text-[--primary-color]" },
         { name: "REST API", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/blog_project.png",
      video: "",
      sourceWeb: "https://my-blog-project.davyrobert.fr/",
      sourceGithub: "https://github.com/DavyR01/Javascript_Blog_Project/tree/main",
      projectSlug: "blog-project-js",
   },
   {
      name: "Louis Vuitton",
      descriptionKey: "louisVuitton",
      tags: [
         { name: "REACT JS", color: "dark:text-[--primary-color]" },
         { name: "SHAREPOINT", color: "dark:text-[--primary-color]" },
         { name: "WEBPPACK", color: "dark:text-[--primary-color]" },
         { name: "NODEJS", color: "dark:text-[--primary-color]" },
         { name: "JEST", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/vuitton2.png",
      video: "",
      sourceWeb: "",
      projectSlug: "louisvuitton",
      learnMore: "https://fr.louisvuitton.com/fra-fr/homepage"
   },
];

export { categories, data_experiences, getQualities, methods, projects };

