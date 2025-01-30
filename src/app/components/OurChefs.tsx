import Image from "next/image";
import Link from "next/link";
// import ChefDill from "../../../public/assets/decorations/ChefsDill.png"; 

// Example chef data
const chefs = [
  {
    name: "D. Estwood",
    avatar: "/chef1.png", // Replace with your uploaded image paths
    status: "Chief Chef",
  },
  {
    name: "D. Scoriesh",
    avatar: "/chef2.png",
    status: "Assistant Chef",
  },
  {
    name: "M. William",
    avatar: "/chef3.png",
    status: "Advertising Chef",
  },
  {
    name: "W. Readfroad",
    avatar: "/chef4.png",
    status: "Chef",
  },
];


export const OurChef = () => {
  return (
    <div className="py-16 bg-black text-white relative">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#FF9F0D] text-2xl font-serif  italic">Chefs</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          <span className="text-[#FF9F0D]">Meet</span> Our Chefs
        </h2>
      </div>

      {/* Chef Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {chefs.map((chef) => (
          <div
            key={chef.name}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={chef.avatar}
              alt={chef.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
            {/* <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{chef.name}</h3>
              <p className="text-sm text-gray-400">{chef.status}</p>
            </div> */}
          </div>
        ))}
      </div>

      {/* "See More" Button */}
      <div className="text-center mt-12">
      <Link href="/ChefTeam" >
  <button className="inline-block bg-transparent border-2 border-[#FF9F0D] text-[#FF9F0D] px-6 py-3 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition duration-300">
    See More
  </button>
</Link>

      </div>

      
    </div>
  );
};
