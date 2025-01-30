"use client";

import { client } from "@/sanity/lib/client";
import { Dhill } from "../../../../../types/Product";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaHeart, FaShareAlt, FaRedo } from "react-icons/fa";
import MainBreadcum from "@/app/components/MainBreadCrum";
import { urlFor } from "@/sanity/lib/image";
import { useAppDispatch } from "../../../../../hooks/redux";
import { addToCart, likeProduct } from "../../../../../redux/cartSlice";

export default function SingleProductPage() {
  const dispatch = useAppDispatch();

  const [activeTab, setActiveTab] = useState("description");
  const [product, setProduct] = useState<Dhill | null>(null);
  const [relatedproduct, setRelatedProducts] = useState<Dhill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [id, setId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    const extractedId = path.split("/").pop();

    if (extractedId) {
      setId(extractedId);
    } else {
      setErrorMessage("Product ID is missing.");
    }
  }, [])

  

  const productsQuery = `*[_type == "food"] | order(_createdAT desc)[1...5]{
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

  useEffect(() => {
    const fetchProductData = async () => {
      if(!id) return;
      try {
        const productFetchData: Dhill[] = await client.fetch(
          groq`*[_type == "food" && slug.current == $id]{
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
        }`,
          { id }
        );
        
      const relatedProductsData: Dhill[] = await client.fetch(productsQuery);
      setRelatedProducts(relatedProductsData);
        if (productFetchData.length > 0) {
          setProduct(productFetchData[0]);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);



  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#FF9F0D] rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-semibold text-gray-500">Loading product details...</p>
      </div>
    );
  }
  
if (error || !product) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <p className="text-lg font-semibold text-gray-600">
        Failed to load product details. Please try again.
      </p>
      <p className="text-lg font-semibold text-gray-600">
        {errorMessage || "Failed to load product details. Please try again."}
      </p>
      <button
        onClick={() => window.location.reload()} // Reloads the page on click
        className="mt-4 bg-[#FF9F0D] text-white px-6 py-3 rounded-lg hover:bg-orange-600 flex items-center space-x-2"
      >
        <FaRedo className="mr-2" />
        Retry
      </button>
    </div>
  );
}

  return (
    <>
      <MainBreadcum name="Shop Details" pageName="Shop Details" />
      <div className="mt-24">
        <div className="container mx-auto p-6">
          <div className="flex flex-wrap lg:flex-nowrap">
            {/* Image Section */}
            <div className="w-full lg:w-1/3 flex flex-col lg:flex-row justify-center lg:justify-start gap-4 items-center lg:items-end mt-4 lg:mt-0">
              <div className="w-full h-auto">
                <Image
                  src={urlFor(product.image).url()}
                  alt="Selected Product"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>


            {/* Details Section */}
            <div className="lg:w-2/3 lg:pl-10 mt-6 lg:mt-0">
              <h1 className="text-3xl font-semibold">{product.name}</h1>
              <p className="text-gray-600 mt-2">
                {product.description}
              </p>
              <div className="flex justify-between w-[40%]">

                <p className="text-2xl text-[#FF9F0D] font-semibold mt-4">${product.price}</p>
                <p className="text-2xl text-gray-600 font-semibold mt-4 line-through">${product.originalPrice}</p>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <span className="flex items-center text-[#FF9F0D] space-x-1">⭐⭐⭐⭐⭐</span>
                <span className="text-gray-600">( 3 Reviews)</span>
              </div>

              <div className="mt-6">
                <label htmlFor="quantity" className="block text-gray-600">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  defaultValue="1"
                  className="border border-gray-300 px-4 py-2 rounded-lg w-24 mt-2"
                />
              </div>
              <div className="mt-6 flex space-x-4">
                <Link href={"/Cart"}>
                  <button onClick={() => {
                    dispatch(addToCart(product))
                  }}
                    type="button"
                    className="bg-[#FF9F0D] text-white px-6 py-3 rounded-lg hover:bg-orange-600">
                    Add to Cart
                  </button>
                </Link>
                <button type="button"
                  onClick={() => {
                    dispatch(likeProduct(product))
                  }} className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          {/* Description and Reviews Section */}
        <div className="mt-10">
      {/* Tab Buttons */}
      <div className="border-b flex space-x-8">
        <div
          onClick={() => setActiveTab("description")}
          className={`pb-2 cursor-pointer ${
            activeTab === "description"
              ? "text-[#FF9F0D] border-b-2 border-[#FF9F0D]"
              : "text-gray-600"
          }`}
        >
          Description
        </div>
        <div
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 cursor-pointer ${
            activeTab === "reviews"
              ? "text-[#FF9F0D] border-b-2 border-[#FF9F0D]"
              : "text-gray-600"
          }`}
        >
          Reviews (3)
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "description" && (
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu nulla ac turpis euismod efficitur.
            </p>
            <ul className="mt-4 space-y-2">
              <li>✔️ Delicious and fresh</li>
              <li>✔️ Healthy and organic</li>
              <li>✔️ High-quality ingredients</li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h3 className="text-lg font-semibold">Customer Reviews</h3>
            <div className="mt-4 space-y-4">
              <div className="border p-4 rounded">
                <p className="text-sm">
                  <strong>Jane Doe</strong> - ⭐⭐⭐⭐⭐
                </p>
                <p className="text-gray-600 mt-1">
                  This product is amazing! It exceeded my expectations in every way.
                </p>
              </div>
              <div className="border p-4 rounded">
                <p className="text-sm">
                  <strong>John Smith</strong> - ⭐⭐⭐⭐
                </p>
                <p className="text-gray-600 mt-1">
                  Great product overall, but delivery took longer than expected.
                </p>
              </div>
              <div className="border p-4 rounded">
                <p className="text-sm">
                  <strong>Emily Clark</strong> - ⭐⭐⭐⭐⭐
                </p>
                <p className="text-gray-600 mt-1">
                  Absolutely loved it! Will definitely order again.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>


          {/* Similar Products Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedproduct.map((product, index) => (
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
                        <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]">
                          <Link href="/Cart">
                            <FaShoppingCart className="text-black" />
                          </Link>
                        </div>
                        <div className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]">
                          <FaHeart className="text-black" />
                        </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
