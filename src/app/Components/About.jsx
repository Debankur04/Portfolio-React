'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import AboutHeading from './AboutHeading';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills'); // State to track active tab

  return (
    <div className='flex flex-col lg:flex-row justify-evenly bg-black text-white'>
      {/* Left Image Section */}
      <Image
        src="/Main-Image.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className='my-2 h-1/4 rounded-3xl py-8'
      />

      {/* Right Content Section */}
      <div className='w-full lg:w-3/5 my-12'>
        <AboutHeading/>
        <div className='my-16'>
          I am Debankur Dutta, a dedicated Front-End Engineer with a deep passion for crafting intuitive and visually appealing websites. I thrive on solving complex problems and transforming ideas into functional, user-centric digital experiences. With a focus on innovation and continuous learning, I aim to create seamless interfaces that not only look great but also perform flawlessly.
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-evenly w-full gap-8 my-8 text-2xl'>
          <button
            className={`hover:text-red-600 ${activeTab === 'skills' && 'text-red-600'}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`hover:text-red-600 ${activeTab === 'experience' && 'text-red-600'}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`hover:text-red-600 ${activeTab === 'education' && 'text-red-600'}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        {/* Tab Content */}
        <div className='my-8'>
          {activeTab === 'skills' && (
            <div className='w-1/2'>
              <ul>
                <li className='my-4 text-lg'><span className='text-red-600'>NextJS</span> <br /> I use Next.js to build modern, SEO-friendly, and high-performance websites, ensuring a seamless blend of functionality and design.</li>
                <li className='my-4 text-lg'><span className='text-red-600'>Python</span> <br /> I use Python to develop efficient, versatile solutions, ranging from automation scripts to data-driven applications, ensuring clarity and functionality in every project.</li>
              </ul>
            </div>
          )}
          {activeTab === 'experience' && (
            <div className='w-1/2'>
              <ul>
                <li className='my-4 text-lg'><span className='text-red-600'>Co-Founder OnCode</span> <br /> Co-founder of OnCode, a freelancing company dedicated to delivering high-quality, tailored software solutions while fostering innovation and collaboration.</li>
                <li className='my-4 text-lg'><span className='text-red-600'>4X Hackathon Winner</span> <br />4X Hackathon winner, recognized for delivering innovative and impactful solutions in competitive, fast-paced environments.</li>
              </ul>
            </div>
          )}
          {activeTab === 'education' && (
            <div className='w-1/2'>
              <ul>
                <li className='my-4 text-lg'><span className='text-red-600'>B. Tech CSE</span> <br />Pursuing a B.Tech degree at JIS University, honing technical expertise and problem-solving skills to excel in the field of technology.</li>
                <li className='my-4 text-lg'><span className='text-red-600'>Higher Secondary</span> <br /> Completed Higher Secondary education at Aditya Academy Sr. Secondary, building a strong foundation in academics and analytical thinking.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
