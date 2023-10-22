import React from 'react'
import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai'
const Header = () => {
  return (
    
    <div className='bg-[#2699fb] p-4'>
         <div className="max-w-[1240px] py-[12
         px] items-center flex justify-between mx-auto">
               <div className='text-3xl font-bold'>
                  QuantamSolutions
               </div>
               <AiOutlineMenu className='text-white text-2xl md:hidden block'/>
               <AiFillCloseCircle className='text-white text-2xl md:hidden block'/>
               <ul className='md:flex hidden text-white gap-5'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Resorces
                </li>
                <li>
                    Contact
                </li>
               </ul>
         </div>
    </div>
    
  )
}

export default Header