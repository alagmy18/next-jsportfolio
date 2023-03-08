import React from 'react'
import Social from './Social'

const Main = () => {


   
  return (
    <div id='main' className='w-full h-screen text-center '>
        <div className='
        max-w-[1240px] w-full h-full mx-auto p-2 
        flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600 '>lets buld toghter </p>
               <h1 className='py-4 text-gray-700'>
                Hi, I,am Ahmed Alagmy<span className='text-[#5651e5]'> client</span>
                </h1>
                <h1 className='py-4 text-gray-700 ' >
                    Iam front end developer 
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Iam Frontend web developer specializing in buliding website Currently, Iam focused on building 
                responsive response front-end web applications while learning back-end technologies
                </p>
              < Social/>
            </div>

        </div>


    </div>
  )
}

export default Main