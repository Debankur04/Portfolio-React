import { Instagram, Linkedin, Twitter, Facebook,Send, Phone} from 'lucide-react'
import React from 'react'

const Contacts = () => {
  return (
    <div>
        <div>
          <div>Contact Me</div>
          <div className='flex gap-4'>
          <Send/><div>debankurdutta04@gmail.com</div>
          </div>
          <div className='flex gap-4'>
          <Phone /><div>6291221388</div>
          </div>
          <div className='flex gap-4'>
          <div href='https://www.instagram.com/debankur_04/'><Instagram /></div>
          <div  href='https://www.linkedin.com/in/debankur-dutta-8871a22b0/'><Linkedin/></div>
          </div>
        </div>
        <div></div>
    </div>
  )
}

export default Contacts