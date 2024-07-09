'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Page = ({ params }) => {
  const [photo, setPhoto] = useState(null);
  const imageId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.pexels.com/v1/photos/${imageId}`, {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
          },
        });
        const data = await res.json();
        setPhoto(data);
      } catch (error) {
        console.error('Failed to fetch image', error);
      }
    };

    fetchData();
  }, [imageId]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className='max-w-6xl mx-auto flex flex-col items-center'>
      <div className='grid sm:grid-cols-2 gap-10 items-center justify-center p-1 m-6 
       '>
        <Image
          src={photo.src.medium}
          width={300}
          height={250}
          alt={photo.alt}
          className='shadow-lg shadow-amber-400 rounded-lg'
        />
        <h1 className='ml-10 cursor-pointer hover:text-amber-400'>
          <span>Photographer :</span> {photo.photographer}
        </h1>
      </div>
      <Link
        href='/learn'
        className='w-60 h-20 p-4 my-10 border-2 border-amber-200 hover:bg-amber-400 rounded-xl shadow-lg shadow-amber-600 flex items-center justify-center'
      >
        Back to home...
      </Link>
    </div>
  );
};

export default Page;

