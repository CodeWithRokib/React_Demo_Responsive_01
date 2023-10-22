import React, { useState } from 'react'
import {AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai'
const Header = () => {
    const [toggle, setToggle] = useState(true);
  return (
    
    <div className='bg-[#2699fb] p-4'>
         <div className="max-w-[1240px] py-[12px] items-center flex justify-between mx-auto">
               <div className='text-3xl font-bold'>
                  QuantamSolutions
               </div>
               {
                toggle ?
                <AiFillCloseCircle onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                :
                <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
               }
               <ul className='md:flex hidden bg-black gap-5'>
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

               {/* Responsive part */}
               <ul className={`md:hidden duration-300 text-white w-full h-screen fixed bg-black left-0 top-[67px]
               ${toggle ? 'left-[0]' : 'left-[-100%]'}
               `}>
                <li className='p-5'>
                    Home
                </li>
                <li className='p-5'>
                    About
                </li>
                <li className='p-5'>
                    Resorces
                </li>
                <li className='p-5'>
                    Contact
                </li>
               </ul>
         </div>
    </div>
    
  )
}

export default Header