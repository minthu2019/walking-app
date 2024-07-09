
import Link from 'next/link';

export default function Home() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="">
        <div className="bg-white dark:bg-slate-300 shadow-md rounded sm:px-8 px-4 pt-6 pb-8 mb-4 shadow-amber-400">
          <h2 className="mb-6 text-center sm:text-2xl text-xs font-bold dark:text-black">Welcome, My Image Gallery</h2>
          <Link href="/home" className="block text-center sm:text-3xl text-lg font-bold p-2 sm:p-6 bg-transparent border
           rounded-xl cursor-pointer hover:text-amber-500 border-amber-500 mb-4 dark:text-black">
              Get Started
          </Link>
        
        </div>
      </div>
    </div>
  );
}


 