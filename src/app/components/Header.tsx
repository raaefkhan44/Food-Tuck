"use client";
import { FaRegHeart } from "react-icons/fa";

import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import {  FaUserAlt, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useAppSelector } from "../../../hooks/redux";
import { getCart, getLikedProducts } from "../../../redux/cartSlice";
import { useRouter } from "next/navigation";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartSelector = useAppSelector(getCart)
  const likeSelector = useAppSelector(getLikedProducts)
  const [query , setquery] = useState<string>("");


  const router = useRouter();
  const serachResultHandler = () =>{
    router.push(`/Search_function/${query}`)
  }

  
  const handleSearch = () => {
    if (query.trim() === "") {
      console.error("Search query is empty");
      return;
    }
    console.log("Searching for:", query);
    // Perform your search logic here
  };

  return (
    <div>
      <br />
      <header className="bg-transparent text-white relative">
        {/* Logo Section */}
        <div className="flex justify-center mx-auto">
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#FF9F0D]">
              Food<span className="text-white">luck</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Bar */}
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-7 text-sm">
            <Link href="/" className="hover:text-[#FF9F0D]">Home</Link>
            <Link href="/Menu" className="hover:text-[#FF9F0D]">Menu</Link>
            <Link href="/Blog" className="hover:text-[#FF9F0D]">Blog</Link>
              <Link href='/About'>
                <button className="hover:text-[#FF9F0D] flex items-center">
                  About <span className="ml-1"></span>
                </button>
              </Link>
            <Link href="/Shop" className="hover:text-[#FF9F0D]">Shop</Link>
            <Link href="/Contact" className="hover:text-[#FF9F0D]">Contact</Link>
          </nav>

          {/* Desktop Search and Cart */}
          <div className="hidden md:flex items-center mr-3 space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border border-[#FF9F0D] text-white rounded-full px-4 py-1 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={query}
                onChange={(e) => setquery (e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch(); // Call the search function when "Enter" is pressed
                  }
                }}
              />
              <button onClick={serachResultHandler}>
              <FiSearch className="absolute right-3 top-2 text-[#FF9F0D] cursor-pointer" />
              </button>
            </div>
            <Link href="/Cart">
              <button className="text-white-500 text-xl hover:text-[#FF9F0D] relative">
                <FiShoppingCart size={20} />
                {cartSelector.length > 0 && (
                  <sup className="absolute -top-4 left-4 text-sm text-[#FF9F0D]">
                    {cartSelector.length}
                  </sup>
                )}
              </button>
            </Link>

            <Link href="/Wishlist">
              <button className="text-white-500 text-xl hover:text-[#FF9F0D] relative">
                <FaRegHeart size={20} />
                {likeSelector.length > 0 && (
                 <sup className="absolute -top-4 left-4 text-sm text-[#FF9F0D]">
                    {likeSelector.length}
                  </sup>
                )}
              </button>
            </Link>

            {/* User Icon */}
            <Link href='/Login'>
              <button className="text-white-500 text-xl hover:text-[#FF9F0D]">
                <FaUserAlt size={20} />
              </button>
            </Link>

          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#FF9F0D] absolute right-10 top-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4">
            <Link href="/" className="block hover:text-[#FF9F0D]">Home</Link>
            <Link href="/Menu" className="block hover:text-[#FF9F0D]">Menu</Link>
            <Link href="/Blog" className="block hover:text-[#FF9F0D]">Blog</Link>
            <Link href="/About" className="block hover:text-[#FF9F0D]">About</Link>
            <Link href="/Shop" className="block hover:text-[#FF9F0D]">Shop</Link>
            <Link href="/Contact" className="block hover:text-[#FF9F0D]">Contact</Link>

            {/* Mobile Search Bar */}
            <div className="relative flex items-center">
              <FaSearch className="absolute left-3 text-[#FF9F0D] z-10" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-900 text-white px-4 py-2 pl-10 rounded-full focus:outline-none border border-[#FF9F0D]"
              />
            </div>

            {/* Mobile Icons */}
            <div className="flex justify-around mt-4 space-x-4">

            <Link href="/Wishlist">
              <button className="text-white-500 text-xl hover:text-[#FF9F0D] relative">
                <FaRegHeart size={20} />
                {likeSelector.length > 0 && (
                 <sup className="absolute -top-4 left-4 text-sm text-[#FF9F0D]">
                    {likeSelector.length}
                  </sup>
                )}
              </button>
            </Link>
              <Link href="/Cart">
              <button className="text-white-500 text-xl hover:text-[#FF9F0D] relative">
                <FiShoppingCart size={20} />
                {cartSelector.length > 0 && (
                  <sup className="absolute -top-4 left-4 text-sm text-[#FF9F0D]">
                    {cartSelector.length}
                  </sup>
                )}
              </button>
              </Link>
              <Link href="/Login">
                <button className="text-white">
                  <FaUserAlt size={20} />
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
