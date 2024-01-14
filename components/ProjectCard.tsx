import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Card, CardHeader } from "@/components/ui/card";
import { Github, Link2Icon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ProjectData } from "@/data/projects";

type Props = {
  project: {
    image: string;
    category: string;
    name: string;
    description: string;
    link: string;
    github: string;
    tools: Skill[];
  };
};

type Skill = {
  imgPath: string;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 bg-work_project_bg_light dark:bg-work_project_bg_dark bg-no-repeat overflow-hidden bg-center">
          <Image
            className="absolute bottom-0 shadow-2xl rounded-t-lg"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          {/* btn links */}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              target="_blank"
              className="bg-gray-700 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              target="_blank"
              className="bg-gray-700 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <div className="h-[180px]">
          <h4 className="h4 mb-1">{project.name}</h4>
          <p className="text-muted-foreground text-lg mb-4">
            {project.description}
          </p>
          <div className="flex gap-2 flex-wrap">
            {project.tools.map((item, index) => {
              const { imgPath } = item;
              return (
                <Image
                  src={imgPath}
                  width={32}
                  height={32}
                  priority
                  alt=""
                  key={index}
                  className="h-[32px]"
                />
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}
