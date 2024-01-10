import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='bg-secondary pt-10 pb-4'>
      <div className='container mx-auto text-center'>
        {/* copyright */}
        <div className='text-muted-foreground'>Copyright &copy; 2024. All rights reserved.</div>
      </div>
    </div>
  )
}