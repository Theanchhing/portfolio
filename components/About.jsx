import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-5 gap-8'>
        <div className='col-span-3'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600 dark:text-slate-300'>
          I am a senior at Kirirom Institute of Technology majoring in Software Engineering. During four years in college, I have explored myself in different categories of working internships. I have a deep interest in designing and developing for both web and mobile Frontend to serve the user&apos;s satisfaction. As technologies move,  I am even more enthusiastic about exploring and experiencing new techs and applying them in real life, for example, currently Web3 or Blockchain Technology.
          </p>
          <p className='py-2 text-gray-600'>
          However, I am not limiting myself only to the Frontend side. While doing my job in front view, I am also developing my skills in the Backend and Database, for example, NodeJS, Express, MongoDB, PostgreSQL, etc. 
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='col-span-2 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
