import React from "react";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";

export type InfoData = {
  icon: any;
  text: string;
};

export type Education = {
  university: string;
  qualification: string;
  years: string;
};

export type Experience = {
  company: string;
  role: string;
  years: string;
};

export type SkillData = {
  name: string;
};

export type ToolData = {
  imgPath: string;
};

export const infoData: InfoData[] = [
  {
    icon: <User2 size={20} />,
    text: "Ryan Davis",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+012 345 6789",
  },
  {
    icon: <MailIcon size={20} />,
    text: "+012 345 6789",
  },
  {
    icon: <Calendar size={20} />,
    text: "1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "MS Sci",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "321, US",
  },
];

export const educationData: Education[] = [
  {
    university: "Ex Univesity",
    qualification: "BH Sci",
    years: "2020",
  },
  {
    university: "Ex Univesity",
    qualification: "BH Sci",
    years: "2020",
  },
  {
    university: "Ex Univesity",
    qualification: "BH Sci",
    years: "2020",
  },
];

export const experinceData: Experience[] = [
  {
    company: "Ex Univesity",
    role: "BH Sci",
    years: "2020",
  },
  {
    company: "Ex Univesity",
    role: "BH Sci",
    years: "2020",
  },
  {
    company: "Ex Univesity",
    role: "BH Sci",
    years: "2020",
  },
];

export const skillData: SkillData[] = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "HTML",
  },
  {
    name: "HTML",
  },
];

export const toolData: ToolData[] = [
  {
    imgPath: "/about/vscode.svg",
  },
  {
    imgPath: "/about/figma.svg",
  },
  {
    imgPath: "/about/notion.svg",
  },
  {
    imgPath: "/about/wordpress.svg",
  },
];
