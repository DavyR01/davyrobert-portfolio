import { Qualities } from "@/types/index";
import { BsCheck2Square } from "react-icons/bs";
import { FiRefreshCw, FiTarget } from "react-icons/fi";
import { HiOutlineUser, HiOutlineEye, HiOutlineQuestionMarkCircle } from "react-icons/hi";

// Function to generate qualities with translations
export const getQualities = (tQualities: (key: string) => string): Qualities => ({
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