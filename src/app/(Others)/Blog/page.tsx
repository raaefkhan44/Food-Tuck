"use client";

import MainBreadcum from "@/app/components/MainBreadCrum";
import SocialIcons from "@/app/components/SocialIcons";
import { Button } from "@/app/components/ui/button";
import { FiSearch, FiMenu, FiX, FiEye } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import BlogPosts from "@/app/components/BlogPosts";

const menuItems = [
  { name: "Chicken Fry", count: 26, image: "/sd-1.png" },
  { name: "Burger Food", count: 46, image: "/burger.png" },
  { name: "Pizza", count: 16, image: "/blog-2.png" },
  { name: "Fresh Fruits", count: 36, image: "/shop-2.png" },
  { name: "Vegetables", count: 16, image: "/sd-4.png" },
];

const Blog = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <MainBreadcum name="Blog " pageName="Our Blog" />
      <div className="relative">

        {/* Toggle Button for Sidebar */}
        <button
          className="fixed top-72 right-5 z-50 bg-orange-500 p-2 rounded-full text-white shadow-lg lg:hidden"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className="w-[80%] max-lg:w-[95%] py-20 flex flex-col lg:flex-row justify-between m-auto relative">
          {/* Blog Details Page */}
          <div className="flex-1">
            <BlogPosts />
          </div>
          

          {/* Sidebar */}
          <div
            className={`sidebar w-full ml-5 lg:w-[424px] bg-white p-4 border border-gray-200 space-y-16 mt-10 lg:mt-0 fixed lg:static top-0 ${
              isSidebarOpen ? "right-0" : "-right-full"
            } h-screen lg:h-auto z-40 transition-all duration-300 overflow-y-auto`}
          >
            {/* Close Button (Visible in mobile view only) */}
            <div className="flex justify-end lg:hidden">
              <button
                className="text-gray-700 bg-gray-100 p-2 rounded-full"
                onClick={() => setSidebarOpen(false)}
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-8">
              {/* Search Box */}
              <div className="mb-6 flex flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300 mb-2 sm:mb-0 sm:rounded-r-none"
                />
                <Button className="bg-[#FF9F0D] h-[46px] sm:rounded-l-none">
                  <FiSearch className="text-2xl font-extrabold text-white cursor-pointer" />
                </Button>
              </div>

              {/* Profile Section */}
              <div className="text-center border border-gray-300 rounded p-4">
                <Image
                  src="/img.png"
                  alt="Profile"
                  width={50}
                  height={50}
                  className="w-20 h-20 mx-auto rounded-full"
                />
                <h3 className="mt-2 font-semibold">Prince Miyako</h3>
                <p className="text-sm text-gray-500">Blogger & Photographer</p>
                <div className="text-orange-500 flex justify-center space-x-1 mt-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                  <span className="text-gray-500">(5 Reviews)</span>
                </div>
                <p className="text-sm mt-1 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis distinctio, odio eligendi suscipit reprehenderit
                  atque.
                </p>
                <div className="flex justify-center space-x-2 mt-3">
                  <SocialIcons />
                </div>
              </div>

              {/* Recent Post */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Recent Post</h3>
                <div className="space-y-4">
                  {[
                    {
                      img: "/recent-p.png",
                      date: "June 28, 2023",
                      title: "How to Make Delicious Pancakes",
                    },
                    {
                      img: "/shop-2.png",
                      date: "July 5, 2023",
                      title: "5 Tips for Perfect BBQ",
                    },
                    {
                      img: "/why-5.png",
                      date: "July 15, 2023",
                      title: "The Secrets of Italian Pasta",
                    },
                    {
                      img: "/bf3.png",
                      date: "August 1, 2023",
                      title: "Healthy Breakfast Ideas",
                    },
                  ].map((post, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Image
                        src={post.img}
                        alt={post.title}
                        width={150}
                        height={150}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <p className="text-sm text-gray-500">{post.date}</p>
                        <p className="text-sm font-medium">{post.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filter By Menu */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Filter By Menu</h3>
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="rounded object-cover"
                        />
                        <span className="font-medium text-gray-800">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-gray-600">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sandwich",
                    "Tikka",
                    "Bbq",
                    "Restaurant",
                    "Chicken Shawarma",
                    "Health",
                    "Fastfood",
                    "Food",
                    "Pizza",
                    "Burger",
                    "Chicken",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-sm rounded hover:bg-gray-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photo Gallery */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Photo Gallery</h3>
                <div className="grid grid-cols-3  gap-4">
                  {[
                    "/pizza.png",
                    "/about-3.png",
                    "/shop-6.png",
                    "/shop-7.png",
                    "/menu-1.png",
                    "/menu-3.png",
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-lg"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <Image
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black hover:cursor-pointer bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FiEye className="text-white text-2xl" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div className="mb-10">
                <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
