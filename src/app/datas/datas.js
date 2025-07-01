
const projects = [
   {
      name: "Ecosystem QVMD",
      description: "Lorem ip",
      tags: [
         { name: "Angular", color: "text-[#5ce1e6]" },
         { name: "Typescript", color: "text-[#5ce1e6]" },
         { name: "C#", color: "text-[#5ce1e6]" },
         { name: ".NET", color: "text-[#5ce1e6]" },
         { name: "AWS", color: "text-[#5ce1e6]" },
         { name: "Docker", color: "text-[#5ce1e6]" },
      ],
      image: "/projects/ecosystem-qvmmd.png",
      sourceWeb: "https://www.quiveutmesdechets.fr/",
   },
   {
      name: "Make Sense",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "tag1", color: "text-[#5ce1e6]" },
         { name: "tag2", color: "text-[#5ce1e6]" },
         { name: "tag3", color: "text-[#5ce1e6]" },
         { name: "tag1", color: "text-[#5ce1e6]" },
         { name: "tag2", color: "text-[#5ce1e6]" },
         { name: "tag3", color: "text-[#5ce1e6]" },
         { name: "tag1", color: "text-[#5ce1e6]" },
         { name: "tag2", color: "text-[#5ce1e6]" },
         { name: "tag3", color: "text-[#5ce1e6]" },
         { name: "tag1", color: "text-[#5ce1e6]" },
         { name: "tag2", color: "text-[#5ce1e6]" },
         { name: "tag3", color: "text-[#5ce1e6]" },
      ],
      image: "/projects/makesense2.png",
      sourceWeb: "https://make-sense.davyrobert.fr",
      sourceGithub: "https://github.com/DavyR01/Make_Sense_Project",
   },
   {
      name: "Wild Rent",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "tag1", color: "text-[#5ce1e6]" },
         { name: "tag2", color: "text-[#5ce1e6]" },
         { name: "tag3", color: "text-[#5ce1e6]" },
         { name: "tag3", color: "text-[#5ce1e6]" },
         // { name: "tag3", color: "text-[#5ce1e6]" },
         // { name: "tag3", color: "text-[#5ce1e6]" },
         // { name: "tag3", color: "text-[#5ce1e6]" },
      ],
      image: "/projects/wildrent.png",
      sourceWeb: "https://wildrent.davyrobert.fr/",
      sourceGithub: "https://github.com/DavyR01/Wild-rent-myRepo",
   },
   {
      name: "MyCrit Job",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      tags: [
         { name: "tag1", color: "text-[#5ce1e6]" },
         { name: "tag2", color: "text-[#5ce1e6]" },
         { name: "tag3", color: "text-[#5ce1e6]" },
      ],
      image: "/projects/crit_job5.png",
      sourceWeb: "https://play.google.com/store/apps/details?id=com.critjob.mycrit&hl=fr&pli=1",
   },
   {
      name: "Eurowatt Super7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      tags: [
         { name: "PHP", color: "text-[#5ce1e6]" },
         { name: "tag2", color: "text-[#5ce1e6]" },
         { name: "tag3", color: "text-[#5ce1e6]" },
      ],
      image: "/projects/super7_interface.png",
      sourceWeb: "https://eurowatt.com/en",
   },
   {
      name: "Virtual Met'Art",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "tag1", color: "text-[#5ce1e6]" },
         { name: "tag2", color: "text-[#5ce1e6]" },
         { name: "tag3", color: "text-[#5ce1e6]" },
      ],
      image: "/projects/virtual_met_art.png",
      sourceWeb: "https://virtual-met-art01.davyrobert.fr",
      sourceGithub: "https://github.com/DavyR01/Virtual-MET-ART",
   },
   {
      name: "France Trivia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "tag1", color: "text-[#5ce1e6]" },
         { name: "tag2", color: "text-[#5ce1e6]" },
         { name: "tag3", color: "text-[#5ce1e6]" },
      ],
      image: "/projects/france_trivia.png",
      sourceWeb: "https://quiz-france-trivia.davyrobert.fr/",
      sourceGithub: "https://github.com/DavyR01/Projet-P1-WCS",
   },
   {
      name: "Blog Project JS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "tag1", color: "text-[#5ce1e6]" },
         { name: "tag2", color: "text-[#5ce1e6]" },
         { name: "tag3", color: "text-[#5ce1e6]" },
      ],
      image: "/projects/blog_project.png",
      sourceWeb: "https://my-blog-project.davyrobert.fr/",
      sourceGithub: "https://github.com/DavyR01/Javascript_Blog_Project/tree/main",
   },
   {
      name: "Louis Vuitton",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
         { name: "React JS", color: "text-[#5ce1e6]" },
         { name: "Sharepoint", color: "text-[#5ce1e6]" },
      ],
      image: "/projects/vuitton2.png",
      sourceWeb: "https://fr.louisvuitton.com/fra-fr/homepage",
   },
];


const data_experiences = [
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
]


export { data_experiences, projects };

