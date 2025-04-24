import { motion } from "motion/react";
import React from "react";

const Showcase = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="w-full hidden px-5 md:p-20 mt-5 md:flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative w-full md:max-w-[70vw] max-w-[90vw] aspect-video overflow-hidden rounded-lg bg-gray-600"
        >
          <video
            autoPlay
            loop
            className="w-full h-full object-cover  pointer-events-none select-none rounded-lg"
            muted
            src="/HeadPhoneShowcase.mp4"
          ></video>

          {/* Text Overlay */}
          <motion.div
            initial={{ translateX: "-200px", opacity: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            className="absolute bottom-0 left-0 w-full md:w-1/2 bg-[rgba(0,0,0,0.7)] p-5 rounded-b-lg md:rounded-b-none md:rounded-r-lg text-white"
          >
            <h1 className="text-xl md:text-2xl font-bold">Pods Pro</h1>
            <p className="text-sm md:text-base">
              Experience crystal-clear sound and deep bass with our compact,
              durable earbuds. Designed for all-day comfort and seamless wireless
              connectivity.
            </p>
            <p className="text-lg font-semibold mt-2">₹ 24,900.00</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile View with Hover Effect */}
      <div className="w-full overflow-hidden p-5 min-h-86 md:hidden">
        <div className="relative group overflow-hidden rounded-md">
          {/* Video */}
          <video
            autoPlay
            loop
            playsInline
            muted
            className="h-full  pointer-events-none select-none w-full object-cover object-center rounded-md"
            src="/HeadPhoneShowcase.mp4"
          ></video>

          {/* Hover Overlay */}
          <div className="absolute w-full h-full p-5 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)] top-0 left-0 text-white transition-all duration-500 ease-in-out transform translate-y-[200%] group-hover:translate-y-0">
            <h1 className="text-[10px] md:text-2xl font-bold">Pods Pro</h1>
            <p className="text-[5px] md:text-base text-center">
              Experience crystal-clear sound and deep bass with our compact,
              durable earbuds. Designed for all-day comfort and seamless wireless
              connectivity.
            </p>
            <p className="text-[5px] md:text-lg font-semibold mt-2">₹ 24,900.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
