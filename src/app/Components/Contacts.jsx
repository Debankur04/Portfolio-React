'use client'

import { Instagram, Linkedin, Twitter, Facebook,Send, Phone} from 'lucide-react'
import React from 'react'
import ContactUs from './ContactUs'
import IconsPlace from './IconsPlace'

const Contacts = () => {
  return (
    <div className='bg-black text-white p-4 flex justify-around'>
        <div>
          <div className='text-5xl py-8'>Contact Me</div>
          <div className='flex gap-4'>
          <Send/><div>debankurdutta04@gmail.com</div>
          </div>
          <div className='flex gap-4'>
          <Phone /><div>6291221388</div>
          </div>
          <div className='text-base'>
            <IconsPlace/>
          </div>
        </div>
        <ContactUs/>
    </div>
  )
}

export default Contacts