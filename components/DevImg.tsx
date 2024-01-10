import Image from "next/image";
import React from "react";

type Props = {
  containerStyles: string;
  imgSrc: string;
};

export default function DevImg({ containerStyles, imgSrc }: Props) {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
}
