import { GanttChartSquare, Blocks, Gem } from "lucide-react";

export type ServicesData = {
  icon: any;
  title: string;
  description: string;
};

export const servicesData: ServicesData[] = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis maxime harum beatae nobis, tempora commodi qui iusto aliquid.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis maxime harum beatae nobis, tempora commodi qui iusto aliquid.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis maxime harum beatae nobis, tempora commodi qui iusto aliquid.",
  },
];