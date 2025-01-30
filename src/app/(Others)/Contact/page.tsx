import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import MainBreadcum from '@/app/components/MainBreadCrum';

const Contact = () => {
  return (
    <>
    <MainBreadcum name=" Sign up Page " pageName="Contact Us"/>

    <section className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-500" />
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
              Remember me?
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg text-lg font-medium hover:bg-orange-600"
          >
            Sign Up
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-2">
            <Link
              href='/NotFound'
              className="text-sm text-orange-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <Image
              src="/Google.png"
              alt="Google"
              width={200}
              height={200}
              className="w-5 h-5 mr-5"
            />
            Sign up with Google
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <Image
              src="/Apple.png"
              alt="Apple"
              width={400}
              height={300}
              className="w-5 h-5 mr-6"
            />
            Sign up with Apple
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
