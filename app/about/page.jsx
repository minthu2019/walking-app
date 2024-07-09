import GetFroAbout from '@/components/GetFroAbout'
import React from 'react'

const About = () => {
  return (
    <div className=' max-w-6xl mx-auto mt-4 '>
      <div className='flex flex-col items-center'>
        <h1 className='w-[89px] text-xl text-center mb-2 font-bold shadow-lg shadow-amber-200 rounded-sm px-2'>ABOUT</h1>
        <h4  className='text-center'>Get Image from Jsonplaceholder</h4>
        <GetFroAbout/>
      </div>
    </div>
  )
}

export default About
