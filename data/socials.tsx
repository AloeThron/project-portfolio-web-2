import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

export type Icons = {
  path: string;
  name: any;
};

export const icons: Icons[] = [

  {
    path: "https://www.linkedin.com/in/patyos-r/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/AloeThron",
    name: <RiGithubFill />,
  },
];
