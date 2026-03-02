import React from "react";
import { DiJavascript, DiDotnet } from "react-icons/di";
import { FaAws, FaDocker } from "react-icons/fa";
import {
   SiExpress,
   SiKotlin,
   SiNodedotjs,
   SiPostgresql,
   SiReact,
   SiTailwindcss,
   SiTypescript,
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
                  src="/assets/skills/csharp.svg"
                  alt="C#"
                  width={64}
                  height={64}
                  className="w-16 h-16"
               />
            ),
            label: "C#",
         },
         { icon: <SiKotlin />, label: "Kotlin" },
      ],
   },

   {
      titleKey: "frontend",
      featured: [
         { icon: <SiReact />, label: "React" },
         {
            icon: (
               <Image
                  src="/assets/skills/angular.svg"
                  alt="Angular"
                  width={64}
                  height={64}
                  className="w-16 h-16"
               />
            ),
            label: "Angular",
         },
      ],
      secondary: [
         {
            icon: (
               <Image
                  src="/assets/skills/nextjs.png"
                  alt="Next.js"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Next.js",
         },
         { icon: <SiTailwindcss />, label: "Tailwind CSS" },
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
         { icon: <SiNodedotjs />, label: 'NodeJS' },
         { icon: <DiDotnet />, label: ".NET" },
         { icon: <SiPostgresql />, label: "PostgreSQL" },
      ],
      secondary: [
         {
            icon: (
               <Image
                  src="/assets/skills/apirest.png"
                  alt="API REST"
                  width={64}
                  height={64}
                  className="w-14 h-14"
               />
            ),
            label: "REST",
         },
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
         { icon: <SiExpress />, label: "Express" },
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
                  alt="GitHub Actions"
                  width={64}
                  height={64}
                  className="w-14 h-14"
               />
            ),
            label: "GitHub Actions",
         },
         {
            icon: (
               <Image
                  src="/assets/skills/gitlab.svg"
                  alt="Gitlab CI/CD"
                  width={64}
                  height={64}
                  className="w-14 h-14"
               />
            ),
            label: "Gitlab CI/CD",
         },
      ],
      secondary: [
         { icon: <FaAws />, label: "AWS" },
         // { icon: <SiOvh />, label: "OVH Cloud" },
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
                  src="/assets/skills/android.svg"
                  alt="Android Studio"
                  width={24}
                  height={24}
                  className="w-4 h-4"
               />
            ),
            label: "Android Studio",
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
      ],
   },
];
