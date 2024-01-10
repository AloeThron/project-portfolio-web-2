import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Logo({}: Props) {
  return (
    <Link href={"/"}>
        <Image src={"/logo.svg"} width={54} height={54} priority alt="" />
    </Link>
  )
}