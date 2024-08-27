import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [phone, setPhone] = useState()

  const [method, setMethod] = useState('cod')

  const {navigate} = useContext(ShopContext)


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      {/*-------Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3 '>
          <input type='text' placeholder='First Name' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type='text' placeholder='Last Name' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type='email' placeholder='Email' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type='text' placeholder='Street' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className='flex gap-3 '>
          <input type='text' placeholder='City' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type='text' placeholder='State' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className='flex gap-3 '>

          <input type='text' placeholder='Zip Code' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type='text' placeholder='Country' required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <PhoneInput defaultCountry='Vie' placeholder='Phone Number' value={phone} onChange={setPhone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12 '>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* Payment method collection */}
          <div onClick={() => setMethod('stripe')} className='flex gap-3 flex-col lg:flex-row'>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='font-medium text-gray-500 uppercase text-sm'>Cash on delivery</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={() => navigate('/orders')}  className='uppercase text-white bg-black px-16 p-3 text-sm'>Place Order</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder