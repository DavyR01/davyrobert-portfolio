import React from "react";
import { DiJavascript, DiDotnet } from "react-icons/di";
import { FaAws, FaDocker, FaSymfony } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
   SiExpress,
   SiKotlin,
   SiNodedotjs,
   SiPostgresql,
   SiReact,
   SiTailwindcss,
   SiTypescript,
   SiVercel,
   SiOvh,
} from "react-icons/si";
import Image from "next/image";

export type SkillItem = {
   label: string;
   icon?: React.ReactNode;
};

export type SkillCategory = {
   titleKey: "languages" | "frontend" | "backend" | "tools";
   featured: SkillItem[];
   secondary: SkillItem[];
};

export const categories: SkillCategory[] = [
   {
      titleKey: "languages",
      featured: [
         { icon: <SiTypescript />, label: "TypeScript" },
         { icon: <DiJavascript />, label: "JavaScript" },
      ],
      secondary: [
         {
            icon: (
               <Image
                  src="/assets/skills/java2.svg"
                  alt="Java"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Java",
         },
         { icon: <SiKotlin />, label: "Kotlin" },
         {
            icon: (
               <Image
                  src="/assets/skills/csharp.svg"
                  alt="C#"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "C#",
         },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                  alt="PHP"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "PHP",
         },
      ],
   },

   {
      titleKey: "frontend",
      featured: [
         {
            icon: (
               <Image
                  src="/assets/skills/nextjs.png"
                  alt="Next.js"
                  width={64}
                  height={64}
                  className="w-16 h-16"
               />
            ),
            label: "Next.js",
         },
         { icon: <SiReact />, label: "React" },
         { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      ],
      secondary: [
         {
            icon: (
               <Image
                  src="/assets/skills/angular.svg"
                  alt="Angular"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Angular",
         },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  alt="Vite"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Vite",
         },
         {
            icon: (
               <Image
                  src="/assets/skills/material-ui2.svg"
                  alt="Material UI"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Material UI",
         },
         {
            icon: (
               <Image
                  src="/assets/skills/bootstrap.svg"
                  alt="Bootstrap"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Bootstrap",
         },
      ],
   },

   {
      titleKey: "backend",
      featured: [
         { icon: <SiNodedotjs />, label: "Node.js" },
         { icon: <SiExpress />, label: "Express" },
         { icon: <SiPostgresql />, label: "PostgreSQL" },
      ],
      secondary: [
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
                  alt="GraphQL"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "GraphQL",
         },
         { icon: <GrMysql />, label: "MySQL" },
         { icon: <FaSymfony />, label: "Symfony" },
         { icon: <DiDotnet />, label: ".NET" },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"
                  alt="Swagger"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Swagger",
         },
         {
            icon: (
               <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                  alt="Postman"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Postman",
         },
      ],
   },

   {
      titleKey: "tools",
      featured: [
         { icon: <FaDocker />, label: "Docker" },
         {
            icon: (
               <Image
                  src="/assets/skills/github3.png"
                  alt="Git / GitHub"
                  width={64}
                  height={64}
                  className="w-14 h-14"
               />
            ),
            label: "Git / GitHub",
         },
      ],
      secondary: [
         { icon: <FaAws />, label: "AWS" },
         { icon: <SiVercel />, label: "Vercel" },
         { icon: <SiOvh />, label: "OVH Cloud" },
         {
            icon: (
               <Image
                  src="/assets/skills/azuredevops.svg"
                  alt="Azure DevOps"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Azure DevOps",
         },
         {
            icon: (
               <Image
                  src="/assets/skills/firebase.svg"
                  alt="Firebase"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Firebase",
         },
         {
            icon: (
               <Image
                  src="/assets/skills/figma.svg"
                  alt="Figma"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Figma",
         },

         { label: "GitLab" },
         { label: "Bitbucket" },
         { label: "SharePoint" },
         { label: "Android Studio" },
         { label: "SQLite" },
      ],
   },
];
