  import React from "react";
  import Image from "next/image";

  export default function ImageGrid() {
    const items = [
      { src: "/yogurt.png", label: "Fast Food Dish", badge: "Save 30%" },
      { src: "/burger.png", label: "Fast Food Dish", badge: "Save 30%" },
      { src: "/chaat.png", label: "Fast Food Dish", badge: "Save 30%" },
      { src: "/donuts.png", label: "Fast Food Dish", badge: "Save 30%" },
    ];

    const images = [
      { src: "/why-1.png", alt: "food item" },
      { src: "/burger.png", alt: "food item" },
      { src: "/why-3.png", alt: "food item" },
      { src: "/why-2.png", alt: "food item" },
      { src: "/why-4.png", alt: "food item" },
      { src: "/why-5.png", alt: "food item" },
    ];

    return (
      <div>
        <div
          className="bg-cover bg-no-repeat bg-black text-white"
          style={{ backgroundImage: "url('/bg-3.png')" }}
        >
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <Image
                  src={item.src}
                  alt={item.label || "Food item"}
                  width={300} 
                  height={300} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-40 left-10 w-24 h-10 bg-white text-yellow-500 font-extrabold text-sm rounded opacity-0 transform translate-y-4 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  {item.badge}
                </div>
                <div className="absolute bottom-10 left-10 w-32 bg-yellow-500 text-center py-2 text-white font-bold rounded opacity-0 transform translate-y-4 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          {/* pg:2 strt  */}
          <div className="grid grid-cols-1 mt-80 lg:grid-cols-2 gap-8 p-8">
            <div className="grid grid-cols-3 grid-rows-3 gap-4">
              <div className="row-span-2 col-span-2 overflow-hidden rounded-lg">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              {images.slice(1).map((image, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <section className="px-6">
              <h3 className="text-4xl text-[#FF9F0D] font-serif italic font-bold mb-4">
                Why Choose Us
              </h3>
              <h3 className="text-3xl mb-6">
                <span className="text-[#FF9F0D]">Ex</span>traordinary Taste and Experience
              </h3>
              <p className="text-lg mb-8">
                We bring you years of experience with top-notch culinary skills,
                offering a variety of delicious meals prepared with love and precision.
              </p>
              <ul className="flex flex-wrap gap-6">
                {[{ src: "/burger-logo.png", label: "Fast Food" }, { src: "/Wine.png", label: "Lunch" }, { src: "/Cookie.png", label: "Dinner" }].map((item, idx) => 
                  <li key={idx} className="text-center">
                    <div className="bg-[#FF9F0D] transform hover:scale-110 p-5 mb-2 w-20 h-20 rounded-lg shadow-md flex items-center justify-center">
                      <Image
                        src={item.src}
                        alt={item.label}
                        width={50}
                        height={50}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                    <span className="font-semibold text-lg">{item.label}</span>
                  </li>
                )}
              </ul>
              <div className="flex justify-between items-center bg-gray-200 w-full md:w-4/5 p-4 mt-6 rounded-lg border-l-8 border-[#FF9F0D] shadow-lg">
                <span className="text-5xl font-bold text-[#FF9F0D]">30+</span>
                <div>
                  <p className="text-black text-lg">Years of</p>
                  <span className="text-black text-xl font-bold">Experience</span>
                </div>
              </div>
            </section>
          </div>

          <div className="bg-black mx-auto py-16">
            <div
              className="relative bg-food h-auto bg-cover bg-center flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-16 text-center text-white px-4">
                <div>
                  <Image
                    src="/soda-1.png"
                    alt="Professional Chefs Icon"
                    width={200} 
                    height={200} 
                    className="mx-auto mb-4 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] transform transition-transform duration-300 hover:scale-110"
                  />
                  <div className="text-sm sm:text-base lg:text-lg">Professional Chefs</div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">420</div>
                </div>

                <div>
                  <Image
                    src="/soda-2.png"
                    alt="Items of Food Icon"
                    width={300} 
                    height={300} 
                    className="mx-auto mb-4 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] transform transition-transform duration-300 hover:scale-110"
                  />
                  <div className="text-sm sm:text-base lg:text-lg">Items Of Food</div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">320</div>
                </div>

                <div>
                  <Image
                    src="/soda-3.png"
                    alt="Years of Experience Icon"
                    width={300} 
                    height={300} 
                    className="mx-auto mb-4 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] transform transition-transform duration-300 hover:scale-110"
                  />
                  <div className="text-sm sm:text-base lg:text-lg">Years Of Experience</div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">30+</div>
                </div>

                <div>
                  <Image
                    src="/soda-4.png"
                    alt="Happy Customers Icon"
                    width={300} 
                    height={300} 
                    className="mx-auto mb-4 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] transform transition-transform duration-300 hover:scale-110"
                  />
                  <div className="text-sm sm:text-base lg:text-lg">Happy Customers</div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">220</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
