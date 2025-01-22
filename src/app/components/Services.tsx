import React from 'react'
import { MdBrush } from 'react-icons/md'
import { FaLaptopCode, FaCode } from 'react-icons/fa'

function Page() {
  return (
    <div id='service' className='bg-gray-900 w-screen h-full pt-32 lg:px-16 sm:px-4 flex items-center justify-center flex-col'>
      
      <h1 className='lg:text-5xl sm:text-4xl text-yellow-500 font-bold font-Poppins text-center w-full pb-20 transition-all duration-300'>
        Services
      </h1>

      <div className='w-[90%] h-[60%] flex justify-center items-center'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6 h-full w-full'>
          
          {/* Web Designing */}
          <div className='bg-gray-800 flex flex-col items-center py-12 space-y-6 group hover:bg-yellow-500 transition duration-300 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105'>
            <FaLaptopCode className="h-20 w-20 text-yellow-500 group-hover:text-gray-800 transition-all duration-300" />
            <h1 className='text-white font-Poppins font-bold lg:text-2xl sm:text-xl'>
              Web Designing
            </h1>
            <p className='mx-6 text-white/95'>
              We specialize in web design, crafting user-friendly and aesthetically pleasing layouts to ensure an engaging online presence.
            </p>
            <div className='border-b border-yellow-500 lg:w-80 sm:w-[80%] border-2 group-hover:border-gray-800 transition duration-300'></div>
          </div>

          {/* Web Developing */}
          <div className='bg-gray-800 flex flex-col items-center py-12 space-y-6 group hover:bg-yellow-500 transition duration-300 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105'>
            <FaCode className="h-20 w-20 text-yellow-500 group-hover:text-gray-800 transition-all duration-300" />
            <h1 className='text-white font-Poppins font-bold lg:text-2xl sm:text-xl'>
              Web Developing
            </h1>
            <p className='mx-6 text-white/95'>
              We offer professional web development services to build dynamic, responsive, and high-performing websites tailored to your needs.
            </p>
            <div className='border-b border-yellow-500 lg:w-80 sm:w-[80%] border-2 group-hover:border-gray-800 transition duration-300'></div>
          </div>

          {/* Graphic Designing */}
          <div className='bg-gray-800 flex flex-col items-center py-12 space-y-6 group hover:bg-yellow-500 transition duration-300 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105'>
            <MdBrush className="h-20 w-20 text-yellow-500 group-hover:text-gray-800 transition-all duration-300" />
            <h1 className='text-white font-Poppins font-bold lg:text-2xl sm:text-xl'>
              Graphic Designing
            </h1>
            <p className='mx-6 text-white/95'>
              Our graphic design services focus on creating visually appealing designs, including illustrations, posters, and social media content.
            </p>
            <div className='border-b border-yellow-500 lg:w-80 sm:w-[80%] border-2 group-hover:border-gray-800 transition duration-300'></div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Page;
