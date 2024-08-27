import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subcribe now and get 20% discount</p>
            <p className='text-gray-400 mt-3'>lorem Ipsum is simply dummy text of the printing and typesetting industry for large print and typesetting companies and companies that make up the world. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s for typeetting</p>
            <form  onSubmit = {onSubmitHandler} className='mt-5 w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input type="email" placeholder='Your Email Address' className='w-full sm:flex-1 outline-none' required />
                <button type = 'submit' className='bg-black text-white text-base px-10 py-4 rounded-md'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLetterBox