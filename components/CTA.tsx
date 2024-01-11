"use client";

import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "@/variants";
import { Button } from "@/components/ui/button";

type Props = {};

export default function CTA({}: Props) {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-24 bg-tertiary dark:bg-secondary/40"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="h2 max-w-xl text-center mb-8"
          >
            Prepared to turn your ideas into reality? I'm here to help
          </motion.h2>
          {/* <Link href={"/contact"}>
            <Button>Contact me</Button>
          </Link> */}
        </div>
      </div>
    </motion.div>
  );
}
