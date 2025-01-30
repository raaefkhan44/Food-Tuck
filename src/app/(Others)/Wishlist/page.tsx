"use client"
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaHeart, FaShareAlt } from "react-icons/fa";
import { addToCart, getLikedProducts, likeProduct, unlikeProduct } from "../../../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import MainBreadcum from "@/app/components/MainBreadCrum";
import { Dhill } from "../../../../types/Product";



export default function Wishlist() {
    const likeSelector = useAppSelector(getLikedProducts);
    const dispatch = useAppDispatch();
    const handleToRemove = (productId:string) => {
        dispatch(unlikeProduct(productId))
    }

    return (
<>
        <MainBreadcum name='Wishlist' pageName=' Wishlist Page' />
        <div className="container text-black mx-auto py-10">
            <div className="flex justify-center mb-5">
            <h1 className="text-2xl font-bold text-black">
            WishList Page
            </h1>
        </div>
    
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                {likeSelector.map((product:Dhill, index:number) => (
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
                                    <span className="absolute top-2 right-2 bg-primary_color  text-white text-xs px-2 py-1 rounded">
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
                                                dispatch(addToCart(product))
                                            }}
                                            type="button" className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]">
                                            <FaShoppingCart className="text-black" />
                                        </button>
                                    </Link>

                                    <Link href={""}>
                                        <button type="button"
                                            onClick={() => {
                                                dispatch(likeProduct(product))
                                            }}
                                            className="bg-white p-2 rounded-full shadow-lg hover:bg-[#FF9F0D]">
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
                                    {product.tags.map((tag: string, i: number) => (
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
                            {/* <div className="w-ful flex justify-center items-center"> */}
                                <Link href={""}>
                                <button type="button" onClick={() => {
                                     handleToRemove(product._id)
                                }}
                                className=" text-2xl w-full text-red bg-gray-500 p-4 px-4 rounded-lg"
                                >Remove</button>
                                </Link>
                                {/* </div> */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        </>
    )
}