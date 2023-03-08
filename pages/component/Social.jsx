import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn,FaGithub , } from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'


const Social = () => {
  return (
    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

    <a target="_blank" href="https://www.linkedin.com/in/ahmed-ragab-b88a73237/" rel="noopener noreferrer" >
        <div className='rounded-full shadow-lg shadow-gray-400 p-3  cursor-pointer hover:scale-105 ease-in duration-75'>             
            <FaLinkedinIn/>          
        </div>
    </a>
    <a href="https://github.com/Ahmed6229" target="_blank" rel="noopener noreferrer">
        <div className='rounded-full shadow-lg shadow-gray-400 p-3  cursor-pointer hover:scale-105 ease-in duration-75'>
            <FaGithub/>
        </div>
    </a>
    <a href="mailto:ahmedalagmy868@gmail.com">
        <div className='rounded-full shadow-lg shadow-gray-400 p-3  cursor-pointer hover:scale-105 ease-in duration-75'>
            <AiOutlineMail/>
        </div>
     </a>
    <a href="https://twitter.com/ahmedalagmy888" target="_blank" rel="noopener noreferrer">
        <div className='rounded-full shadow-lg shadow-gray-400 p-3  cursor-pointer hover:scale-105 ease-in duration-75'>
          <ImTwitter/>
        </div>
     </a>
    </div>
  )
}

export default Social