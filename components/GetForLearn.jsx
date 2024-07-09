'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const GetForLearn = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=30', {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
          },
        });
        const data = await res.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error('Failed to fetch images', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div  className='max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3'>
      {photos.map((photo) => (
        <Link href={`learn/${photo.id}`} key={photo.id} className='p-4'>
          <img src={photo.src.medium} alt={photo.alt} className='rounded-lg 
          shadow-xl shadow-amber-300 sm:hover:shadow-amber-500 sm:opacity-50 hover:opacity-100' />
          <p className=' text-sm sm:text-lg mt-1'> Photographer - {photo.photographer}</p>
        </Link>
      ))}
    </div>
  );
};

export default GetForLearn;


