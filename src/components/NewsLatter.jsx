import React from 'react'

const NewsLatter = () => {
  return (
    < >
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px] grid-cols-2'>
                <div className='col-span-1 md:w-[80%] m-2'>
                    <h1 className='text-[20px] md:text-[40px] text-white font-bold'>
                    Want to lern latest I.T skills?
                    </h1>
                    <span className='text-white'> Sign up to our newlatter and stay up to date.</span>
                </div>
                <div className='col-span-1 m-2'>
                    <input type="text" className='rounded mb-2 p-3 mr-2 text-slate-300' placeholder="Email" />
                    <button className='bg-black text-white p-3 rounded'>Get Started</button>
                    <br />
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti <br /> <a href="" className='text-black'>Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsLatter