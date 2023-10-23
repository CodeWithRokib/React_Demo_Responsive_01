import React from 'react'
import Typed from 'react-typed';
const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
         <div className='max-w-[1240px] my-[150px] mx-auto text-center mt-4'>
              <div className='text-xl md:text-3xl font-bold md:p-[24px]'>
                Learn With Rokib 
              </div>
              <h2 className='text-white font-bold text-3xl md:text-[80px] md:p-[24px]'>Grow with Rokib</h2>
              <div className='text-3xl text-[20px] md:text-[80px] md:p-[24px] text-gray-600 font-bold '>
                Learn
                <Typed className='pl-3'
                    strings={['Web Development',"Digital Marketing", "Ethical Hacking"]}
                    typeSpeed={100}
                    loop={true}
                    
                />
              </div>
         </div>
    </div>
  )
}

export default Banner