import React from 'react'
import About from './about/page'
import MAButton from '@/config/components/MAButton'
import Link from 'next/link';

const page = () => {
  
  return (
    <>
    <div>Home</div>
    <Link href="/about"><MAButton label='hello world' /></Link>
    <MAButton label='hello world' />
    </>
  )
}

export default page

