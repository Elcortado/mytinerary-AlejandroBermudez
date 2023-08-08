import React from 'react'
import Carousel from './Carousel'

function Hero() {
  return (
    <>
    <section className="relative  h-screen overflow-hidden flex flex-col ">
        <div className="z-20 max-w-5xl mx-auto">
            <h2 className="text-white my-6 text-2xl lg:text-3xl lg:my-8">Popular Mytinerari</h2>
        </div>
        <div className="z-20  flex items-center justify-center">
        <Carousel />
        </div>
       
        <div className="absolute top-0 bottom-0 h-full w-full z-10">
            <img src="public/assets/fondop.jpg" alt="fondo" className="h-full w-full object-cover brightness-75 contrast-75"/>
        </div>
    </section>
    </>
  )
}

export default Hero