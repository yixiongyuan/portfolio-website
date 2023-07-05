import React from 'react'
import libraySystem from '../assets/portfolio/library_system.png'
import movieSystem from '../assets/portfolio/movie_system.png'
import linkedinSystem from '../assets/portfolio/linkedin_clone.png'
import slackSystem from '../assets/portfolio/slack_clone.png'
import gmailSystem from '../assets/portfolio/gmail-clone.png'
import snapshotSystem from '../assets/portfolio/snapchat-clone.png'


function Portfolio() {

    const portfolios = [

        {
            id:1,
            src:libraySystem,
            demo:'https://library-react-project-fb290.firebaseapp.com',
            code:'https://github.com/yixiongyuan/React-SpringBoot-Library',
        },
        {
            id:2,
            src:movieSystem,
            demo:'http://ec2-54-85-215-89.compute-1.amazonaws.com:8080/MovieSystem/',
            code:'https://github.com/yixiongyuan/moviesystem',
        },
        {
            id:3,
            src:linkedinSystem,
            demo:'https://react-linkedin-clone-b6223.firebaseapp.com/',
            code:'https://github.com/yixiongyuan/React-Linkedin-Clone',
        },
        {
            id:4,
            src:gmailSystem,
            demo:'https://clone-zach.firebaseapp.com/',
            code:'https://github.com/yixiongyuan/React-Gmail-clone',
        },
        {
            id:5,
            src:slackSystem,
            demo:'https://slack-clone-zach.firebaseapp.com/',
            code:'https://github.com/yixiongyuan/React-Slack-clone',
        },
        {
            id:6,
            src:snapshotSystem,
            demo:'https://snapchat-clone-zach.firebaseapp.com/',
            code:'https://github.com/yixiongyuan/React-Snapchat-clone',
        },
    ]
  return (
    <div
        name = "portfolio"
        className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'
    >
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-6xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>

                <p className='text-2xl py-6'>
                    Check out some of my work right here !
                </p>
            </div>

            <div className='grid sm:px-0 sm:gird-cols-2 md:grid-cols-3 gap-8 px-12 '>

                {
                    portfolios.map(({id,src,demo,code}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img 
                                src={src}
                                alt="" 
                                className="rounded-md duration-200 hover:scale-105 h-2/3 w-full" 
                            />

                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105'>
                                    
                                    <a 
                                    href={demo} 
                                    className=" items-center text-2xl text-white font-bold"
                                    target='_blank'
                                    rel="noreferrer"
                                    >            
                                        Demo

                                    </a>
                                </button>
                                <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105'>
                                <a 
                                    href={code} 
                                    className=" items-center text-2xl text-white
                                    text-bold font-bold"
                                    target='_blank'
                                    rel="noreferrer"
                                    >            
                                        Code

                                    </a>
                                </button>
                            </div>
                        </div>
                    ))
                }
                
            </div>


        </div>
    </div>
  )
}

export default Portfolio