import { Category } from "@/types/types"
import { DiJavascript, DiDotnet } from "react-icons/di";
import { FaSymfony, FaDocker, FaAws, FaBitbucket } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTypescript, SiKotlin, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiSqlite, SiOvh, SiVercel } from "react-icons/si";
import Image from "next/image";

export const categories: Category[] = [
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
 