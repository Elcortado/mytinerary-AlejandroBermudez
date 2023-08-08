import { useState, useEffect } from "react"
import View from "./View";
const data = [
    { province: "Berlín", country: "Germany", image: "public/assets/berlin.jpeg" },
    { province: "Barcelona", country: "Spain", image: "public/assets/barcelona.jpg" },
    { province: "Budapest", country: "Hungary", image: "public/assets/budapest.jpeg" },
    { province: "Dubai", country: "U.A.E.", image: "public/assets/dubai.jpeg" },
    { province: "Hanoi", country: "Vietnam", image: "public/assets/hanoi.jpeg" },
    { province: "London", country: "England", image: "public/assets/london.jpeg" },
    { province: "Mexico DF", country: "Mexico", image: "public/assets/mexico df.jpg" },
    { province: "Moscow", country: "Russia", image: "public/assets/moscu.jpeg" },
    { province: "New York", country: "USA", image: "public/assets/new york.jpg" },
    { province: "Venice", country: "Italy", image: "public/assets/venecia.jpeg" },
    { province: "París", country: "France", image: "public/assets/paris.jpg" },
    { province: "Sao Paulo", country: "Brazil", image: "public/assets/sao.jpeg" },
  
]

let arrComp = [];
for (let i = 0; i < data.length; i += 4) {
    let subarr = data.slice(i, i + 4);
    arrComp.push(subarr);
}

function Carousel() {
    const [curr, setCurr] = useState(2)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? arrComp.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === arrComp.length - 1 ? 0 : curr + 1))
    
    useEffect(() => {
        // ejecuta la funcion next cada 3000ms
        const slideInterval = setInterval(next, 3000)
        return () => clearInterval(slideInterval)
    }, [])


  return (
    <div className="max-w-6xl h-full relative md:px-24 px-36 pb-12 ">
            <div className="overflow-hidden relative h-full w-[340px] sm:w-[436px] lg:w-[596px]">
                <div className="flex h-screen transition-transform duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                    {arrComp.map((arr, key) => <View key={key} arr={arr} />)}
                </div>
            </div>
            <div className="absolute -bottom-1 z-50 inset-0 flex items-end md:items-center justify-between mx-auto w-72 md:w-auto" >
                <button onClick={prev} className="text-white bg-black rounded-full p-2 md:-mt-1 lg:mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button onClick={next} className="text-white bg-black rounded-full p-2 md:-mt-11 lg:mt-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div className="absolute bottom-4 lg:bottom-0 right-0 left-0">
                <div className="flex items-center justify-center gap-8">
                    {arrComp.map((_, i) => (<div key={i} className={`transition-all w-7 h-1 bg-white ${curr === i ? "" : "bg-opacity-50"}`}/>))}
                </div>
            </div>
        </div>
  )
}

export default Carousel