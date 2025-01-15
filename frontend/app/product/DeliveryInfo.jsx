import React from 'react'

const DeliveryInfo = ({deliveryCharge, sellerName}) => {
    if(!deliveryCharge){
        deliveryCharge = 100
    }else{
        deliveryCharge = deliveryCharge
    }
    return (
        <div>
            {/* Address Selection */}
            <div className="mb-6 w-60 mr-5 mt-3">
                <label className="block text-gray-700 font-semibold mb-2 text-[12px]">
                    Available Delivery Options
                </label>
                <div className="flex">
                    <img src="/icons/location.svg" width={30} height={30} />
                    <select className="w-full border border-gray-300 rounded-lg p-2">
                        <option>Choose an address...</option>
                        <option>Home - Kathmandu</option>
                        <option>Office - Pokhara</option>
                    </select>
                </div>

            </div>

            <hr className="mr-4 mb-4" />

            {/* Delivery Info */}
            <div className="mb-6">
                <p className="text-gray-700 flex">
                    <span><img className="mr-4" src="/icons/delivery.svg" width={20} height={20} /></span>
                    <span className="font-semibold text-[15px]">Standard Delivery:</span> Rs.{deliveryCharge}
                </p>
                <div className="flex mt-4">
                    <img className="mr-4" src="/icons/cod.svg" height={20} width={20} alt="" />
                    <p className="text-green-600 font-semibold text-[15px]">Cash on Delivery Available</p>
                </div>
            </div>

            <hr className="mr-4 mb-4" />

            {/* Return and Warranty */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-2 text-[12px]">
                    Return and Warranty:
                </h2>
                <p className="text-gray-600">🔁 14 Days Return Policy</p>
                <p className="text-gray-600">🛡 Warranty: Not Available</p>
            </div>

            <hr className="mr-4 mb-4" />

            {/* Seller Info */}
            <div className="mb-6">
                <h2 className="text-sm font-semibold text-gray-700">
                    Sold by:
                </h2>
                <p className="text-gray-600">{sellerName}</p>
            </div>
        </div>
    )
}

export default DeliveryInfo
