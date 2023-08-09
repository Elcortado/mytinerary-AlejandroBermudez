import { useState, useEffect } from "react";

const data = [
    { name: "Berlín - Germany", image: "public/assets/berlin.jpeg" },
    { name: "Barcelona - Spain", image: "public/assets/barcelona.jpg" },
    { name: "Budapest - Hungary", image: "public/assets/budapest.jpeg" },
    { name: "Dubai - U.A.E.", image: "public/assets/dubai.jpeg" },
    { name: "Hanoi - Vietnam", image: "public/assets/hanoi.jpeg" },
    { name: "London - England", image: "public/assets/london.jpeg" },
    { name: "Mexico DF - Mexico", image: "public/assets/mexico df.jpg" },
    { name: "Moscow - Russia", image: "public/assets/moscu.jpeg" },
    { name: "New York - USA", image: "public/assets/new york.jpg" },
    { name: "Venice - Italy", image: "public/assets/venecia.jpeg" },
    { name: "París - France", image: "public/assets/paris.jpg" },
    { name: "Sao Paulo - Brazil", image: "public/assets/sao.jpeg" },
]

const itemsSlide = 4;

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(data.length / itemsSlide));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className=" p-4 flex flex-col items-center">

            <div className="flex justify-center w-4/6 min-h-[40vh]">
                {Array.from({ length: Math.ceil(data.length / itemsSlide) }).map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        className={`p-2 ${slideIndex === currentSlide ? 'block' : 'hidden'}`}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {data.slice(slideIndex * itemsSlide, (slideIndex + 1) * itemsSlide).map((city, cityIndex) => (
                                <div key={cityIndex} className="mb-4 flex flex-col items-center">
                                    <img
                                        src={city.image}
                                        alt={city.name}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <p className="bg-sky-800/30 text-center mt-2">
                                        <span className="text-xl font-bold tracking-wide text-blue-950 hover:text-blue-600">{city.name}</span></p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="dots flex justify-center mt-4">
                {Array.from({ length: Math.ceil(data.length / itemsSlide) }).map((_, slideIndex) => (
                    <span
                        key={slideIndex}
                        className={`dot inline-block w-2 h-2 rounded-full mx-1 ${slideIndex === currentSlide ? 'bg-white' : 'bg-white'
                            }`}
                        onClick={() => setCurrentSlide(slideIndex)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Carousel;

