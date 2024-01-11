"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"; // swiper react component
import { Pagination } from "swiper/modules"; // swiper modules
import "swiper/css"; // swiper styles
import "swiper/css/pagination"; // swiper styles

import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard"; // swiper component
import { projectData } from "../app/data/projects";
import { fadeIn } from "@/variants";

type Props = {};

export default function Work({}: Props) {
  return (
    <section className="relative mb-24 xl:mb-60">
      <div className="container mx-auto relative h-full">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <motion.h2
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="section-title mb-4"
          >
            Latest Projects
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="subtitle mb-8"
          >
            These are just a handful of my projects.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <Link href={"/projects"}>
              <Button>All Project</Button>
            </Link>
          </motion.div>
        </div>
        {/* slider */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="right-0 top-0 py-2 h-full xl:max-w-[1000px] xl:absolute"
        >
          <Swiper
            className="h-[580px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show first 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
