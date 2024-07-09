'use client'
import React from 'react'
import { useEffect,useState } from 'react'

const GetFroAbout = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        const fetchForAbout = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const resdata = await response.json();
            setData(resdata.slice(0,10));
        }
        fetchForAbout();
    },[])

  return (
    <div >
      <div>
        {data.map((data)=>(
            <div key={data.id} className='border m-2'>
                <h1 className=' uppercase p-2 hover:underline text-amber-300 hover:text-amber-500 cursor-pointer'>{data.title}</h1>
                <p className=' first-letter:uppercase p-2'>{data.body}</p>
            </div>
        ))}
      </div>    
    </div>
  )
}

export default GetFroAbout
