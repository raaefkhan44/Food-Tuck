'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { AiOutlineLike } from "react-icons/ai";
import { TiMessageTyping } from "react-icons/ti";
import { FaShareAlt } from "react-icons/fa";

const foodData = [
  {
    id: 1,
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    date: "10 February 2022",
    image: "/burger.png", // Replace with your image path
    category: "Food & Drink",
  },
  {
    id: 2,
    title: "Morbi Sodales Tellus Et, In Blandit Risus Suscipit A",
    date: "12 February 2022",
    image: "/pizza.png", // Replace with your image path
    category: "Food & Drink",
  },
  {
    id: 3,
    title: "Cumburb rumrum velit ac congue malesuada",
    date: "14 February 2022",
    image: "/why-1.png", // Replace with your image path
    category: "Food & Drink",
  },
];

const HomeBlog = () => {
  return (
    <div className="bg-black py-20 px-4 lg:px-6 text-white">
      <div className="text-center">
        <p className="font-serif italic text-[#FF9F0D] text-lg sm:text-xl lg:text-2xl">
          Blog Post
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
          <span className="text-[#FF9F0D]">Latest </span>
          <span className="text-white">News & Blogs</span>
        </h2>
      </div>
      <div className="max-w-7xl mt-11 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodData.map((item) => (
            <div
              key={item.id}
              className="bg-black rounded-lg outline outline-1 outline-gray-500 p-4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 overflow-hidden shadow-md"
            >
              {/* Image */}
              <div className="relative h-[250px]  sm:h-[300px] lg:h-[349px] transition-transform transform hover:scale-95 hover:shadow-lg duration-300  w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  // className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4  sm:p-6">
                {/* Date */}
                <p className="text-sm  text-gray-400 mb-2">{item.date}</p>
                {/* Title */}
                <h3 className="text-base sm:text-lg  font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                {/* Footer */}
                <div className="flex items-center justify-between mt-5 lg:mt-7">
                  {/* Learn More */}
                  <Link href="/Blog">
                    <button className="text-sm text-[#FF9F0D] hover:underline">
                      Learn More
                    </button>
                  </Link>
                  {/* Icons */}
                  <div className="flex items-center space-x-4 text-gray-400">
                    <AiOutlineLike className="w-5 h-5 hover:text-[#FF9F0D] hover:cursor-pointer" />
                    <TiMessageTyping className="w-5 h-5 hover:text-[#FF9F0D] hover:cursor-pointer" />
                    <FaShareAlt className="w-5 h-5 hover:text-[#FF9F0D] hover:cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
