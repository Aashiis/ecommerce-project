import Footer from '@/components/base_components/Footer'
import Navbar from '@/components/base_components/Navbar'
import { MdGppGood } from "react-icons/md";

const page = () => {
  // Calculate discounted price if discount is provided

  return (
    <div>
      <div>
        <Navbar />
        <div className='bg-pmw'>
          <div className='flex p-2 mx-auto py-5'>
            <div className='rounded-xl w-[70%]'>
              <div className='bg-white'>
                <h1 className='p-3 bg-gray-50'>Shipping Address</h1>
                <h1 className='p-3'>hupsikot-1 jugepani, thana chowk, kawasoti, gandaki province</h1>
              </div>
              <div className="h-5"></div>
              <div className='bg-white'>
                <h1 className='p-3 h-10 font-bold bg-gray-50'>Packages</h1>
                <div className='p-3'>
                  <h1>Available Delivery Option</h1>
                  {/* ----------------------------delivery option box---------------------------- */}
                  <div className='flex items-center gap-1 p-2  h-24 w-56 border rounded-md border-blue-700 cursor-pointer hover:bg-gray-100'>
                    <div className='h-16'>
                      <MdGppGood color='blue' size={25} />
                    </div>
                    <div className='h-16'>
                      <h1 className='text-sm'>Rs. 150</h1>
                      <h1 className='text-[13px]'>Standard Delivery</h1>
                      <h1 className='text-[13px]'>Guaranteed by 29 Dec-1 Jan</h1>
                    </div>
                  </div>
                  <div>
                    <div className='mt-10'>
                      {products.map((product, index) => (
                        <table className='mt-5'>
                          <tbody>
                            <tr>
                              <td className=''>{index + 1}</td>
                              <td className=''><img src={product.image} alt={product.name} height={70} width={70} /></td>
                              <td className='pl-5 w-96'><span >
                                <span>{product.name}</span>
                                <span className='text-[13px] text-gray-500'>{product.brand}</span>
                              </span></td>
                              <td className=' w-32'>
                                <span className='text-red-500 text-sm font-bold'>
                                  {product.discount && (product.discount + "% OFF")}
                                </span>
                                {product.discount && (<span className='line-through text-gray-500 text-sm'>Rs.{product.price}</span>)}
                                {!product.discount && (<span>Rs.{product.price}</span>)}
                                {product.discount && (<h1>Rs.{product.price * (100 - product.discount) / 100}</h1>)}
                              </td>
                              <td className=' w-32'>Quantity:{product.quantity}</td>
                            </tr>
                          </tbody>
                        </table> 
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white ml-3 w-1/3 p-3 h-[305px]'>
                      <h1 className='text-[23px]'>Order Summary</h1>
                      <table>
                        <tbody>
                          <tr>
                            <td className='w-[270px] text-gray-500'>Items Total(3 Items)</td>
                            <td className='text-xl'>Rs.599</td>
                          </tr>
                          <tr>
                            <td className='w-[270px] text-gray-500'>Delivery Fee</td>
                            <td className='text-xl'>Rs.125</td>
                          </tr>
                          <div className='h-10'></div>
                          <tr className='border-t-[1px]'>
                            <td className='w-[270px]'>Total:</td>
                            <td className='text-orange-500 text-2xl'>Rs.125</td>
                          </tr>
                        </tbody>
                      </table>
                      <button type='button' className='bg-blue-700 text-white w-full p-2 mt-16'>Proceed to Pay</button>
            </div>
          </div>
          <div></div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default page


const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 5000,
    discount: 20,
    quantity: 1,
    brand: 'No Brand',
    image: 'products/wireless-headphone.webp', // Example image
  },
  {
    id: 2,
    name: 'Smartwatch',
    price: 8000,
    quantity: 1,
    brand: 'No Brand',
    image: 'products/smart-watch.webp',
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: 7000,
    discount: 10,
    quantity: 1,
    brand: 'No Brand',
    image: 'products/gaming-mouse.webp',
  },
];