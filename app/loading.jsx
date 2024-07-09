import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className=' flex items-center justify-center'>
      <Image src='spinner.svg' width={100} height={100}  alt='loading...'/>
    </div>
  )
}

export default loading
