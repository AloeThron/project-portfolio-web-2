export type ProjectData = {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
  tools: Skill[];
};

type Skill = {
  imgPath: string;
};

export const projectData: ProjectData[] = [
  {
    image: "/work/task-app-copy.png",
    category: "fullstack",
    name: "Task App",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
    tools: [
      {
        imgPath: "/about/nextjs.svg",
      },
      {
        imgPath: "/about/typescript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
      {
        imgPath: "/about/shadcn.svg",
      },
      {
        imgPath: "/about/clerk.svg",
      },
      {
        imgPath: "/about/stripe.svg",
      },
      {
        imgPath: "/about/prisma.png",
      },
      {
        imgPath: "/about/mysql.svg",
      },
    ],
  },
  {
    image: "/work/event-app.png",
    category: "fullstack",
    name: "Event App",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
    tools: [
      {
        imgPath: "/about/nextjs.svg",
      },
      {
        imgPath: "/about/typescript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
      {
        imgPath: "/about/shadcn.svg",
      },
      {
        imgPath: "/about/clerk.svg",
      },
      {
        imgPath: "/about/stripe.svg",
      },
      {
        imgPath: "/about/mongodb.svg",
      },
    ],
  },
  {
    image: "/work/restaurant-web.png",
    category: "frontend",
    name: "Restaurant Web",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
    tools: [
      {
        imgPath: "/about/nextjs.svg",
      },
      {
        imgPath: "/about/typescript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
      {
        imgPath: "/about/shadcn.svg",
      },
      {
        imgPath: "/about/framer-motion.svg",
      },
    ],
  },
  {
    image: "/work/1.png",
    category: "frontend",
    name: "Evolve Website",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
    tools: [
      {
        imgPath: "/about/python.png",
      },
      {
        imgPath: "/about/r.png",
      },
    ],
  },
  {
    image: "/work/3.png",
    category: "workshop",
    name: "Ignite Website",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
    tools: [
      {
        imgPath: "/about/python.png",
      },
      {
        imgPath: "/about/r.png",
      },
    ],
  },
  {
    image: "/work/4.png",
    category: "workshop",
    name: "Envision Website",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
    tools: [
      {
        imgPath: "/about/python.png",
      },
      {
        imgPath: "/about/r.png",
      },
    ],
  },
  {
    image: "/work/1.png",
    category: "workshop",
    name: "Serenity Website",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
    tools: [
      {
        imgPath: "/about/python.png",
      },
      {
        imgPath: "/about/r.png",
      },
    ],
  },
  {
    image: "/work/3.png",
    category: "workshop",
    name: "Nova Website",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
    tools: [
      {
        imgPath: "/about/python.png",
      },
      {
        imgPath: "/about/r.png",
      },
    ],
  },
  {
    image: "/work/2.png",
    category: "workshop",
    name: "Zenith Website",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
    tools: [
      {
        imgPath: "/about/python.png",
      },
      {
        imgPath: "/about/r.png",
      },
    ],
  },
];
