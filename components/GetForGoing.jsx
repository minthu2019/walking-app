'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const GetForGoing = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch(`https://api.unsplash.com/photos/?count=22&client_id=m6yNLgR2A4y8Q1pqFXUrHQR-0emh1JvF053-unqALmU`);
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        console.error('Fail to fetch image', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div  className='max-w-6xl mx-auto'>
      <div className='grid grid-cols-2 sm:grid-cols-3'>
        {photos.length > 0 ? (
            photos.map((photo) => (
            <li key={photo.id} className='p-2 flex items-center justify-center'>
                <Image
                src={photo.urls.thumb} // Unsplash API မှာ image URL တွေကို `urls` object ထဲမှာ ထားပေးထားတတ်တယ်
                alt={photo.description || 'Random Image'} // Optional: title or description
                width={250}
                height={250}
                className='rounded-lg'
                />
                 {/* Optional: if description exists */}
            </li>
            ))
        ) : (
            <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default GetForGoing;
