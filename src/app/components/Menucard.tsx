'use client';

import Image from "next/image";
import { useState } from "react";

// Static Imports for Images
import menuCategoryDill from "../../../public/bft.png";
import sampleDish1 from "../../../public/bf1.png";
import sampleDish2 from "../../../public/bf2.png";
import sampleDish3 from "../../../public/bf3.png";
import sampleDish4 from "../../../public/bf4.png";
import sampleDish5 from "../../../public/burger.png";
import sampleDish6 from "../../../public/why-3.png";
import sampleDish7 from "../../../public/why-4.png";
import sampleDish8 from "../../../public/why-2.png";

interface MenucardProps {
  bgColor?: string; // Specify the type for bgColor
  color? : string;
}

// Constants for categories and dishes
const CATEGORY_TABS = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];
const DISHES = [
  { id: 1, title: "Lettuce Leaf", description: "Lacus nisi, et ac dapibus velit in consequat.", img: sampleDish1, category: "Breakfast", price: 12.5 },
  { id: 2, title: "Fresh Breakfast", description: "Lacus nisi, et ac dapibus velit in consequat.", img: sampleDish2, category: "Breakfast", price: 14.5 },
  { id: 3, title: "Glow Cheese", description: "Lacus nisi, et ac dapibus velit in consequat.", img: sampleDish3, category: "Breakfast", price: 12.5 },
  { id: 4, title: "Mushroom Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", img: sampleDish4, category: "Breakfast", price: 12.5 },
  { id: 5, title: "Egg Delight", description: "Lacus nisi, et ac dapibus velit in consequat.", img: sampleDish5, category: "Breakfast", price: 11.0 },
  { id: 6, title: "Toast Supreme", description: "Lacus nisi, et ac dapibus velit in consequat.", img: sampleDish6, category: "Breakfast", price: 9.0 },
  { id: 7, title: "Morning Treat", description: "Lacus nisi, et ac dapibus velit in consequat.", img: sampleDish7, category: "Breakfast", price: 13.0 },
  { id: 8, title: "Pancake Stack", description: "Lacus nisi, et ac dapibus velit in consequat.", img: sampleDish8, category: "Breakfast", price: 15.5 },
  { id: 9, title: "Berry Bliss", description: "Lacus nisi, et ac dapibus velit in consequat.", img: sampleDish3, category: "Breakfast", price: 10.0 },
  { id: 10, title: "Sunrise Special", description: "Lacus nisi, et ac dapibus velit in consequat.", img: sampleDish3, category: "Breakfast", price: 14.0 },
];
export const Menucard = ({ bgColor , color}: MenucardProps) => {
  const [category, setCategory] = useState<string>(CATEGORY_TABS[0]);

  // Filter dishes based on selected category
  const filteredDishes = DISHES.filter((dish) => dish.category === category).slice(
    0,
    category === "Breakfast" ? 8 : undefined
  );

  return (
    <div className=" mx-auto py-8 px-4 sm:px-6 lg:px-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <p className="text-[#FF9F0D] text-lg sm:text-xl font-serif  md:text-2xl italic">Choose & Pick</p>
        <h2 className={`text-3xl md:text-5xl font-bold mt-2 ${color}`}>
          <span className="text-[#FF9F0D]">From</span> Our Menu
        </h2>
      </header>

      {/* Tabs Section */}
      <nav 
        aria-label="Category Tabs" 
        className="flex justify-center mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
      >
        <ul className="flex space-x-4  px-4">
          {CATEGORY_TABS.map((tab) => (
            <li key={tab} className="flex-shrink-0">
              <button
                onClick={() => setCategory(tab)}
                className={`text-base md:text-lg py-2 whitespace-nowrap transition 
                  ${
                    category === tab
                      ? "text-[#FF9F0D] font-semibold border-b-2 border-[#FF9F0D]"
                      : "text-gray-600 hover:text-gray-400"
                  }`}
                aria-pressed={category === tab}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    

      {/* Content Section */}
      <section className="flex flex-col lg:flex-row items-start border border-black rounded-lg gap-6">
        {/* Decoration Image */}
        <aside className="relative hidden lg:flex w-1/3 flex-col items-center">
          <Image src={menuCategoryDill} alt="Menu Decoration Dill" className="w-2/3 mt-12" />
        </aside>

        {/* Dishes List */}
        <div className="w-full lg:w-2/3">
          {filteredDishes.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {filteredDishes.map((dish) => (
                <li
                  key={dish.id}
                  className={`flex items-center ${bgColor} gap-4 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  <Image
                    src={dish.img}
                    alt={dish.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h5 className="text-lg sm:text-xl font-semibold text-white">{dish.title}</h5>
                    <p className="mt-1 text-sm sm:text-base text-gray-400">{dish.description}</p>
                    <span className="text-lg text-[#FF9F0D] font-semibold">${dish.price.toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xl text-center text-gray-500">No dishes found for this category.</p>
          )}
        </div>
      </section>
    </div>
  );
};
