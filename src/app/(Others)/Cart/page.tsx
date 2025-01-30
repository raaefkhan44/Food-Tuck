"use client"
import MainBreadcum from "@/app/components/MainBreadCrum";
import Image from "next/image";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { decrementQuantity, getCart, incrementQuantity, removeFromTheCart } from "../../../../redux/cartSlice";
import { urlFor } from "@/sanity/lib/image";
import { Dhill } from "../../../../types/Product";





const CartPage = () => {
    const dispatch = useAppDispatch()
    const cartSelector = useAppSelector(getCart)
      let totalPrice = 0;
      cartSelector.forEach((item:Dhill) => {
        totalPrice += item.price * item.quantity;
      })
  

  return (
    <>
    <MainBreadcum name='Shopping Cart' pageName=' Shopping Cart' />
    <div className="container mx-auto py-10">
      
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartSelector.map((item:Dhill) => (
              <tr key={item._id} className="border-b">
                <td className="p-3 flex items-center space-x-3">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <span>{item.name}</span>
                </td>
                <td className="p-3">${item.price.toFixed(2)}</td>
                <td className="p-3">
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 border border-gray-300 rounded"
                      onClick={() => {
                        if(item.quantity > 1){
                          dispatch(decrementQuantity(item))
                      }}}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-2 py-1 border border-gray-300 rounded"
                      onClick={() => {
                        dispatch(incrementQuantity(item))
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-3">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="p-3">
                  <button
                    onClick={() => {
                      dispatch(removeFromTheCart(item._id))
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiX className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Coupon Code */}
        <div className="p-6 border border-gray-200 rounded">
          <h3 className="text-lg font-semibold mb-4">Coupon Code</h3>
          <input
            type="text"
            placeholder="Enter your code"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-orange-300"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Apply
          </button>
        </div>

        {/* Total Bill */}
        <div className="p-6 border border-gray-200 rounded">
          <h3 className="text-lg font-semibold mb-4">Total Bill</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Cart Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Charge</span>
              <span>$00</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>${totalPrice}</span>
            </div>
          </div>
          <Link href='/Checkout'>
          <button className="bg-orange-500 text-white w-full py-3 rounded mt-4 hover:bg-orange-600">
            Proceed to Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartPage;
