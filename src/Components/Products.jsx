import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Products = () => {
  const carouselRef = useRef(null);
  const slidesRef = useRef([]);
  const [play, setPlay] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const pods = [
    {
      img: '/Pod2.png'
    }, {
      img: '/Pod3.png'
    }, {
      img: '/Pod4.png'
    }, {
      img: '/Pods2.png'
    },
  ];

  const totalSlides = pods.length;

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (play) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }
    
    return () => clearInterval(interval);
  }, [play, totalSlides]);

  useEffect(() => {
    if (carouselRef.current && slidesRef.current[activeIndex]) {
      // Get the element's position relative to its scrolling container
      const slide = slidesRef.current[activeIndex];
      const container = carouselRef.current;
      
      // Calculate the scroll position needed to center the slide
      const slideLeft = slide.offsetLeft;
      const slideWidth = slide.offsetWidth;
      const containerWidth = container.offsetWidth;
      
      // Calculate the position that will center the slide in the container
      const scrollPosition = slideLeft - (containerWidth / 2) + (slideWidth / 2);
      
      // Scroll horizontally only, within the carousel container
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <div className="p-5 relative flex flex-col bg-white min-h-[40vh]">
      {/* Bouncing Text */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.7, damping: 13 }}
        className="text-black font-bold mt-10 text-center text-5xl md:text-6xl"
      >
        View our products
      </motion.h1>

      {/* Carousel Wrapper */}
      <div className="flex w-full justify-center mt-10">
        <motion.div whileInView={{translateX:0}} initial={{translateX:-100}} transition={{duration:1}}
          ref={carouselRef}
          className="mt-10 flex overflow-x-auto carousel snap-x snap-mandatory w-full max-w-5xl h-96 p-5 scrollbar-hide"
          whileTap={{ cursor: "grabbing" }}
        >
          {pods.map((pod, i) => (
            <motion.div
              key={i}
              ref={el => slidesRef.current[i] = el}
              className={`h-full md:w-2/5 w-full bg-white p-5 shrink-0 snap-center mx-2 rounded-xl shadow-xl`}
              initial={{ opacity: 0.7, scale: 0.9 }}
              animate={{
                opacity: activeIndex === i ? 1 : 0.7,
                scale: activeIndex === i ? 1 : 0.9
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveIndex(i)}
            >
              <img className="h-full w-full object-cover" src={pod.img} alt={`Product ${i+1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-4 rounded-xl flex gap-5 mx-auto bg-black bg-opacity-40 w-auto px-4 py-2 justify-center items-center">
        {pods.map((_, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-3 shrink-0 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === i ? "w-6 bg-white" : "w-3 bg-gray-300"
            }`}
          ></div>
        ))}
        <div
          onClick={() => setPlay(!play)}
          className="cursor-pointer text-white text-xl ml-2"
        >
          {play ? "⏸️" : "▶️"}
        </div>
      </div>
    </div>
  );
};

export default Products;