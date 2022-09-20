import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ResumeImg1 from '../public/assets/resumes/1.png';
import ResumeImg2 from '../public/assets/resumes/2.png';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Theanchhing | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-4 gap-8 p-10'>
        <div className='col-span-2 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <Image src={ResumeImg1} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-2 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <Image src={ResumeImg2} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
    </>
  );
};

export default resume;
