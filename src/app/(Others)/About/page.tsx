"use client";

import { useState, useRef } from "react";
import { FaPlay, FaPause, FaTimes } from "react-icons/fa";
import MainBreadcum from "@/app/components/MainBreadCrum";
import { Menucard } from "@/app/components/Menucard";
import { Testimonials } from "@/app/components/Testimonials";
import Image from "next/image";

const AboutUsSection = () => {
  const [isActivePlayer, setIsActivePlayer] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {/* Main Breadcrumb */}
      <MainBreadcum name="About Us" pageName="About Us" />

      {/* Main Section */}
      <section className="flex flex-col lg:flex-row gap-8 p-5 mt-5 lg:p-10">
        {/* Image Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
          <Image
            width={800}
            height={800}
            className="row-span-2 w-full object-cover h-[536px] rounded-lg"
            src="/abt-1.png"
            alt="Dish 1"
          />
          <Image
            width={300}
            height={300}
            className="mt-14 sm:pt-0 w-full object-cover rounded-lg"
            src="/why-2.png"
            alt="Dish 2"
          />
          <Image
            width={300}
            height={300}
            className="w-full object-cover rounded-lg"
            src="/abt-3.png"
            alt="Dish 3"
          />
        </section>

        {/* Description Section */}
        <div className="flex-1">
          <div className="max-w-[90%] mt-36 lg:max-w-[70%] mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-4 text-yellow-500">
              About Us
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-black">
              Food is an important part of a balanced diet
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              expedita tempora, ab eum sequi magnam nisi esse quis ullam ipsum
              voluptatem excepturi, nemo placeat autem iste necessitatibus minus
              unde voluptatibus!
            </p>
            <div className="flex justify-start space-x-6">
              {/* Read More Button */}
              <a
                href="/About"
                className="py-3 px-4 border-2 border-[#FF9F0D] text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white rounded-full"
              >
                Read More
              </a>

              {/* Play Video Button */}
              <button
                className="py-3 px-6 border-2 border-[#FF9F0D] text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white rounded-full"
                onClick={() => {
                  setIsPlayed(true);
                  setIsActivePlayer(true);
                  if (videoRef.current) videoRef.current.currentTime = 0;
                  videoRef.current?.play();
                }}
              >
                <FaPlay className="w-6 h-6 mr-2  hover:text-white text-yellow-500 inline" />
                Play Video
              </button>
            </div>

            {/* Video Player Popup */}
            <div
              className={`fixed inset-0 bg-black/90 flex items-center justify-center z-50 ${
                !isActivePlayer ? "hidden" : ""
              }`}
            >
              {/* Close Icon */}
              <FaTimes
                className="absolute top-4 right-4 text-white w-8 h-8 cursor-pointer"
                onClick={() => {
                  setIsPlayed(false);
                  setIsActivePlayer(false);
                  videoRef.current?.pause();
                }}
              />

              {/* Play/Pause Icon */}
              {isPlayed ? (
                <FaPause
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 cursor-pointer"
                  onClick={() => {
                    setIsPlayed(false);
                    videoRef.current?.pause();
                  }}
                />
              ) : (
                <FaPlay
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 cursor-pointer"
                  onClick={() => {
                    setIsPlayed(true);
                    videoRef.current?.play();
                  }}
                />
              )}

              {/* Video Player */}
              <video
                ref={videoRef}
                className="w-4/5 md:w-3/4 max-w-4xl z-10"
                src="/resvideo.mp4"
                controls
              />
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <section className="my-20 flex flex-col items-center px-5">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-3">
          Why Choose Us
        </h2>

        {/* Subtitle */}
        <p className="w-full sm:w-2/3 lg:w-1/3 text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus
          perspiciatis corporis ducimus aliquid optio.
        </p>

        {/* Decorative Image */}
        <div className="my-10 w-full">
          <Image
            src="/abt-2.png"
            alt="Dishes"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Features Section */}
        <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 lg:gap-12 w-full">
          {/* Feature 1 */}
          <li className="text-center flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 px-4">
            <Image
              src="/Student.png"
              alt="Best Chefs"
              width={100}
              height={100}
              className="w-24 h-24 object-cover rounded-full"
            />
            <h4 className="text-lg lg:text-xl font-semibold my-4">
              Best Chefs
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              maiores nobis illo cum excepturi eum nostrum dolor animi dolores
              aspernatur.
            </p>
          </li>

          {/* Feature 2 */}
          <li className="text-center flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 px-4">
            <Image
              src="/coffee-abt.png"
              alt="120 item food"
              width={100}
              height={100}
              className="w-24 h-24 object-cover rounded-full"
            />
            <h4 className="text-lg lg:text-xl font-semibold my-4">
              120 Item Food
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              maiores nobis illo cum excepturi eum nostrum dolor animi dolores
              aspernatur.
            </p>
          </li>

          {/* Feature 3 */}
          <li className="text-center flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 px-4">
            <Image
              src="/person.png"
              alt="Clean Environment"
              width={100}
              height={100}
              className="w-24 h-24 object-cover rounded-full"
            />
            <h4 className="text-lg lg:text-xl font-semibold my-4">
              Clean Environment
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              maiores nobis illo cum excepturi eum nostrum dolor animi dolores
              aspernatur.
            </p>
          </li>
        </ul>
      </section>

      {/* Testimonials and Menu Card */}
      <Testimonials textColor="text-black"/>
      <Menucard bgColor="bg-white" color="text-black"/>
    </>
  );
};

export default AboutUsSection;
