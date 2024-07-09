'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const HomeCardOverview = ({ params }) => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const clickCardData = async () => {
      const cardId = params.id;
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${cardId}`);
        const data = await res.json();
        setPhoto(data);
        console.log(data);
      } catch (error) {
        console.error('Fail to fetch image', error);
      }
    };

    clickCardData();
  }, [params.id]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className='max-w-6xl mx-auto min-h-screen mt-10 flex flex-col items-center transition duration-300'>
      <h1 className=' font-bold'>CLICK IMAGE</h1>
      <div key={photo.id} className='flex flex-col sm:flex-row 
      m-4 items-center justify-center gap-20 mt-[-6]'>
        <Image 
          src={photo.thumbnailUrl}
          height={400} 
          width={400} 
          alt={photo.title}
          className='hover:shadow-lg hover:shadow-amber-200 cursor-pointer'
        />
        <div className='w-full sm:w-[50%]'>
          <h1 className='capitalize m-4 font-bold text-2xl hover:text-amber-500 hover:underline cursor-pointer'>
            {photo.title}
          </h1>
          <p className='p-2 hover:text-amber-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure culpa officiis mollitia dolorum quasi ipsam, porro numquam 
            possimus voluptatibus dignissimos fuga consectetur ullam, similique
            tempore. Esse dolorem, sed facere sapiente numquam exercitationem 
            deserunt officiis explicabo eos sunt excepturi. Nihil, accusantium.
          </p>
        </div>
      </div>
      <Link href='/home' className='w-60 h-20 p-4 my-10 border-2 border-amber-200 hover:bg-amber-400 
      rounded-xl shadow-lg shadow-amber-600 flex items-center justify-center'>
        Back to home...
      </Link>
    </div>
  );
}

export default HomeCardOverview;

