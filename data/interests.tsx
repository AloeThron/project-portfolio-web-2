import { GanttChartSquare, Blocks, Gem } from "lucide-react";

export type InterestsData = {
  icon: any;
  title: string;
  description: string;
};

export const interestsData: InterestsData[] = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Web development is the magic behind the websites and web applications you use every day. It's like building digital bridges, connecting ideas and information across the vast landscape of the internet.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Machine Learning",
    description:
      "Imagine this you show a computer a million photos of cats and dogs, and suddenly, it can tell the difference between them without being explicitly programmed! That's the magic of machine learning.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Art & Design",
    description:
      "Art & Design is a vast and captivating realm where imagination takes flight and ideas materialize into tangible beauty. It encompasses a spectrum of disciplines, and timeless elegance.",
  },
];
