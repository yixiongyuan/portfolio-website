import React from 'react'
import HeroImage from '../assets/heroImage.jpg';
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

function Home() {
  return (
    <div 
        name='home' 
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>This is Yixiong Yuan</h2>
                <p className='text-gray-400 py-4 max-w-md'>
                I'm a Graduated student from NYU with master degree of computer engineering pursuing a full-time software engineer position.
                </p>
                <div>
                    <button
                        className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                        from-cyan-500 to-blue-500'
                    >
                        Portfolio
                        <span className='ml-1 group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} />    
                        </span>
                        
                    </button>
                </div>
            </div>

            <div>
                <img 
                    src={HeroImage} 
                    alt="Zachary Yuan"
                    className='rounded-2xl mx-auto w-2/3 md:w-full md:scale-50 md:mt-5' 
                />
            </div>
        </div>
    </div>
  )
}

export default Home