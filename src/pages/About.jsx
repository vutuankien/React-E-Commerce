import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Deserunt nisi elit minim dolor adipisicing officia do deserunt. Ad velit do non occaecat do duis velit culpa consectetur aute in sunt. Velit fugiat mollit esse aute in occaecat esse culpa ullamco esse adipisicing.
            In non Lorem Lorem aliqua sit magna ea. Commodo et in ipsum commodo. Laboris laborum enim aliqua fugiat enim non tempor esse exercitation labore in eu ullamco. Aute ex officia labore labore. In aliquip non enim id irure esse duis dolore irure reprehenderit.
          </p>
          <p>Duis nostrud amet eu tempor incididunt culpa veniam esse aliqua voluptate. Nisi elit ad eu labore aliqua amet commodo et. Pariatur adipisicing minim eu in et consectetur cillum consectetur est aliqua. Do enim exercitation amet excepteur eu quis est. Est tempor pariatur magna reprehenderit proident aliqua in cillum deserunt cillum elit cillum. Amet officia veniam cillum aliquip proident.

            Enim dolore dolore excepteur aliquip minim id nostrud labore anim laboris pariatur magna. Aliqua sint Lorem non velit exercitation aliqua do. Ullamco enim ea proident excepteur quis elit culpa irure esse deserunt ea cupidatat.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Labore mollit laboris consectetur incididunt minim ex. Enim nisi magna consectetur esse proident occaecat non aute sit laborum do non laboris aliqua. Do cupidatat id nulla veniam ex sint mollit occaecat in nulla irure quis dolore. Anim amet eu occaecat sit aliqua culpa mollit non occaecat est. Mollit ea aliquip pariatur incididunt elit est.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero vel semper consectetur, urna mauris commodo velit, vel consectetur turpis lectus non justo.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenion: </b>
          <p className='text-gray-600'>Amet laboris laborum aliquip consectetur minim. Sunt ipsum deserunt sint aliqua dolor nisi ut commodo. Adipisicing nisi enim ex amet nulla eiusmod cupidatat duis elit quis officia. Velit consectetur cupidatat do dolor cupidatat cillum.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Amet laboris laborum aliquip consectetur minim. Sunt ipsum deserunt sint aliqua dolor nisi ut commodo. Adipisicing nisi enim ex amet nulla eiusmod cupidatat duis elit quis officia. Velit consectetur cupidatat do dolor cupidatat cillum.</p>
        </div>
      </div>

      <NewsLetterBox/>
    </div>


  )
}

export default About