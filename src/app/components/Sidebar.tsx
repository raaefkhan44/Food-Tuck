"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-orange-500 text-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>

      <div
        className={`fixed lg:static top-0 left-0 h-full w-[312px] bg-white p-4 border border-gray-200 shadow-lg z-40 transform transition-transform overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        
        <div className="mb-6 flex">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
          />
          <Button className="bg-[#FF9F0D] h-[46px] rounded-s-none">
            <FiSearch className="text-2xl font-extrabold text-white cursor-pointer" />
          </Button>
        </div>


        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Category</h3>
          <div className="space-y-2">
            {[
              "Sandwiches",
              "Burger",
              "Chicken Chup",
              "Drink",
              "Pizza",
              "Thi",
              "Non Veg",
              "Uncategorized",
            ].map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-[#FF9F0D]" />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

       
        <div className="mb-6 bg-gray-100 rounded shadow-md text-center">
          <div className="relative">
            <Image
              src="/sidebar.png"
              alt="Classic Restaurant"
              width={200}
              height={200}
              className="w-full h-auto rounded"
            />
            <div className="absolute top-5 left-5 bg-opacity-40 text-white flex flex-col justify-center items-start rounded">
              <h4 className="font-bold">Perfect Taste</h4>
              <p className="text-xl font-bold">Classic Restaurant</p>
              <p className="font-bold mt-1 text-primary_color">45.00$</p>
            </div>
            <button className="absolute bottom-5 left-5 mt-3 px-4 py-2 underline text-white rounded hover:bg-[#FF9F0D]">
              Shop Now
            </button>
          </div>
        </div>

   
        <div className="mb-6">
          <h3 className="font-bold text-xl mb-2">Filter By Price</h3>
          <div>
            <input
              type="range"
              min="0"
              max="800"
              className="w-full bg-primary_color"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>From $0</span>
              <span>To $800</span>
            </div>
          </div>
        </div>

      
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Latest Products</h3>
          <div className="space-y-4">
            {[
              { name: "Pizza", image: "/pizza.png", price: "$35.00" },
              { name: "Cookies", image: "/fot3.png", price: "$15.00" },
              { name: "Cupcake", image: "/menu-3.png", price: "$20.00" },
              { name: "Burger", image: "/burger.png", price: "$30.00" },
            ].map((product) => (
              <div
                key={product.name}
                className="flex items-center space-x-4 border-b pb-2"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded"
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        <div>
          <h3 className="font-semibold text-lg mb-2">Product Tags</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Services",
              "Our Menu",
              "Pizza",
              "Cupcake",
              "Burger",
              "Cookies",
              "Our Shop",
              "Tandoori Chicken",
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
      </div>

    
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
