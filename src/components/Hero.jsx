import React from 'react'
import Carousel from './Carousel'

function Hero() {
  return (
    <>
    <section className="relative  h-full overflow-hidden flex flex-col ">
        <div className="z-20 max-w-5xl mx-auto">
            <h2 className="text-black my-6 text-2xl lg:text-3xl lg:my-8">Popular Mytinerary</h2>
        </div>
        <div className="z-20  flex items-center justify-center">
        <Carousel />
        </div>
       
        <div className="absolute h-full w-full z-10">
            <img src="public/assets/fondop.jpg" alt="fondo" className="h-full w-full brightness-75 contrast-75"/>
        </div>
    </section>
    </>
  )
}

export default Hero