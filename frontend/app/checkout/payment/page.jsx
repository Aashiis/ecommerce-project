'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const PaymentMethodPage = () => {
    const [cashOnDeliverySelected, setCashOnDeliverySelected] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter();

    const handleCashOnDeliveryClick = () => {
      setCashOnDeliverySelected(true);
    };


  const handleConfirmOrderClick = () => {
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        router.push("/"); // Use router.push to navigate
      }, 3000);
  };


  return (
    <div>
      <div>
        <div className='flex bg-pmw'>
          <div className='h-screen bg-pmw p-10'>
            <div className='text-3xl m-3'>
              Select Payment Method
            </div>
            <div className='flex'>
              <div className='h-36 w-36 text-center content-center bg-white ml-2 cursor-not-allowed'> <img src="/images/cc.jpg" alt="Credit Card" />Credit/Debit Card</div>
              <div className='h-36 w-36 text-center content-center bg-white ml-2 cursor-not-allowed'> <img src="/esewa.png" alt="esewa" />esewa Mobile Wallet</div>
              <div className='h-36 w-36 text-center content-center bg-white ml-2 cursor-not-allowed'> <img src="/ime-pay.png" alt="imepay" />IME Pay</div>
              <div
                className='h-36 w-36 text-center content-center bg-white ml-2 cursor-pointer'
                onClick={handleCashOnDeliveryClick}
              >
                  <img src="/cod.png" alt="Cash on Delivery" />
                  Cash on Delivery
              </div>
              {cashOnDeliverySelected && (
                <div className='h-36 w-36 text-center content-center bg-white ml-2'>
                   <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                      onClick={handleConfirmOrderClick}
                    >
                        Confirm Order
                    </button>
                </div>
                )}
             </div>
            <div>
              At This Time only cash on delivery available so go with that.
            </div>
           </div>
        </div>

          {showPopup && (
            <div className="popup">
                <div className="popup-content">
                    <p>Your order has been submitted successfully!</p>
                </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default PaymentMethodPage;