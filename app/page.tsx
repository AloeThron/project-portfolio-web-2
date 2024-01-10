import About from '@/components/About'
import CTA from '@/components/CTA'
import Hero from '@/components/Hero' // component
import Services from '@/components/Services'
import Work from '@/components/Work'

import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Work />
      <CTA />
    </div>
  )
}