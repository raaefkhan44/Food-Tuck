import Link from "next/link";
import Header from "./Header";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white bg-multiple">
        <Header/>   
        <div className="container mx-auto  flex flex-col-reverse lg:flex-row items-center px-6 lg:px-16 py-10 lg:py-20">
          {/* Social Image */}
          <div className="hidden lg:flex  items-start mt-6 lg:mt-0">
            <Image
              src="/social.png"
              alt="Social Bar"
              // layout="responsive" 
              width={25}
              height={492}
              className="mr-2"
            />
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-[#FF9F0D] font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
              <i>It&#39;s Quick & Amusing!</i>
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6">
              <span className="text-[#FF9F0D]">The</span> Art of Speed <br />
              Food Quality
            </h1>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
           <Link
              href="/Menu"
              className="bg-[#FF9F0D] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full hover:bg-[#FF9F0D] transition duration-300"
            >
              See Menu
            </Link>
          </div>

          {/* Hero Image */}
          <div className="flex-1 mt-10 lg:mt-0 flex justify-center items-center">
            <Image
              src="/Image.png"
              alt="Delicious Food"
              // layout="responsive"
              width={877}
              height={670}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="bg-black">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 py-10 lg:py-20">
          {/* About Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-[#FF9F0D] font-semibold text-xl font-serif italic md:text-2xl lg:text-3xl mb-2">
              <i>About Us</i>
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6">
              <span className="text-[#FF9F0D]">We</span> Create the Best
              Food Product
            </h1>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <FaCheck size={20} className="text-[#FF9F0D]" />
                <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li className="flex items-center">
                <FaCheck size={20} className="text-[#FF9F0D]" />
                <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi.</p>
              </li>
              <li className="flex items-center">
                <FaCheck size={20} className="text-[#FF9F0D]" />
                <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </li>
            </ul>
            <Link
              href="/About"
              className="inline-block bg-transparent border border-[#FF9F0D] text-[#FF9F0D] py-2 px-6 rounded-full font-medium hover:bg-orange-500 hover:text-black transition duration-300"
            >
              Read More
            </Link>
          </div>

          {/* About Images */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 mt-10 lg:mt-0">
            <div className="col-span-2">
              <Image
                src="/about-3.png"
                alt="Delicious Food 1"
                width={650}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <Image
              src="/about-2.png"
              alt="Delicious Food 2"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <Image
              src="/about-1.png"
              alt="Delicious Food 3"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Food Category Section */}
      <div className="bg-black text-center py-10">
        <h1 className="text-2xl font-serif text-[#FF9F0D] italic">Food Category</h1>
        <h2 className="text-4xl font-serif italic mt-4">
          <span className="text-[#FF9F0D]">Choose</span> Food Item
        </h2>
      </div>
    </div>
  );
}
