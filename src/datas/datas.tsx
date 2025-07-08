import React from 'react';
// ATTENTION : Ce fichier doit être en .tsx car il contient du JSX dans les objets de catégories.
import { Category, DataExperience, ProjectCardProps } from '../types/types';
import Image from 'next/image';
// React-Icon imports
import { SiTypescript, SiTailwindcss, SiReact, SiPostgresql, SiVercel, SiNodedotjs, SiKotlin, SiSqlite, SiOvh } from 'react-icons/si';
import { DiJavascript, DiDotnet } from 'react-icons/di';
import { FaDocker } from 'react-icons/fa';
import { FaAws, FaBitbucket } from 'react-icons/fa6';
import { GrMysql } from 'react-icons/gr';

const projects: Omit<ProjectCardProps, 'index'>[] = [
   {
      name: "Ecosystem QVMD",
      description: "Lorem ip",
      tags: [
         { name: "Angular", color: "dark:text-[--primary-color]" },
         { name: "Typescript", color: "dark:text-[--primary-color]" },
         { name: "C#", color: "dark:text-[--primary-color]" },
         { name: ".NET", color: "dark:text-[--primary-color]" },
         { name: "AWS", color: "dark:text-[--primary-color]" },
         { name: "Docker", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/ecosystem-qvmd.png",
      sourceWeb: "https://www.quiveutmesdechets.fr/",
      projectSlug: "ecosystem-qvmd",
   },
   {
      name: "Make Sense",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "tag1", color: "dark:text-[--primary-color]" },
         { name: "tag2", color: "dark:text-[--primary-color]" },
         { name: "tag3", color: "dark:text-[--primary-color]" },
         { name: "tag1", color: "dark:text-[--primary-color]" },
         { name: "tag2", color: "dark:text-[--primary-color]" },
         { name: "tag3", color: "dark:text-[--primary-color]" },
         { name: "tag1", color: "dark:text-[--primary-color]" },
         { name: "tag2", color: "dark:text-[--primary-color]" },
         { name: "tag3", color: "dark:text-[--primary-color]" },
         { name: "tag1", color: "dark:text-[--primary-color]" },
         { name: "tag2", color: "dark:text-[--primary-color]" },
         { name: "tag3", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/makesense2.png",
      sourceWeb: "https://make-sense.davyrobert.fr",
      sourceGithub: "https://github.com/DavyR01/Make_Sense_Project",
      projectSlug: "makesense",
   },
   {
      name: "Wild Rent",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "tag1", color: "dark:text-[--primary-color]" },
         { name: "tag2", color: "dark:text-[--primary-color]" },
         { name: "tag3", color: "dark:text-[--primary-color]" },
         { name: "tag3", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/wildrent.png",
      sourceWeb: "https://wildrent.davyrobert.fr/",
      sourceGithub: "https://github.com/DavyR01/Wild-rent-myRepo",
      projectSlug: "wildrent",
   },
   {
      name: "MyCrit Job",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      tags: [
         { name: "tag1", color: "dark:text-[--primary-color]" },
         { name: "tag2", color: "dark:text-[--primary-color]" },
         { name: "tag3", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/crit_job5.png",
      sourceWeb: "https://play.google.com/store/apps/details?id=com.critjob.mycrit&hl=fr&pli=1",
      projectSlug: "crit-job",
   },
   {
      name: "Eurowatt Super7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      tags: [
         { name: "PHP", color: "dark:text-[--primary-color]" },
         { name: "tag2", color: "dark:text-[--primary-color]" },
         { name: "tag3", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/super7_interface.png",
      sourceWeb: "https://eurowatt.com/en",
      projectSlug: "eurowatt-super7",
   },
   {
      name: "Virtual Met'Art",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "tag1", color: "dark:text-[--primary-color]" },
         { name: "tag2", color: "dark:text-[--primary-color]" },
         { name: "tag3", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/virtual_met_art.png",
      sourceWeb: "https://virtual-met-art01.davyrobert.fr",
      sourceGithub: "https://github.com/DavyR01/Virtual-MET-ART",
      projectSlug: "virtual-met-art",
   },
   {
      name: "France Trivia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "tag1", color: "dark:text-[--primary-color]" },
         { name: "tag2", color: "dark:text-[--primary-color]" },
         { name: "tag3", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/france_trivia.png",
      sourceWeb: "https://quiz-france-trivia.davyrobert.fr/",
      sourceGithub: "https://github.com/DavyR01/Projet-P1-WCS",
      projectSlug: "france-trivia",
   },
   {
      name: "Blog Project JS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "tag1", color: "dark:text-[--primary-color]" },
         { name: "tag2", color: "dark:text-[--primary-color]" },
         { name: "tag3", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/blog_project.png",
      sourceWeb: "https://my-blog-project.davyrobert.fr/",
      sourceGithub: "https://github.com/DavyR01/Javascript_Blog_Project/tree/main",
      projectSlug: "blog-project-js",
   },
   {
      name: "Louis Vuitton",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "React JS", color: "dark:text-[--primary-color]" },
         { name: "Sharepoint", color: "dark:text-[--primary-color]" },
      ],
      image: "/projects/vuitton2.png",
      sourceWeb: "https://fr.louisvuitton.com/fra-fr/homepage",
      projectSlug: "louisvuitton",
   },
];

const data_experiences: DataExperience[] = [
  {
    year: 'XX/XX - XX/XX',
    experiences: [
      {
        title: 'xxxxx',
        tasks: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit'],
      },
      {
        title: 'xxxxx',
        tasks: [
          'Sed do eiusmod tempor incididunt eiusmod tempor incididunt incididunt eiusmod tempor incididunt',
          'Sed do eiusmod tempor incididunt',
        ],
      },
      {
        title: 'xxxxx',
        tasks: ['Ex task'],
      },
    ],
    icons: ['file.svg', 'file.svg', 'file.svg'],
  },
  {
    year: 'XXXX',
    experiences: [
      {
        title: 'xxxxx',
        tasks: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit'],
      },
      {
        title: 'xxxxx',
        tasks: [
          'Sed do eiusmod tempor incididunt',
          'Sed do eiusmod tempor incididunt eiusmod tempor incididunt',
        ],
      },
      {
        title: 'xxxxx',
        tasks: ['Ex task'],
      },
    ],
    icons: ['globe.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'globe.svg'],
  },
  {
    year: 'XXXX',
    experiences: [
      {
        title: 'xxxxx',
        tasks: [
          'Lorem ipsum dolor sit asum dolor sit amet',
          'Consectetur adipiscing elit',
        ],
      },
    ],
    icons: ['file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg', 'file.svg'],
  },
];

const categories: Category[] = [
  {
    title: 'Langages',
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
    ],
  },
  {
    title: 'Frontend',
    items: [
      {
        icon: (
          <Image
            src="/assets/skills/nextjs.png"
            alt="NextJS"
            width={48}
            height={48}
            className="w-16 h-16"
          />
        ),
        label: 'nextjs',
      },
      { icon: <SiReact />, label: 'react' },
      { icon: <SiTailwindcss />, label: 'TailwindCSS' },
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
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: <SiNodedotjs />, label: 'NodeJS' },
      { icon: <DiDotnet />, label: '.NET' },
      { icon: <SiPostgresql />, label: 'postgresql' },
      { icon: <GrMysql />, label: 'MySQL' },
      { icon: <SiSqlite />, label: 'SQLite' },
    ],
  },
  {
    title: 'Outils',
    items: [
      { icon: <FaDocker />, label: 'Docker' },
      { icon: <FaAws />, label: 'AWS' },
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

export { data_experiences, projects, categories }; 