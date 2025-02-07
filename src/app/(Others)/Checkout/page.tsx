"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCart } from "../../../../redux/cartSlice";
import { Dhill } from "../../../../types/Product";
import { useAppSelector } from "../../../../hooks/redux";

export default function Checkout() {
  const productCart = useAppSelector(getCart);
  let totalPrice = 0;
  productCart.forEach((item: Dhill) => {
    totalPrice += item.price * item.quantity;
  });
  const [cartItems, setCartItems] = useState<Dhill[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  // Fetch cart items and discount from localStorage
  useEffect(() => {
    setCartItems(productCart);
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, [productCart]);

  // Calculate subtotal and total
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  // Simulate email notification
  const sendEmailNotification = async (email: string, orderId: string) => {
    try {
      // Replace with actual email sending logic (e.g., using Nodemailer or a third-party service)
      console.log(`Sending confirmation email to ${email} for order ${orderId}`);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  // Handle order placement
  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      toast.error("Please fill out all required fields correctly.", {
        position: "top-center",
      });
      return;
    }

    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      phone: formValues.phone,
      email: formValues.email,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      orderDate: new Date().toISOString(),
      status: "pending", // Default status
    };

    try {
      // Create order in Sanity
      const createdOrder = await client.create(orderData);
      localStorage.removeItem("appliedDiscount");

      // Send email notification
      await sendEmailNotification(formValues.email, createdOrder._id);

      toast.success("Order placed successfully! A confirmation email has been sent.", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Failed to place order. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      {/* ToastContainer for Notifications */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <div className="flex flex-col lg:flex-row items-start mt-0 gap-10 mx-auto bg-white p-6 xl:max-w-7xl xl:mx-auto">
        {/* Billing Form */}
        <div className="w-full lg:w-1/2 xl:w-2/3 mx-auto mt-10">
          <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white border rounded-lg p-6 -mt-10 space-y-6 shadow-lg shadow-[#FF9F0D] text-black w-full max-w-2xl xl:max-w-4xl">
              <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-4">
                Billing Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm xl:text-base font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                  {formErrors.firstName && (
                    <p className="text-sm text-red-500 mt-1">First name is required.</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm xl:text-base font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                  {formErrors.lastName && (
                    <p className="text-sm text-red-500 mt-1">Last name is required.</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm xl:text-base font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  id="address"
                  placeholder="Enter your address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
                {formErrors.address && (
                  <p className="text-sm text-red-500 mt-1">Address is required.</p>
                )}
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm xl:text-base font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  id="city"
                  placeholder="Enter your city"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
                {formErrors.city && (
                  <p className="text-sm text-red-500 mt-1">City is required.</p>
                )}
              </div>

              {/* Zip Code */}
              <div>
                <label htmlFor="zipCode" className="block text-sm xl:text-base font-medium text-gray-700 mb-1">
                  Zip Code
                </label>
                <input
                  id="zipCode"
                  placeholder="Enter your zip code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
                {formErrors.zipCode && (
                  <p className="text-sm text-red-500 mt-1">Zip Code is required.</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm xl:text-base font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
                {formErrors.phone && (
                  <p className="text-sm text-red-500 mt-1">Phone is required.</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm xl:text-base font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Enter your email address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
                {formErrors.email && (
                  <p className="text-sm text-red-500 mt-1">Email is required.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-1/2 xl:w-1/3 flex justify-center items-center mx-auto bg-white border rounded-lg p-6 space-y-2 shadow-lg shadow-yellow-500">
          <div className="mb-4 w-full">
            <div className="ml-7">
              {productCart.map((item: Dhill) => (
                <div className="flex items-start mb-4" key={item._id}>
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt="Product Image"
                      width={208}
                      height={208}
                      className="w-20 h-20 xl:w-24 xl:h-24 object-cover rounded"
                    />
                  )}
                  <div className="ml-4">
                    <p className="font-medium xl:text-lg">{item.name}</p>
                    <p className="text-sm xl:text-base text-gray-500">Qty {item.quantity}</p>
                    <p className="text-sm xl:text-base font-medium mt-2">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full max-w-md p-6">
              <h2 className="text-xl xl:text-2xl font-semibold mb-6">Order Summary</h2>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600 xl:text-lg">Subtotal</p>
                <p className="font-medium xl:text-lg">${totalPrice}</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600 xl:text-lg">Delivery/Shipping</p>
                <p className="font-medium xl:text-lg">Free</p>
              </div>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4 mb-4">
                <p className="text-lg xl:text-xl font-medium">Total</p>
                <p className="text-lg xl:text-xl font-bold">${totalPrice}</p>
              </div>
              <p className="text-sm xl:text-base text-gray-500 mb-6">
                The total reflects the price of your order, including all duties and taxes.
              </p>
              <button
                className="w-full h-12 bg-[#FF9F0D] hover:bg-gray-800 text-white font-semibold rounded-lg transition-all transform hover:scale-105 active:scale-95 xl:text-lg"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}