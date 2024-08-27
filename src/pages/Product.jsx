import React, { useContext, useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'

const Product = () => {

  const {productId} = useParams()
  const {products,currency,AddToCart} = useContext(ShopContext)
  const [image,setImage] = useState("")
  const [productData,setProductData] = useState(false)
  const [size,setSize] = useState("")

  const fetchProductData = async () => {
    products.map((item) => {
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId,products])


  return  productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
    {/* ProductData */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index) => (
                <img onMouseOver={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto'/>
          </div>
        </div>

        {/* Product Infor */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3' src={assets.star_icon}/>
            <img className='w-3' src={assets.star_icon}/>
            <img className='w-3' src={assets.star_icon}/>
            <img className='w-3' src={assets.star_icon}/>
            <img className='w-3' src={assets.star_dull_icon}/>
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? ' bg-red-300' : ''}`} key={{index}}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => AddToCart(productData._id,size)} className='py-3 px-10 text-white bg-red-300 rounded-full active:bg-red-700'>Add to Cart</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original products</p>
              <p>Cash on delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description and review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review(122)</p>
        </div>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              Irure consectetur ad consequat sunt in minim. Ex cupidatat ea deserunt ea incididunt aliqua ea. Eiusmod officia consequat fugiat adipisicing fugiat sint ex ex nisi nisi. Aute sint nulla proident eiusmod incididunt sint fugiat aute sint duis.
              <br />
Id ex elit ad laboris commodo elit ea non ea Lorem velit. Eu non consectetur id enim dolor dolore voluptate enim tempor. Et consectetur dolore id amet cillum mollit excepteur sint sit nulla aliqua velit.
              <br/>
Culpa aliqua veniam pariatur esse ad irure labore ad adipisicing culpa sit proident consectetur. Laborum commodo aliqua aliqua ad nostrud velit. Aliqua minim quis elit irure dolore excepteur labore aliqua occaecat nisi magna. Amet proident ullamco qui amet amet laboris quis irure quis.
      </div>


        {/* Display relative Products */}
        <RelatedProduct category = {productData.category} subCategory = {productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product