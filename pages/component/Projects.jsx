import React from 'react'
import Image from 'next/image'

import Link from 'next/link'
import ProjectItems from './ProjectItems'
import ecommerce from '../../public/assets/projects/e-commerce.png'
import youtubeImg from '../../public/assets/projects/youtube.png'
import portfolio from '../../public/assets/projects/protifoli.png'
import HotelImg from '../../public/assets/projects/Hotel.png'



const Projects = () => {
  return (
    <div id='projects'  className='w-full'> 
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p> 
        <h2 className='py-4'>What I,ve Bulit</h2> 
        <div className='grid md:grid-cols-2 gap-8'>

         <ProjectItems 
         title="E-commerc projetc" 
         backgroundImag={ecommerce} 
         projectUrl="/ecommerce"
         tech='React JS'
         />

   

         <ProjectItems 
         title="Youtube project" 
         backgroundImag={youtubeImg} 
         projectUrl="/youtube"
         tech='React JS'
         />

         <ProjectItems 
         title="portfolio" 
         backgroundImag={portfolio} 
         projectUrl="/portfolio"
         tech='javescript'
         />

        <ProjectItems 
         title="Hotel demo" 
         backgroundImag={HotelImg} 
         projectUrl="/hotel"
         tech='React JS'
         />
        </div>
    </div>

    </div>
  )
}

export default Projects