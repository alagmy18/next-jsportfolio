import React from 'react'
import Image from 'next/image'

import Link from 'next/link'

import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Social from './Social'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                Contact
            </p> 
            <h2>Get In Touch</h2> 
            <div className='grid lg:grid-cols-5 gap-8'>
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full rounded-xl '> 
                      <div className=' w-full h-96'>
                        <Image 
                        className='rounded-xl hover:scale-105 ease-in duration-300 w-full'       
                        src="/../public/assets/contact.jpg" 
                        alt="" width="100" height="300"
                        />
                      </div>
                      <div className='block'>
                         <h2 className='py-2'> Ahmed Alagmy</h2> 
                         <p>Iam Front-End Developers</p>
                         <p className='py-4'></p>
                      </div>
                      <div >
                        <p className='uppercase pt-8'>connect with me</p>
                        <Social/>
                   </div>
                 </div>
                </div>

                {/** right */} 
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
              
            
            </div>
            <div className='flex justify-end py-12'>
                    <Link href="/">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3  cursor-pointer hover:scale-105 ease-in duration-300'>
                           <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                        </div>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default Contact