import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="flex gap-4 w-full mt-10 bg-white h-35 iteams center ">
     <div className="bg-purple-800 h-40 w-60"></div>
     <div className="bg-green-400 h-40 w-60"></div>
     <div className="bg-pink-500 h-40 w-60"></div>
      </nav>
      <nav className="flex mt-10 bg-white w-full h-95 items down gap-4">
      <div className="bg-orange-500 w-60 h-50 "></div>
      <div className="bg-blue-400 w-60 h-40"></div>

      </nav>
    </div>

  );
}
