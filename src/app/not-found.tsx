
import Link from "next/link"
import MainBreadcum from "../app/components/MainBreadCrum"
import Header from "./components/Header"
import Footer from "./components/Footer"

const NotFound = () => {
    return (

        <>
        <div className="bg-black">

        <Header />
        </div>
        <MainBreadcum name="404 Error" pageName="404"/>
        <div>
            
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-6xl font-bold text-primary_color mb-4">404</h1>
                <p className="text-xl font-medium text-gray-700 mb-2">
                    Oops! Looks like something went wrong
                </p>
                <p className="text-gray-500 mb-6">
                    Page cannot be found! We&apos;ll have it figured out in no time. <br />
                    Meanwhile, check out these fresh ideas:
                </p>
                <button
                    className="bg-[#FF9F0D] text-white px-6 py-2 rounded-md shadow-md hover:bg-primary_color transition"
                   
                >
                    <Link href={"/"}> Go to Home</Link>
                </button>
            </div>
        </div>
        <Footer/>
        </>

        
    )
}

export default NotFound