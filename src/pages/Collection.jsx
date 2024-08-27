import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import {assets} from '../assets/assets.js'

const Collection = () => {

  const {products, search,showSearch} = useContext(ShopContext)

  const [allProducts,setAllProducts] = useState([])

  const [showFilter,setShowFilter] =  useState(false)

  const [category,setCategory] = useState([])

  const [sortType,setSortType] = useState('relavant')
  const [subCategory,setSubCategory] = useState([])

  const showFilterHandler = () => {
    setShowFilter(!showFilter)
  }


  const toogleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  } 

  const toogleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item!== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }


    setAllProducts(productsCopy)
  }

  const sortProducts = () => {
    let filterProductCopy = allProducts.slice();

    switch (sortType) {
      case 'low-high':
        setAllProducts(filterProductCopy.sort((a,b) => (a.price - b.price)))
        break;
      case 'high-low':
        setAllProducts(filterProductCopy.sort((a,b) => (b.price - a.price)))
        break;
      default:
        applyFilter();
        break;
    }
  }


  

  useEffect(() => {
    applyFilter()
  },[category,subCategory,search,showSearch])

  useEffect(() => {
    sortProducts()
  },[sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t '>
      {/* Filter Option */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'  onClick={showFilterHandler}>FILTER
        <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`}/>
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='uppercase mb-3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Men'} onChange = {toogleCategory}/><span>Men</span>
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Women'} onChange = {toogleCategory}/><span>Women</span>
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Kids'} onChange = {toogleCategory}/><span>Kids</span>
            </p>
          </div>
        </div>
        {/* SubCategories */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='uppercase mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Topwear'} onChange={toogleSubCategory}/><span>Topwear</span>
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Bottomwear'} onChange={toogleSubCategory}/><span>Bottomwear</span>
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Winterwear'} onChange={toogleSubCategory}/><span>Winterwear</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side  */}

      <div className='flex-1 '>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'COLLECTION'}/>
          {/* Product Sort */}
          <select className='border-2 border-gray-300 text-sm px-2' onChange= {(e) => setSortType(e.target.value)}>
            <option value='relavant'>Sort by : Relavant</option>
            <option value='low-high'>Sort by : Low to High</option>
            <option value='high-low'>Sort by:High to Low</option>

          </select>
        </div>

        {/* Render Product */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                  allProducts.map((item,index) => (
                        <ProductItem key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                }
            </div>
      </div>
    </div>
  )
}

export default Collection