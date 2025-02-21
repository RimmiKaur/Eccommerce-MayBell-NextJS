import Link from 'next/link'
import React from 'react'
import LeftSideFilter from '../Components/LeftSideFilter'
import RightSideBar from '../Components/RightSideBar'

export default function page() {
  return (
    <>
    <section
        class="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
      >
        <LeftSideFilter/>

        <RightSideBar/>
      </section>
    </>
  )
}
