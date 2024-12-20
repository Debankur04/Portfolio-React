'use client'
import React from 'react'
import Image from 'next/image'

const BlackHole = () => {
  return (
    <section
    className="h-screen"
    style={{
      backgroundImage: `
        radial-gradient(circle at top, #000 35%, #733000 45%, #000 75%)
      `
    }}
  >
    
    <div className='h-screen flex justify-around'>
      <div className='text-left px-4 py-72 text-white flex items-center'>
        <div>
          <div className='text-5xl'>Debankur Dutta</div>
          <div className='text-2l'>Front-End Engineer</div>
          <div className='flex gap-2'>
            <div className=''>NextJs</div>
            <div className=''>Python</div>
            <div className=''>ReactJs</div>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
      <Image
      src="/Main-Image-jpeg.jpeg"
      width={500}
      height={500}
      alt="Picture of the author"
      className='my-2 h-3/4 rounded-lg'
    />
      </div>
    </div>
  </section>
  )
}

export default BlackHole