"use client";

import Image from "next/image";
import React from "react";

type Props = {};

type Skill = {
  imgPath: string;
};

const skillData: Skill[] = [
  {
    imgPath: "/about/python.png",
  },
  {
    imgPath: "/about/r.png",
  },
  {
    imgPath: "/about/git.svg",
  },
  {
    imgPath: "/about/html-5.png",
  },
  {
    imgPath: "/about/css3.png",
  },
  {
    imgPath: "/about/javascript.png",
  },
  {
    imgPath: "/about/typescript.png",
  },
  {
    imgPath: "/about/react.png",
  },
  {
    imgPath: "/about/tailwindcss.svg",
  },
  {
    imgPath: "/about/redux.png",
  },
  {
    imgPath: "/about/vite.png",
  },
  {
    imgPath: "/about/nextjs.svg",
  },
  {
    imgPath: "/about/node-js-48.png",
  },
  {
    imgPath: "/about/express-js.png",
  },
  {
    imgPath: "/about/mongoose.svg",
  },
  {
    imgPath: "/about/mysql.png",
  },
  {
    imgPath: "/about/mongodb.svg",
  },
  {
    imgPath: "/about/figma.png",
  },
];

const skillSoon: Skill[] = [
  {
    imgPath: "/about/golang.svg",
  },
  {
    imgPath: "/about/docker.png",
  },
  {
    imgPath: "/about/graphql.png",
  },
  {
    imgPath: "/about/vuejs.png",
  },
  {
    imgPath: "/about/pytorch.png",
  },
  {
    imgPath: "/about/tensorflow.svg",
  },
  {
    imgPath: "/about/webrtc.png",
  },
  {
    imgPath: "/about/d3.png",
  },
];

export default function Skills({}: Props) {
  return (
    <div>
      {/* skills */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-2">Skills</h4>
        <div className="border-b border-border mb-4"></div>
        <div className="flex gap-8 justify-center xl:justify-start flex-wrap">
          {skillData.map((item, index) => {
            const { imgPath } = item;
            return (
              <Image src={imgPath} width={48} height={48} priority alt="" />
            );
          })}
        </div>
      </div>
      {/* soon */}
      <div>
        <h4 className="text-xl font-semibold mb-2">Soon..</h4>
        <div className="border-b border-border mb-4"></div>
        {/* tool list */}
        <div className="flex gap-8 justify-center xl:justify-start">
          {skillSoon.map((item, index) => {
            const { imgPath } = item;
            return (
              <Image src={imgPath} width={48} height={48} priority alt="" />
            );
          })}
        </div>
      </div>
    </div>
  );
}
