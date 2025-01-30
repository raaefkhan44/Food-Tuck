import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineClockCircle } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 relative bg-[url('/footerLeaves.png')]  bg-no-repeat bg-right-bottom -z-0 ">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <section className="flex flex-wrap justify-between border-b-2 border-[#FF9F0D] px-6 lg:px-24 py-10">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold">
              <span className="text-[#FF9F0D]">Still</span> need our support?
            </h2>
            <p className="mt-2">
              Don’t wait, make a smart & logical quote here. It’s pretty easy.
            </p>
          </div>

          <div className="flex flex-wrap items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-gray-100 px-4 py-2 rounded-l-md outline-none"
            />
            <button className="bg-[#FF9F0D] text-black px-4 py-2 rounded-r-md hover:bg-orange-500">
              Subscribe now
            </button>
          </div>
        </section>

        {/* Main Footer */}
        <section className="flex flex-wrap justify-between mt-10 px-6 lg:px-24">
          {/* About Us */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h3 className="text-lg font-bold mb-3">About Us</h3>
            <p>
              We serve deiliciuos foods and dishes to give you quality meal and make your tastebuds feel a lot pleasure 
            </p>

            <div className="mt-0 -ml-4   ">
            <div className="flex items-center space-x-4 bg-black text-white p-4">
      {/* Yellow Box */}
      <div className="flex justify-center items-center bg-[#FF9F0D] w-[78px] h-[72px] rounded">
        <AiOutlineClockCircle className="text-white text-3xl" />
      </div>

      {/* Text Content */}
      <div>
        <h3 className="text-lg font-semibold">Opening Hours</h3>
        <p className="text-sm ">Mon - Sat (8.00 - 6.00)</p>
        <p className="text-sm">Sunday - Closed</p>
      </div>
    </div>
</div>

          </div>

          {/* Useful Links */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h3 className="text-lg font-bold mb-3">Useful Links</h3>
            <ul>
              <Link href='/About'>
              <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">
                About
              </li></Link>
              <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">
                News
              </li>
              <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">
                Partners
              </li>
              <Link href='/ChefTeam'>
              <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">
                Team
              </li></Link >
              <Link href='/Menu'>
              <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">
                Menu
              </li></Link >
              <Link href='/Signup'>
              <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">
                Contacts
              </li></Link>
              
            </ul>
          </div>

          {/* Help */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h3 className="text-lg font-bold mb-3">Help?</h3>
            <ul>
                <Link href='/FAQ'>
                <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">FAQ</li></Link>
              
              <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">
                Terms & Conditions
              </li>
              <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">
                Reporting
              </li>
              <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">
                Documentation
              </li>
              <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">
                Support Policy
              </li>
              <li className="my-2 hover:text-[#FF9F0D] cursor-pointer">
                Privacy
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="lg:w-1/4">
            <h3 className="text-lg font-bold mb-3">Recent Post</h3>
            <div className="flex items-center my-2 hover:bg-gray-100/10 p-2 rounded">
              <div className="w-16 h-14 bg-gray-300 mr-3">
                <Image
                  src="/fot3.png"
                  alt="Footer Leaves"
                  width={106} // width for w-24 (tailwind class w-24 = 6rem = 96px)
                  height={100} // height for w-24 (tailwind class w-24 = 6rem = 96px)
                  layout="intrinsic" // maintain aspect ratio
                />
              </div>
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p>Keep Your Business</p>
              </div>
            </div>
            <div className="flex items-center my-2 hover:bg-gray-100/10 p-2 rounded">
              <div className="w-16 h-14 bg-gray-300 mr-3">
                <Image
                  src="/fot2.png"
                  alt="Footer Leaves"
                  width={106} // width for w-24 (tailwind class w-24 = 6rem = 96px)
                  height={100} // height for w-24 (tailwind class w-24 = 6rem = 96px)
                  layout="intrinsic" // maintain aspect ratio
                />
              </div>
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p>Keep Your Business</p>
              </div>
            </div>
            <div className="flex items-center my-2 hover:bg-gray-100/10 p-2 rounded">
              <div className="w-16 h-14 bg-gray-300 mr-3">
                <Image
                  src="/fot1.png"
                  alt="Footer Leaves"
                  width={106} // width for w-24 (tailwind class w-24 = 6rem = 96px)
                  height={100} // height for w-24 (tailwind class w-24 = 6rem = 96px)
                  layout="intrinsic" // maintain aspect ratio
                />
              </div>
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p>Keep Your Business</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-gray-500 md:h-16 h-auto mt-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-24 h-full">
          <p>Copyright © 2024 by Raaef. All Rights Reserved.</p>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-gray-100 text-gray-600 flex items-center justify-center  cursor-pointer hover:text-gray-800 hover:bg-gray-200"
            >
              <FaFacebookF />
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-gray-100 text-gray-600 flex items-center justify-center  cursor-pointer hover:text-gray-800 hover:bg-gray-200"
            >
              <FaTwitter />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-gray-100 text-gray-600 flex items-center justify-center  cursor-pointer hover:text-gray-800 hover:bg-gray-200"
            >
              <FaInstagram />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-gray-100 text-gray-600 flex items-center justify-center  cursor-pointer hover:text-gray-800 hover:bg-gray-200"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>


    </footer>
  );
};

export default Footer;
