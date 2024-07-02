import {skills, experiences} from '../constants';
import {VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import {socialLinks} from '../constants';
import Footer from '../components/Footer';
import 'react-vertical-timeline-component/style.min.css';

const Home = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Juhyung</span>
      </h1>
      <div className='flex flex-wrap my-20 gap-16'>
        {socialLinks.map((socialLink) => (
          <div className='lg:w-[30px] w-full' key={socialLink.name}>
            <div className='flex items-center gap-2'>
              <a
                href={socialLink.link}
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src={socialLink.iconUrl}
                  alt='Social Link Icon'
                  className='w-10 h-10 object-contain'>
                </img>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am a aspiring software engineer with a special interest in Robotics.
          I started programming in my junior year at the University of Rochester and ever since then, I have been involved in a variety of different Robotics-related projects.
          I graduated from college in May of 2023 and I am currently looking for a full-time position.
          The purpose of this website is to showcase my personal projects. Please check them out and shoot me a message on Linkedin or through the Contact page if you are interested.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-32 h-32' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'/>
                <p className='text-xs m-1'>
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Experiences</h3>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement 
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[100%] h-[100%] object-contain'/>
                </div>}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBG,
                  boxShadow: 'none',
                }}
                iconStyle={{
                  borderStyle: 'solid',
                  boxShadow: 'none',
                }}>
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200'/>
      <Footer />
    </section>
  );
};

export default Home;