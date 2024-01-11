"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import { Button } from "@/components/ui/button";
import DevImg from "./DevImg"; // component
import Badge from "./Badge"; // component
import Socials from "./Socials"; // component
import { fadeIn } from "@/variants";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section
      id="hero"
      className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none"
    >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]"
            >
              Web Developer
            </motion.div>
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="h1 mb-4"
            >
              Transforming Idea Into Digital Reality
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="subtitle max-w-[490px] mx-auto xl:mx-0"
            >
              Turning big ideas into tangible digital experiences. Harness
              technology, design, and creative magic to bridge the gap between
              imagination and reality.
            </motion.p>
            {/* buttons */}
            {/* <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"aboutme"}>
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant={"secondary"} className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div> */}
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text text-[22px] hover:text-primary transition-all"
              />
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="hidden xl:flex relative"
          >
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Fullstack Projects"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={2}
              badgeText="Frontend Projects"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={10}
              endCountText=""
              badgeText="Workshops"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/code-svgrepo-com.svg"
            />
          </motion.div>
        </div>
        {/* icon */}
        <motion.div
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce"
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
