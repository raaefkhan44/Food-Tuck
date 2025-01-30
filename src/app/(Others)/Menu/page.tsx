

import MainBreadcum from '@/app/components/MainBreadCrum'
import Image from 'next/image'




const Menu = () => {
    return (
        <div>
            <MainBreadcum name='Menu' pageName='Menu' />
            <div className="section1  w-[90%] lg:w-[80%] m-auto flex flex-col lg:flex-row items-center lg:items-start py-10 lg:py-10 space-y-6 lg:space-y-0 ">

                <div className="w-full lg:w-1/2 flex justify-start">
                    <Image
                        src="/menu-1.png"
                        alt="Starter Menu Dish"
                        width={448}
                        height={626}

                    />
                </div>


                <div className="w-full lg:w-1/2 lg:pl-10 pt-10 lg:p-5">
                    <div className="">

                        <Image
                            src="/Coffee.png"
                            alt="Starter Menu Dish"
                            width={24}
                            height={24}

                        />
                        <h2 className="sm:text-5xl text-4xl font-bold mb-6 flex items-center">
                            Starter Menu
                        </h2>
                    </div>
                    <div className="space-y-4">

                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Alder Grilled Chinook Salmon</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Toasted French bread topped with romano, cheddar</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">32$</p>
                        </div>


                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Berries and Creme Tart</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                <p className=" text-gray-400">700 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">43$</p>
                        </div>


                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Tormentoso Bush Pizza Pintoage</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Ground cumin, avocados, peeled and cubed</p>
                                <p className=" text-gray-400">1000 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">14$</p>
                        </div>


                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Spicy Vegan Potato Curry</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Spreadable cream cheese, crumbled blue cheese</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">35$</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2  w-[90%] lg:w-[80%] m-auto flex flex-col lg:flex-row items-center lg:items-start py-10 lg:py-10 space-y-6 lg:space-y-0 ">

                <div className="w-full lg:w-1/2 lg:pl-10  lg:p-5">
                    <div className="">

                        <Image
                            src="/Coffee.png"
                            alt="Starter Menu Dish"
                            width={24}
                            height={24}

                        />
                        <h2 className="sm:text-5xl text-4xl font-bold mb-6 flex items-center">
                            Main Course
                        </h2>
                    </div>
                    <div className="space-y-4">

                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold hover:text-[#FF9F0D] hover:cursor-pointer text-lg">Optic Big Breakfast Combo Menu</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Toasted French bread topped with romano, cheddar</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">32$</p>
                        </div>


                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Cashew Chicken With Stir-Fry</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                <p className=" text-gray-400">700 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">43$</p>
                        </div>


                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg"> Vegetables & Green Salad</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Ground cumin, avocados, peeled and cubed</p>
                                <p className=" text-gray-400">1000 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">14$</p>
                        </div>


                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Spicy Vegan Potato Curry</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Spreadable cream cheese, crumbled blue cheese</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">35$</p>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-1/2 flex justify-end">
                    <Image
                        src="/menu-2.png"
                        alt="Starter Menu Dish"
                        width={448}
                        height={626}

                    />
                </div>


            </div>

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

            <div className="section4  w-[90%] lg:w-[80%] m-auto flex flex-col lg:flex-row items-center lg:items-start py-10 lg:py-10 space-y-6 lg:space-y-0 ">

                <div className="w-full lg:w-1/2 flex justify-start">
                    <Image
                        src="/menu-3.png"
                        alt="Starter Menu Dish"
                        width={448}
                        height={626}

                    />
                </div>


                <div className="w-full lg:w-1/2 lg:pl-10 pt-10 lg:p-5">
                    <div className="">

                        <Image
                            src="/Coffee.png"
                            alt="Starter Menu Dish"
                            width={24}
                            height={24}

                        />
                        <h2 className="sm:text-5xl text-4xl font-bold mb-6 flex items-center">
                            Desserts
                        </h2>
                    </div>
                    <div className="space-y-4">

                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Pain au chocolat</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Toasted French bread topped with romano, cheddar</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">32$</p>
                        </div>


                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Pastry, blueberries, lemon juice</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                <p className=" text-gray-400">700 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">43$</p>
                        </div>


                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Creamy mascarpone cake</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Ground cumin, avocados, peeled and cubed</p>
                                <p className=" text-gray-400">1000 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">14$</p>
                        </div>


                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Creamy Plain Cake</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Spreadable cream cheese, crumbled blue cheese</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">35$</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section5  w-[90%] lg:w-[80%] m-auto flex flex-col lg:flex-row items-center lg:items-start py-10 lg:py-10 space-y-6 lg:space-y-0 ">

                <div className="w-full lg:w-1/2 lg:pl-10  lg:p-5">
                    <div className="">

                        <Image
                            src="/Coffee.png"
                            alt="Starter Menu Dish"
                            width={24}
                            height={24}

                        />
                        <h2 className="sm:text-5xl text-4xl font-bold mb-6 flex items-center">
                            Drinks
                        </h2>
                    </div>
                    <div className="space-y-4">

                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Tormentoso BushTea Pintoage</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Toasted French bread topped with romano, cheddar</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">32$</p>
                        </div>


                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Caffe Latte Campuri</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                <p className=" text-gray-400">700 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">43$</p>
                        </div>


                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg"> Aperol Spritz Capacianno</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Ground cumin, avocados, peeled and cubed</p>
                                <p className=" text-gray-400">1000 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">14$</p>
                        </div>


                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="sm:text-2xl hover:text-[#FF9F0D] hover:cursor-pointer font-bold text-lg">Caffè macchiato</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Spreadable cream cheese, crumbled blue cheese</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-[#FF9F0D] font-bold">35$</p>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-1/2 flex justify-end">
                    <Image
                        src="/menu-4.png"
                        alt="Starter Menu Dish"
                        width={448}
                        height={626}

                    />
                </div>


            </div>
            <div className="section6 py-20 w-[90%] lg:[80%] flex flex-col justify-between items-center m-auto min-h-[273px]">
                <p className="text-lg">Partners & Clients</p>
                <h1 className="text-5xl font-bold max-xl:pt-10 text-center max-sm:text-3xl">We work with the best people</h1>
                <div className="flex justify-evenly w-full flex-wrap items-center pt-10">
                    {[
                        { src: "/work.png", width: 240, height: 129 },
                        { src: "/image3.png", width: 166, height: 128 },
                        { src: "/image2.png", width: 143, height: 127 },
                        { src: "/image1.png", width: 130, height: 129 },
                        { src: "/image5.png", width: 169, height: 129 },
                        { src: "/image4.png", width: 113, height: 129 },
                    ].map((img, index) => (
                        <div
                            key={index}
                            className="image-container flex justify-center items-center h-[130px] w-[190px] transform transition-transform duration-300 hover:scale-110"
                        >
                            <Image src={img.src} alt={`Image ${index + 1}`} width={img.width} height={img.height} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Menu