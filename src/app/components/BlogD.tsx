import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FiClock, FiUser, FiMessageSquare } from "react-icons/fi";
import Link from "next/link";

const BlogDetailsPage = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col space-y-8">
      {/* Blog Post */}
      <article className="w-full mx-auto">
        <Image
          src="/blog-main.png"
          alt="Delicious food"
          width={1300}
          height={1300}
          className="w-full max-w-full md:max-w-3xl lg:max-w-4xl rounded-lg mb-6"
        />
        <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4 mb-4">
          <span className="flex items-center space-x-1">
            <FiClock />
            <span>Jan 15, 2023</span>
          </span>
          <span className="flex items-center space-x-1">
            <FiUser />
            <span>Admin</span>
          </span>
          <span className="flex items-center space-x-1">
            <FiMessageSquare />
            <span>3 Comments</span>
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          10 Reasons To Do A Digital Detox Challenge
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar diam ac libero lacinia, nec pulvinar metus suscipit.
        </p>

        {/* Highlighted Section */}
        <blockquote className="bg-orange-100 border-l-4 border-orange-500 p-4 italic text-gray-800 my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </blockquote>

        <p className="text-gray-700 leading-relaxed mb-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>

        {/* Additional Content */}
        <div className="flex flex-col lg:flex-row gap-6 items-start my-8">
          <div className="lg:w-2/3">
            <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Loreduo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Los angles
            </p>
          
            
          </div>
          <Image
            src="/details-b.png"
            alt="Food"
            width={1500}
            height={1500}
            className="w-full max-w-sm md:max-w-md lg:max-w-[300px] rounded-lg"
          />
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>

        {/* Tags and Share */}
        <div className="flex flex-wrap justify-between items-center mt-8 border border-gray-300 px-4 py-2">
  <div className="flex items-center space-x-2">
    <span className="text-gray-600 font-semibold">Tags:</span>
    <span className="text-gray-500 text-sm">Restaurant, Dinner, Pizza, Yummy</span>
  </div>

  <div className="flex items-center space-x-4 mt-4 md:mt-0">
    <span className="text-gray-600 font-semibold">Share:</span>
    
    <Link href="https://facebook.com" className="text-gray-500 hover:text-gray-700">
      <FaFacebookF />
    </Link>
    <Link href="https://twitter.com" className="text-gray-500 hover:text-gray-700">
      <FaTwitter />
    </Link>
    <Link href="https://linkedin.com" className="text-gray-500 hover:text-gray-700">
      <FaLinkedinIn />
    </Link>
    <Link href="https://www.pinterest.com" className="text-gray-500 hover:text-gray-700">
      <FaPinterestP />
    </Link>
  </div>
</div>
      </article>

      <section className="w-full mx-auto mt-10">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Comments - 03</h2>
        <div className="space-y-6">
          {/* Comment */}
          <div className="flex items-start space-x-4">
            <Image
              src="/blog-d-1.png"
              alt="User"
              width={150}
              height={150}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold">MD Sojib Khan</h3>
              <p className="text-sm text-gray-500">2 hours ago</p>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id varius eros.
              </p>
            </div>
          </div>
         
          <div className="flex items-start space-x-4">
            <Image
              src="/blog-d-2.png"
              alt="User"
              width={150}
              height={150}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold">MD Moon Khan</h3>
              <p className="text-sm text-gray-500">2 hours ago</p>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id varius eros.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Image
              src="/blog-d-3.png"
              alt="User"
              width={150}
              height={150}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold">MD Gulli Khan</h3>
              <p className="text-sm text-gray-500">2 hours ago</p>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id varius eros.
              </p>
            </div>
          </div>
       
        </div>
      </section>

      {/* Comment Form */}
      <section className="w-full mx-auto mt-10">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Post a Comment</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-orange-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-orange-300"
            />
          </div>
          <textarea
            placeholder="Write a comment..."
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
            rows={4}
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Post Comment
          </button>
        </form>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
