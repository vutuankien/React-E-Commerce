import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Navbar = () => {

  const [visible, setVisible] = useState(false)

  const {setShowSearch,getCartCount} = useContext(ShopContext)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
        <img src={assets.logo}
          className='w-36'
          alt='Logo'
        />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p className='uppercase'>Home</p>
          <hr className='w-full border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p className='uppercase'>Collection</p>
          <hr className='w-full border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p className='uppercase'>About</p>
          <hr className='w-full border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p className='uppercase'>Contact</p>
          <hr className='w-full border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' />

        <div className='group relative'>
          <Link to={'/login'}><img className='w-5 cursor-pointer' src={assets.profile_icon} /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-500'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <Link to={'/orders'}><p className='cursor-pointer hover:text-black'>Orders</p></Link>
              <p className='cursor-pointer hover:text-black'>Logout</p>

            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 cursor-pointer' />
          <p className='absolute right-[-5px] top-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{getCartCount()}</p>
        </Link>

        <img onClick={() => {
          setVisible(!visible)
        }}
          src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' />
      </div>

      {/* Sidebar Menu for small Screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
            <img src={assets.dropdown_icon} className='h-4 rotate-180' />
            <p>Back</p>
          </div>
          <NavLink to="/" onClick={() => setVisible(false)} className="py-2 w-full pl-6 border">HOME</NavLink>
          <NavLink to="/collection" onClick={() => setVisible(false)} className="py-2 w-full pl-6 border">COLLECTION</NavLink>
          <NavLink to="/about" onClick={() => setVisible(false)} className="py-2 w-full pl-6 border">ABOUT</NavLink>
          <NavLink to="/contact" onClick={() => setVisible(false)} className="py-2 w-full pl-6 border">CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar