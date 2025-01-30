"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart, FaShareAlt, FaRedo } from "react-icons/fa";
import { Dhill } from "../../../types/Product";
import { addToCart, likeProduct } from "../../../redux/cartSlice";
import { useAppDispatch } from "../../../hooks/redux";

const Products = () => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Dhill[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading
  const [error, setError] = useState<string | null>(null); // State to handle errors
  const productsQuery = `*[_type == "food"]{
    name,
    category,
    price,
    originalPrice,
    tags,
    image,
    description,
    available,
    slug,
    _id
  }`;

  const fetchData = async () => {
    try {
      setLoading(true); // Start loading
      const productData: Dhill[] = await client.fetch(productsQuery);
      setProduct(productData);
      setError(null); // Clear error on successful fetch
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to fetch products. Please try again.");
    } finally {
      // Simulate a slightly shorter loading experience
      setTimeout(() => {
        setLoading(false); // Stop loading spinner after fetch attempt
      }, 2000); // 3 seconds delay
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-gray-600 p-4 flex flex-col  items-center text-lg font-semibold   w-full">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#FF9F0D] rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-gray-500">Loading products, please wait....</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-gray-600 p-4 text-lg font-semibold flex flex-col items-center  w-full">
        <p>{error}</p>
        <button
          onClick={fetchData}
                  className="mt-4 bg-[#FF9F0D] text-white px-6 py-3 rounded-lg hover:bg-orange-600 flex items-center space-x-2"
        >
           <FaRedo className="mr-2" />
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 w-[75%] max-lg:w-full">
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {product.map((product, index) => (
          <Link href={`/Shop/${product.slug.current}`} className="relative group" key={index}>
            <div className="border border-gray-200 rounded cursor-pointer overflow-hidden">
              <div className="relative">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  height={267}
                  width={312}
                  className="w-full h-[267px] object-cover"
                />
                {product.originalPrice > product.price && (
                  <span className="absolute top-2 right-2 bg-primary_color text-white text-xs px-2 py-1 rounded">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
                {product.available ? (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    In Stock
                  </span>
                ) : (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Out of Stock
                  </span>
                )}

                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={""}>
                    <button
                      onClick={() => {
                        dispatch(addToCart(product));
                      }}
                      type="button"
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]"
                    >
                      <FaShoppingCart className="text-black" />
                    </button>
                  </Link>

                  <Link href={""}>
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(likeProduct(product));
                      }}
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]"
                    >
                      <FaHeart className="text-black" />
                    </button>
                  </Link>

                  <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]">
                    <FaShareAlt className="text-black" />
                  </div>
                </div>
              </div>

              <div className="mt-2 p-2">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.category}</p>
                <div className="text-xs text-gray-600 mt-1">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="mr-2 px-2 py-1 bg-gray-200 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 mt-1">{product.description}</p>
                <div className="flex items-center space-x-2 text-sm mt-2">
                  <span className="text-[#FF9F0D] font-bold">${product.price.toFixed(2)}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-500 line-through text-xs">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &lt;&lt;
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          1
        </button>
        <button className="px-3 py-1 mx-1 text-white bg-[#FF9F0D] rounded">2</button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          3
        </button>
        <button className="px-3 py-1 mx-1 text-gray-500 bg-gray-100 rounded hover:bg-primary_color hover:text-white">
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Products;
