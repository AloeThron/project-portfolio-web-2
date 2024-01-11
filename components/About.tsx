"use client";

import React from "react";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Skills from "./Skills";
import { infoData, educationData, experinceData } from "../app/data/about";
import { fadeIn } from "@/variants";

type Props = {};

export default function About({}: Props) {
  return (
    <section id="aboutme" className="xl:h-[860px] pb-12 xl:py-24 mb-24">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="section-title mb-8 xl:mb-16 text-center mx-auto"
        >
          About me
        </motion.h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="hidden xl:flex flex-1 relative items-center"
          >
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </motion.div>
          {/* tabs */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1"
          >
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
                  <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center xl:text-left"
                  >
                    <h3 className="h3 mb-4">My Name is Patyos Rewmoolngam</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    A self-motivated and self-improvement present with a passion in Web Development, Machine Learning and Design. Now seeking to join in tech company as a web developer to driving products to bridge the gap between people and technology. Brings analytical thinking, collaboration, and communication skills.
                    </p>
                    {/* icons */}
                    <motion.div
                      variants={fadeIn("left", 0.4)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.2 }}
                      className="grid xl:grid-cols-2 gap-4 mb-12"
                    >
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
                    </motion.div>
                  </motion.div>
                </TabsContent>
                {/* qualications */}
                <TabsContent value="qualifications">
                  <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <motion.div
                      variants={fadeIn("left", 0.4)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.2 }}
                      className="grid md:grid-cols-2 gap-y-8 justify-center"
                    >
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
                    </motion.div>
                  </motion.div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center xl:text-left"
                  >
                    <h3 className="h3 mb-8">Tools That I Use</h3>
                    {/* skill list */}
                    <Skills />
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
