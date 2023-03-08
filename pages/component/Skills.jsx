import React from 'react'
import Image from 'next/image'

import SkillsItem from './SkillsItem'

const Skills = () => {
  return (
    <div id='skills'  className='w-full md:h-screen p-2 '>
        <div className='max-w-[1240px] mx-auto flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p> 
            <h2 className='py-4'>What I can Do</h2> 
            <div className='grid md:grid-cols-2 lg:grid-cols-4  gap-8'>
                <SkillsItem ImageSrc="/../public/assets/skills/html.png" title="Html" />
                <SkillsItem ImageSrc="/../public/assets/skills/css.png" title="Css" />
                <SkillsItem ImageSrc="/../public/assets/skills/github1.png" title="Github" />
                <SkillsItem ImageSrc="/../public/assets/skills/javascript.png" title="Javascript" />
                <SkillsItem ImageSrc="/../public/assets/skills/mongo.png" title="mongo DB" />
                <SkillsItem ImageSrc="/../public/assets/skills/nextjs.png" title="Next js" />
                <SkillsItem ImageSrc="/../public/assets/skills/node.png" title="Node-js" />
                <SkillsItem ImageSrc="/../public/assets/skills/react.png" title="React-js" />
                <SkillsItem ImageSrc="/../public/assets/skills/tailwind.png" title="tailwind" />
            </div>
        </div>
    </div>
  )}

export default Skills