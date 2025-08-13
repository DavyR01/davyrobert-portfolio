import { Methods } from "@/types/index";
import Image from "next/image";

export const methods: Methods = {
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
