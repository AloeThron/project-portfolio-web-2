import React from "react";
import Link from "next/link"; // link nextjs
import { usePathname } from "next/navigation"; // hooks nextjs

import { motion } from "framer-motion"; // framer motion

type Links = {
  path: string;
  name: string;
};

type Props = {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
};

const links: Links[] = [
  { path: "/", name: "home" },
  { path: "/projects", name: "My projects" },
  { path: "/contact", name: "contact" },
];

export default function Nav({
  containerStyles,
  linkStyles,
  underlineStyles,
}: Props) {
  const path = usePathname();
  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
