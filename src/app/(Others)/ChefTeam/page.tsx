import { client } from "@/sanity/lib/client";
import MainBreadcum from "../../components/MainBreadCrum";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// Define type for chef data
interface Chef {
  name: string;
  position: string;
  price: number;
  experience: string;
  specialty: string;
  image: string;
  description: string;
  available: boolean;
  _id: string;
}

const ChefTeam = async () => {
  // Fetch query
  const chefQuery = `*[_type == "chef"]{
    name,
    position,
    price,
    experience,
    specialty,
    image,
    description,
    available,
    _id
  }`;

  // Fetch data from Sanity
  const chefData: Chef[] = await client.fetch(chefQuery);

  return (
    <>
      <MainBreadcum name="Our Chef" pageName="Our Chef" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <main className="py-12">
          <div className="container mx-auto px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {chefData.map((chef) => (
                <div
                  key={chef._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden text-center w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {/* Chef Image */}
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={urlFor(chef.image).url()}
                      alt={chef.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>

                  {/* Chef Details */}
                  <div className="p-5">
                    <h3 className="text-[20px] font-bold text-[#232323]">
                      {chef.name}
                    </h3>
                    <p className="text-[#333333] text-[18px]">
                      {chef.position}
                    </p>
                    {/* <p className="text-[#FF9F0D] text-[16px] font-semibold mt-2">
                      ${chef.price}/hour
                    </p> */}
                    <p className="text-gray-500 text-[14px] mt-2">
                      Experience: {chef.experience}
                    </p>
                    <p className="text-gray-500 text-[14px] mt-2">
                      Specialty: {chef.specialty}
                    </p>
                    <p className="text-gray-700 text-[14px] mt-2 line-clamp-3">
                      {chef.description}
                    </p>
                    {chef.available ? (
                      <span className="inline-block mt-4 px-3 py-1 bg-[#FF9F0D] text-white text-xs rounded">
                        Available
                      </span>
                    ) : (
                      <span className="inline-block mt-4 px-3 py-1 bg-red-500 text-white text-xs rounded">
                        Unavailable
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ChefTeam;
