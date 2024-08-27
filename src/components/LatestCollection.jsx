import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { products } from '../assets/assets'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const [latestProducts,setLastestProducts] = useState([])

    const { products } = useContext(ShopContext)

    useEffect(() => {
        setLastestProducts(products.slice(0,10))
    },[])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    lorem Ipsum is simply dummy text of the printing and typesetting industry for large print and typesetting companies and companies that make up the world. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s for typeetting
                </p>
            </div>

            {/* Rendering Product */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item,index) => (
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
    )
}

export default LatestCollection