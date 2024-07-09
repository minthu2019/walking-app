import GetImage from "@/components/GetImage";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" flex items-center mt-4 flex-col " > 
        
        <h1 className=" text-xl mb-2 font-bold shadow-lg shadow-amber-200 rounded-sm px-2"> HOME</h1>
        <p className="mb-2">Get Image from Jsonplaceholder</p>
        <GetImage/>
      </div>
    </main>
  );
}
