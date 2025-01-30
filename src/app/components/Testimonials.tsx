'use client';

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface types{
  textColor?: string;
}

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Alamin Hasan",
    avatar: "/Ellipse 6.png",
    role: "Food Specialist",
    comment:
      "Working with this team has been a game-changer for me. Their professionalism and dedication are unmatched! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Lee",
    avatar: "/avatar2.png",
    role: "Software Engineer",
    comment:
      "I am thrilled with the results! The service exceeded my expectations in every possible way. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophia Williams",
    avatar: "/avatar.png",
    role: "Marketing Specialist",
    comment:
      "Highly recommend this company! They truly care about their clients and deliver amazing results. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    rating: 5,
  },
  {
    id: 4,
    name: "Liam Brown",
    avatar: "/avatar4.png",
    role: "Project Manager",
    comment:
      "Fantastic experience! The team went above and beyond to ensure everything was perfect. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    rating: 4,
  },
  {
    id: 5,
    name: "Olivia Smith",
    avatar: "/avatar3.png",
    role: "Content Creator",
    comment:
      "An absolute pleasure to work with! I couldn't be happier with the results. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    rating: 5,
  },
];

export const Testimonials = ({textColor}:types) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16  text-white relative overflow-hidden">
      <div className=" max-w-[1273px] mx-auto  mb-10">
        <p className="text-base sm:text-lg lg:text-xl font-serif italic text-[#FF9F0D]">
          Testimonials
        </p>
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${textColor} `}>
          What our <span className="text-[#FF9F0D]">clients</span> are saying
        </h2>
      </div>

      <div className="relative max-w-full lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
        {/* Testimonial Slides */}
        <div className="flex overflow-hidden relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 w-full transition-transform duration-500 ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div className="bg-white text-black rounded-lg p-4 border border-[#FF9F0D] sm:p-6 lg:p-8 shadow-lg">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 hover:cursor-pointer rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                    />
                  </div>

                  <div className="text-[#FF9F0D] text-lg sm:text-xl lg:text-2xl mb-4">“”</div>
                  <p className="text-sm sm:text-base lg:text-lg text-center text-gray-600 mb-6">
                    {testimonial.comment}
                  </p>

                  <div className="flex mb-4 ">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`${
                          index < testimonial.rating
                            ? "text-[#FF9F0D]"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <div className="text-center">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          className="absolute left-36 sm:left-5 top-1/2 transform -translate-y-1/2 bg-[#FF9F0D] rounded-full p-2 shadow-lg z-10"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          className="absolute right-36 sm:right-5 top-1/2 transform -translate-y-1/2 bg-[#FF9F0D] rounded-full p-2 shadow-lg z-10"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${
                currentIndex === index
                  ? "bg-[#FF9F0D]"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
