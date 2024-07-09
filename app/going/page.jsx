import GetForGoing from '@/components/GetForGoing'
import React from 'react'

const Going = () => {
  return (
    <div className=' flex items-center justify-center mt-4 flex-col'>
       <h1 className=" text-xl mb-2 font-bold shadow-lg shadow-amber-200 rounded-sm px-2"> GOING</h1>
       <p className="mb-2">Get Image from Jsonplaceholder</p>
      <GetForGoing/>
    </div>
  )
}

export default Going
