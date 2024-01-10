"use Client";

import React from "react";

import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap,
  Briefcase,
} from "lucide-react";
import {
  infoData,
  educationData,
  experinceData,
  skillData,
} from "../app/data/about";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Velit, quis, doloribus officia consequuntur cupiditate
                      laborum nisi quos neque minus voluptate, nesciunt nemo ut
                      dolore eos repudiandae placeat culpa ipsum veniam.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, French, Spanish, Italian</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8 justify-center">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6 items-center xl:items-start">
                        <div className="flex gap-x-4 items-center text-[22px]">
                          <Briefcase />
                          <h4 className="capitalize font-medium">Experience</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {experinceData.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div key={index} className="flex gap-x-8 group">
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6 items-center xl:items-start">
                        <div className="flex gap-x-4 items-center text-[22px]">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">Education</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {educationData.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div key={index} className="flex gap-x-8 group">
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                    {/* skill list */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {skillData.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                            >
                              <div className="font-medium">{item.name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {/* {getData<ToolData>(toolData, "Tools")?.data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                priority
                                alt=""
                              />
                            );
                          }
                        )} */}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
