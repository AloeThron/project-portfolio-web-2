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
    description: "Helps your team to move work forward.",
    link: "https://project-task-app-two.vercel.app/",
    github: "https://github.com/AloeThron/project-task-app",
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
    description: "Host, Connect, Celebrate: Your Events, Our Platform!",
    link: "https://project-event-app.vercel.app/",
    github: "https://github.com/AloeThron/project-event-app",
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
    image: "/work/ecommerce-app.png",
    category: "fullstack",
    name: "Ecommerce App",
    description: "Top Fashion for a top price!",
    link: "https://project-ecommerce-web-pi.vercel.app/",
    github: "https://github.com/AloeThron/project-ecommerce-web",
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
        imgPath: "/about/sanity.png",
      },
      {
        imgPath: "/about/stripe.svg",
      },
    ],
  },
  {
    image: "/work/restaurant-web.png",
    category: "frontend",
    name: "Restaurant Web",
    description: "A taste of local flavours.",
    link: "https://project-restaurant-web-2.vercel.app/",
    github: "https://github.com/AloeThron/project-restaurant-web-2",
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
    image: "/work/hotel.png",
    category: "frontend",
    name: "Hotel Web",
    description: "Book an awesome room in less than 1 minute.",
    link: "https://project-hotel-web-1.vercel.app/",
    github: "https://github.com/AloeThron/project-hotel-web-1",
    tools: [
      {
        imgPath: "/about/nextjs.svg",
      },
      {
        imgPath: "/about/javascript.png",
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
    image: "/work/anime-vault.png",
    category: "workshop",
    name: "Anime Vault",
    description: "Motion and Infinite scroll.",
    link: "https://workshop-anime-vault.vercel.app/",
    github: "https://github.com/AloeThron/workshop-anime-vault",
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
        imgPath: "/about/framer-motion.svg",
      },
    ],
  },
  {
    image: "/work/social-dashboard.png",
    category: "workshop",
    name: "Social Media Dashboard",
    description: "Social Media Dashboard and Light/Dark Mode.",
    link: "https://workshop-social-dashboard.vercel.app/",
    github: "https://github.com/AloeThron/workshop-social-dashboard",
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
    ],
  },
  {
    image: "/work/tv-show.png",
    category: "workshop",
    name: "TV Shows",
    description: "TV Shows, Search filter.",
    link: "https://workshop-tv-show-app.vercel.app/",
    github: "https://github.com/AloeThron/workshop-tv-show-app",
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
    ],
  },
  {
    image: "/work/payment-manage.png",
    category: "workshop",
    name: "Payment Management",
    description: "Typescript check.",
    link: "https://workshop-payment-management.vercel.app/",
    github: "https://github.com/AloeThron/workshop-payment-management",
    tools: [
      {
        imgPath: "/about/nextjs.svg",
      },
      {
        imgPath: "/about/typescript.png",
      },
      {
        imgPath: "/about/css3.png",
      },
    ],
  },
  {
    image: "/work/dynamic-dropdown.png",
    category: "workshop",
    name: "Dydamic Dropdown",
    description: "Dydamic Dropdown and Filter.",
    link: "https://workshop-dynamic-dropdown.vercel.app/",
    github: "https://github.com/AloeThron/workshop-dynamic-dropdown",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
  {
    image: "/work/shopping-cart.png",
    category: "workshop",
    name: "Shopping Cart",
    description: "Edit Cart Items.",
    link: "https://workshop-shopping-cart.vercel.app/",
    github: "https://github.com/AloeThron/workshop-shopping-cart",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
  {
    image: "/work/currency-converter.png",
    category: "workshop",
    name: "Currency Converter",
    description: "Currency Converter.",
    link: "https://workshop-currency-converter.vercel.app/",
    github: "https://github.com/AloeThron/workshop-currency-converter",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
  {
    image: "/work/quiz-app.png",
    category: "workshop",
    name: "Quiz Application",
    description: "Exam test and total score.",
    link: "https://workshop-quiz-app.vercel.app/",
    github: "https://github.com/AloeThron/workshop-quiz-app",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
  {
    image: "/work/form-validation.png",
    category: "workshop",
    name: "Form Validation",
    description: "Form login validation.",
    link: "https://workshop-form-validation.vercel.app/",
    github: "https://github.com/AloeThron/workshop-form-validation",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
  {
    image: "/work/stopwatch.png",
    category: "workshop",
    name: "Stopwatch",
    description: "Stopwatch and reset.",
    link: "https://workshop-stopwatch.vercel.app/",
    github: "https://github.com/AloeThron/workshop-stopwatch",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
  {
    image: "/work/bmi-cal.png",
    category: "workshop",
    name: "Quiz Application",
    description: "Exam test and total score.",
    link: "https://workshop-bmi-calculator.vercel.app/",
    github: "https://github.com/AloeThron/workshop-bmi-calculator",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
  {
    image: "/work/countries-search.png",
    category: "workshop",
    name: "Countries App",
    description: "Countries Search Filter.",
    link: "https://workshop-countries-search-filter.vercel.app/",
    github: "https://github.com/AloeThron/workshop-countries-search-filter",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
  {
    image: "/work/ran-noti.png",
    category: "workshop",
    name: "Toast Notification",
    description: "Random Notification.",
    link: "https://workshop-random-notification.vercel.app/",
    github: "https://github.com/AloeThron/workshop-random-notification",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
  {
    image: "/work/temp-convert.png",
    category: "workshop",
    name: "Temperature Converter",
    description: "Temperature Converter in Celcius, Farenheit and Kelvin.",
    link: "https://workshop-temperature-converter.vercel.app/",
    github: "https://github.com/AloeThron/workshop-temperature-converter",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
  {
    image: "/work/pagination.png",
    category: "workshop",
    name: "Random Images Pagination",
    description: "Random Images Pagination.",
    link: "https://workshop-random-image.vercel.app/",
    github: "https://github.com/AloeThron/workshop-random-image",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
  {
    image: "/work/sound-board.png",
    category: "workshop",
    name: "Media Player",
    description: "Media player play pause replay.",
    link: "https://workshop-sound-board.vercel.app/",
    github: "https://github.com/AloeThron/workshop-sound-board",
    tools: [
      {
        imgPath: "/about/vite.png",
      },
      {
        imgPath: "/about/javascript.png",
      },
      {
        imgPath: "/about/tailwindcss.svg",
      },
    ],
  },
];
