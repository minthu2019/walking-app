import GetForLearn from '@/components/GetForLearn'
import React from 'react'

const Learn = () => {
  return (
    <div className=' flex items-center justify-center flex-col mt-4'>
      <h1 className=" text-xl mb-2 font-bold shadow-lg shadow-amber-200 rounded-sm px-2"> LEARN PAGE</h1>
      <p className="mb-2">Get Image from api.pexels.com</p>
      <GetForLearn/>
    </div>
  )
}

export default Learn
