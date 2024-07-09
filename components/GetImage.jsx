'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useEffect, useState ,Suspense } from 'react'

const GetImage = () => {

  const [Photos , setPhotos] = useState([]);
  
  useEffect(()=>{

    const fetchImage = async() =>{
       try {
        const res =await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();
        setPhotos(data.slice(0,20));

        console.log(data);

      
    } catch (error) {
      console.error('failed image:',error)
    }
  };
   fetchImage();
   console.log(Photos);

  },[])
 

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div  className=' max-w-6xl mx-auto border '>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
            {Photos.map((photo)=>(
              <Link href={`home/homecardoverview/${photo.id}`} key={photo.id} 
              className='flex items-center cursor-pointer flex-col justify-center mx-2 my-6 p-4 border-2 
              border-transparent rounded-md shadow-lg shadow-amber-200 hover:shadow-amber-500'>
                <Image src={photo.thumbnailUrl} alt={photo.title} width={150} height={150}/>
                <h2>{photo.title}</h2>
              </Link>
            ))}
        </div>
          
      </div>
    </Suspense>
  )
}

export default GetImage

