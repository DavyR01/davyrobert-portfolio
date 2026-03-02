import { DataExperience } from "@/types/index";
import Image from "next/image";
import { DiDotnet, DiJavascript } from "react-icons/di";
import { FaDocker, FaAws, FaSymfony } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
   SiTailwindcss,
   SiTypescript,
   SiOvh,
   SiVercel,
   SiReact,
   SiPostgresql,
   SiSqlite,
   SiKotlin,
   SiNodedotjs,
   SiExpress,
} from "react-icons/si";

export const data_experiences: DataExperience[] = [
   {
      yearKey: "years.y2025",
      experiencesKey: [
         {
            titleKey: "experiences.entrepreneurship.title",
            tasksKey: [
               "experiences.entrepreneurship.tasks.t1",
               "experiences.entrepreneurship.tasks.t2",
               "experiences.entrepreneurship.tasks.t3",
               "experiences.entrepreneurship.tasks.t4",
            ],
         },
         {
            titleKey: "experiences.portfolio.title",
            tasksKey: [
               "experiences.portfolio.tasks.t1",
               "experiences.portfolio.tasks.t2",
               "experiences.portfolio.tasks.t3",
               "experiences.portfolio.tasks.t4",
            ],
         },
      ],
      icons: [
         {
            icon: <Image src="/assets/skills/nextjs.png" alt="Next.js" width={64} height={64} />,
            label: "Next.js",
         },
         { icon: <SiTailwindcss />, label: "Tailwind CSS" },
         { icon: <SiTypescript />, label: "TypeScript" },
         { icon: <SiOvh />, label: "OVH Cloud" },
         { icon: <SiVercel />, label: "Vercel" },
         { icon: <FaDocker />, label: "Docker" },
      ],
   },

   {
      yearKey: "years.y2023_2024",
      experiencesKey: [
         {
            titleKey: "experiences.bluesoft.title",
            tasksKey: ["experiences.bluesoft.tasks.t1", "experiences.bluesoft.tasks.t2"],
         },
         {
            titleKey: "experiences.wcs_cda.title",
            tasksKey: ["experiences.wcs_cda.tasks.t1", "experiences.wcs_cda.tasks.t2"],
         },
      ],
      icons: [
         {
            icon: <Image src="/assets/skills/angular.svg" alt="Angular" width={48} height={48} className="w-16 h-16" />,
            label: "Angular",
         },
         { icon: <SiTypescript />, label: "TypeScript" },
         {
            icon: <Image src="/assets/skills/csharp.svg" alt="C#" width={48} height={48} className="w-16 h-16" />,
            label: "C#",
         },
         { icon: <DiDotnet />, label: ".NET" },
         { icon: <SiNodedotjs />, label: 'NodeJS' },
         { icon: <FaAws />, label: "AWS" },
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
            label: "Swagger",
         },
         {
            icon: <Image src="/assets/skills/azuredevops.svg" alt="Azure DevOps" width={48} height={48} className="w-16 h-16" />,
            label: "Azure DevOps",
         },
         {
            icon: <Image src="/assets/skills/sharepoint.png" alt="SharePoint" width={48} height={48} className="w-16 h-16" />,
            label: "SharePoint",
         },
         {
            icon: <Image src="/assets/skills/nextjs.png" alt="Next.js" width={64} height={64} className="w-25 h-25" />,
            label: "Next.js",
         },
         { icon: <SiReact />, label: "React" },
         { icon: <SiTailwindcss />, label: "Tailwind CSS" },
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
            label: "GraphQL",
         },
         { icon: <SiPostgresql />, label: "PostgreSQL" },
         { icon: <SiSqlite />, label: "SQLite" },
      ],
   },

   {
      yearKey: "years.y2023_stage",
      experiencesKey: [
         {
            titleKey: "experiences.bluesoft.title",
            tasksKey: ["experiences.bluesoft_stage.tasks.t1", "experiences.bluesoft_stage.tasks.t2"],
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
            label: "Android Studio",
         },
         {
            icon: <Image src="/assets/skills/java2.svg" alt="Java" width={48} height={48} className="w-16 h-16" />,
            label: "Java",
         },
         { icon: <SiKotlin />, label: "Kotlin" },
         {
            icon: <Image src="/assets/skills/firebase.svg" alt="Firebase" width={48} height={48} className="w-16 h-16" />,
            label: "Firebase",
         },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg"
                  alt="Jira"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: "Jira",
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
            label: "PHP",
         },
         { icon: <FaSymfony />, label: "Symfony" },
         { icon: <SiTypescript />, label: "TypeScript" },
      ],
   },

   {
      yearKey: "years.y2022_2023",
      experiencesKey: [
         {
            titleKey: "experiences.wcs_dwwm.title",
            tasksKey: ["experiences.wcs_dwwm.tasks.t1", "experiences.wcs_dwwm.tasks.t2"],
         },
         {
            titleKey: "experiences.projects_done.title",
            tasksKey: [
               "experiences.projects_done.tasks.t1",
               "experiences.projects_done.tasks.t2",
               "experiences.projects_done.tasks.t3",
            ],
         },
      ],
      icons: [
         { icon: <SiReact />, label: "React" },
         { icon: <DiJavascript />, label: "JavaScript" },
         { icon: <SiNodedotjs />, label: 'NodeJS' },
         { icon: <SiExpress />, label: "Express" },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  alt="Vite"
                  width={48}
                  height={48}
                  className="w-16 h-16"
               />
            ),
            label: "Vite",
         },
         { icon: <GrMysql />, label: "MySQL" },
      ],
   },
];
