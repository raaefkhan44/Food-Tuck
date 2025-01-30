"use client";
import MainBreadcum from "@/app/components/MainBreadCrum";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useAppSelector } from "../../../../hooks/redux";
import { getCart } from "../../../../redux/cartSlice";
import { Dhill } from "../../../../types/Product";
import { urlFor } from "@/sanity/lib/image";

const CheckoutPage = () => {
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const cartSelector = useAppSelector(getCart)
  let totalPrice = 0;
  cartSelector.forEach((item: Dhill) => {
    totalPrice += item.price * item.quantity;
  })
  return (
    <>
      <MainBreadcum name='Checkout Page' pageName='CheckOut' />

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-8">
            {/* Shipping Address */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Last name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500">
                      <option>Choose country</option>
                      <option>USA</option>
                      <option>Canada</option>
                      <option>UK</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500">
                      <option>Choose city</option>
                      <option>New York</option>
                      <option>Toronto</option>
                      <option>London</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Zip code
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Zip code"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address 1
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Address 1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address 2
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Address 2"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="flex items-center space-x-2 text-sm">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                      checked={billingSameAsShipping}
                      onChange={() => setBillingSameAsShipping(!billingSameAsShipping)}
                    />
                    <span>Same as shipping address</span>
                  </label>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cartSelector.map((product: Dhill) => (
                  <div key={product._id} className="flex items-center space-x-4">
                    {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-16 h-16 rounded object-cover"
                    />
                  )}
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.quantity} x ${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-300 mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>$00</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg shadow hover:bg-orange-600">
                  Place an order →
                </button>
                <span className="block h-0"></span> {/* Add spacing here */}
                <Link href='/Cart'>
                  <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg shadow hover:bg-gray-300">
                    Back to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default CheckoutPage;
