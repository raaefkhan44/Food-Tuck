
import MainBreadcum from '@/app/components/MainBreadCrum'
import Products from '@/app/components/Products'
import Sidebar from '@/app/components/Sidebar'


const Shop = () => {

  return (
    <>
    <MainBreadcum name='Our Shop' pageName='Our Shop'/>
    <div className="w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%]">   
        <Products/>
        <Sidebar/>
      </div>
    </>  
  )
}

export default Shop
