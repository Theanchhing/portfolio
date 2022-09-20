import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { RiRadioButtonFill } from 'react-icons/ri';
import { ImBullhorn } from 'react-icons/im';


const Experience = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                Internship Experiences
            </p>
            <h2 className='py-4'>What I have explored</h2>
        </div>
        <div>
          <VerticalTimeline layout='1-column-left'>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2022 - Jul 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<RiRadioButtonFill />}
            >
              <h3 className="vertical-timeline-element-title">Team Leader</h3>
              <h4 className="vertical-timeline-element-subtitle">B6 Kirirom Digital Bootcamp</h4>
              <div className="mt-2 ml-4">
                <li>
                  Project planning
                </li>
                <li>
                    Team coordinating and management
                </li>
                <li>
                    Frontend development
                </li>
                <li>
                    App integration
                </li>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Dec 2021 - Apr 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<RiRadioButtonFill />}
            >
              <h3 className="vertical-timeline-element-title">Fintech And Data Analysis Trainee</h3>
              {/* <h4 className="vertical-timeline-element-subtitle">Coin Cloud Co., Ltd</h4> */}
              <div className="mt-2 ml-4">
                <li>
                  Develop a stock trading bot and connect with Alpaca platform
                </li>
                <li>
                  Develop the spot trading and future trading bot with Binance platform
                </li>
                <li>
                    Trading Strategies: MACD, SMA, EMA, Bollinger Bands,etc
                </li>
                <li>
                    Technologies: Python, Pandas, Numpy,etc
                </li>
              </div>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="Oct 2021 - Jan 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<RiRadioButtonFill />}
            >
              <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">NAPT Startup</h4>
              <div className="mt-2 ml-4">
                <li>
                  Web ddevelopment training
                </li>
                <li>
                    NAPT's Landing Page
                </li>
                <li>
                    Technologies: React Js, HTML, CSS, Bootstrap
                </li>
              </div>
            </VerticalTimelineElement> */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Aug 2021 - Nov 2021"
              iconStyle={{ background: '#F36D3A', color: '#fff' }}
              icon={<ImBullhorn />}
            >
              <h3 className="vertical-timeline-element-title">Graphic Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">Coin Cloud Co., Ltd</h4>
              <div className="mt-2 ml-4">
                <li>
                  Poster designing
                </li>
                <li>
                    Video editing
                </li>
                <li>
                    Motion graphic designing (2D animation video)
                </li>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jan 2021 - Jun 2021"
              iconStyle={{ background: '#00B09D', color: '#fff' }}
              icon={<RiRadioButtonFill />}
            >
              <h3 className="vertical-timeline-element-title">Project Coordinator</h3>
              <h4 className="vertical-timeline-element-subtitle">NAPT Statup</h4>
              <div className="mt-2 ml-4">
                <li>
                    Project roadmap
                </li>
                <li>
                    Budget planning
                </li>
                <li>
                    Features and Funtionalities research
                </li>
                <li>
                    Schudule and organize to keep the project running smoothly
                </li>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jul 2019 - Nov 2019"
              iconStyle={{ background: '#F36D3A', color: '#fff' }}
              icon={<ImBullhorn />}
            >
              <h3 className="vertical-timeline-element-title">Graphic Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">DGK Virtual Company</h4>
              <div className="mt-2 ml-4">
                <li>
                    Poster designing
                </li>
                <li>
                    Video editing
                </li>
                <li>
                    Photography and videography
                </li>
                <li>
                    Photo coloring and editing
                </li>
                <li>
                    Content creating and planning
                </li>
              </div>
              
            </VerticalTimelineElement>
            
          </VerticalTimeline>
        </div>
    </div>
  );
};

export default Experience;
