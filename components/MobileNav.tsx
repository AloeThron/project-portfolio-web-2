import React from "react";

import { AlignJustify } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

type Props = {};

export default function MobileNav({}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetClose asChild>
          <div className="flex flex-col items-center justify-between h-full py-8">
            <div className="flex flex-col items-center gap-y-32">
              <Logo />
              <Nav
                containerStyles="flex flex-col items-center gap-y-6"
                linkStyles="text-2xl"
              />
            </div>
            <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
