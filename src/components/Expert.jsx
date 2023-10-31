import React from 'react'

const Expert = () => {
  return (
    <>
        <div className='max-w-[1200px] p-2 my-10 mx-auto  md:grid grid-cols-2  '>
            <div className='border  col-span-1 md:w-[80%]'>
                <img src="https://media.istockphoto.com/id/1182241805/photo/modern-laptop-with-empty-screen-on-white-background-mockup-design-copy-space-text.jpg?b=1&s=612x612&w=0&k=20&c=LCEl5NXBGjz80fmuKE97HffjoU-sjhf9i7JYY149YhU=" alt="..." className='inline' />
            </div>
            <div className='col-span-1 flex flex-col justify-center text-center'>
                 <h1 className='text-[#00df9a] font-bold mt-2'>Learn From Experts</h1>
                 <p className='mt-2 my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, praesentium? Vel quas deserunt ex voluptates quaerat odio facere doloribus laudantium blanditiis aspernatur. Necessitatibus unde, laboriosam quos hic neque ipsum non.</p>
                 <button className='bg-black mt-2 w-[30%] text-white p-3 rounded'>Get Started</button>
            </div>
            
        </div>
    </>
  )
}

export default Expert