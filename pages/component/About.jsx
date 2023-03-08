import React from 'react'
import Image from 'next/image'

import person from '../../public/assets/person-pic1.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p> 
                <p className='py-4'>Who I Am</p> 
                {/* <p className='py-2 text-gray-600' >Iam not your normal developer</p>  */}
                <p className='py-2 text-gray-600'>
                I am looking for an opportunity to grow professionally in a challenging environment <br/>
                where I can use my skills and experience to create innovative web-app solutions for<br/>
                client I am seeking an opportunity with a trustworthy organization where I can utilize<br/>
                 my skills. I have strong communication and interpersonal skills to collaborate with <br/>
                 team developers and create efficient solutions as per client needs. s. . I have <br/>
                 acquired knowledge of various tools and programming languages
                    <span className='block   '> Most languages I use </span> 
                    <span className=" block ml-2 mt-4">-React</span>
                    <span className="block  ml-2 ">-Node Js</span>
                     <span className='block  '>  Most Database I use  </span> 
                      <span className=" block ml-2 mt-4">- My SQL </span>
                      <span className="block  ml-2 ">- MongoDB</span>
                             
                </p>
      
            </div>
            <div className='
            w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4  
            hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={person} alt='image '/>

            </div>
        </div>

    </div>
  )
}

export default About