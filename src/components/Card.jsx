import React from 'react'

function Card() {
  return (
    <>
    <article className="relative bg-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:gap-4 gap-8">
   
    <div className=" absolute top-0 left-0 w-0 h-0 border-r-[150px] md:border-r-[200px] border-r-transparent border-t-[150px] md:border-t-[200px] border-t-transparent border-l-[150px] md:border-l-[200px] border-l-indigo-900 border-b-[150px] md:border-b-[200px] border-b-indigo-900"></div>
    
    <section className="col-span-1 flex items-center justify-center p-8 z-20">
      <img
        src="public\assets\logo.jpg"
        className="mt-8 md:mt-0 w-80 h-80 object-cover  rounded-full p-1 bg-indigo-900 ring-8 ring-white"
      />
    </section>
    <section className="md:col-span-1 lg:col-span-2">
      
      
      <div>
        <h1 className="text-gray-900 font-extrabold text-3xl p-12">
          My Tinerary
        </h1>
        <p className="text-black font-bold capitalize text-2xl ">Find your perfect trip, designed by insiders who know and love their cities!".
</p>

<button className="my-10 border  text-white font-bold px-10 py-2 hover:bg-indigo-900  animate-bounce ring-2 ring-black bg-pink-800 rounded-full transition-colors">
    View More
  </button>
      </div>
      
     
    </section>
  </article>
  </>
  )
}

export default Card