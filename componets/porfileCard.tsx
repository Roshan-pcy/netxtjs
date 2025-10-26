 
import React from 'react';

export default function ProfileCard(){
    return(<div className='bg-black shadow-lg rounded-xl w-80  flex flex-col '>
         <img
        src="https://i.pravatar.cc/150"
        className="w-24 h-24 rounded-full mt-4 ml-4"
        alt="Profile"
      />
      <h2 className="text-xl text-cyan-300 ">Roshan Pcy</h2>
      <p className="text-gray-500 text-center">
        Next.js & Flutter Developer 🚀
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg active:scale-[.98]">
        Follow Me
      </button>
    </div>);
}