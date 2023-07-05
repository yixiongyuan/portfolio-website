import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-6xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-3xl mt-20 w-full'>
          This website is built by react JS as a personal training project.
          <br/>
          <br/>
          I am now working with adding backend and database storation.
          <br/>
          <br/>
          There will be more blocks and functions displayed.

        </p>


        <p className='text-4xl text-right my-6 py-6'>
          Yixong Yuan
        </p>

      </div>
    </div>
  )
}

export default About