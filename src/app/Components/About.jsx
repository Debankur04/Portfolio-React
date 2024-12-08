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
        <div className='my-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam asperiores incidunt voluptatem excepturi dolor voluptatibus est ut, nisi ducimus. A accusamus numquam cum sint nobis rerum molestias sapiente error optio!
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-evenly w-full gap-8 my-8 text-xl'>
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
            <div>
              <ul>
                <li><span className='text-red-600'>NextJS</span> <br /> Developing Front-End of Websites</li>
                <li><span className='text-red-600'>Python</span> <br /> Developing Python projects and AIML</li>
              </ul>
            </div>
          )}
          {activeTab === 'experience' && (
            <div>
              <ul>
                <li><span className='text-red-600'>CO- Founder OnCode</span> <br /> Freelancing Company around Web Development</li>
                <li><span className='text-red-600'>4X Hackathon Winner</span> <br /> 2X GNIT, 1X IEM, 1X IIT RPR</li>
              </ul>
            </div>
          )}
          {activeTab === 'education' && (
            <div>
              <ul>
                <li><span className='text-red-600'>B. Tech CSE</span> <br /> JIS University</li>
                <li><span className='text-red-600'>Higher Secondary</span> <br /> Aditya Academy Sr. Secondary</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
