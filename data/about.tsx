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

export const infoData: InfoData[] = [
  {
    icon: <User2 size={20} />,
    text: "Tong (Nickname)",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+6695-910-4025",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Patyos.work@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "1998",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor's degree",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "BangChak, Babgkok",
  },
];

export const educationData: Education[] = [
  {
    university: "Chulalongkorn University",
    qualification: "Allied Health Sciences",
    years: "2021",
  },
];

export const experinceData: Experience[] = [
  {
    company: "No Experience",
    role: "-",
    years: "-",
  },
];
