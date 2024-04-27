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
          An aspiring Robotics Software Engineer interested in programming robots.
          I am passionate about Robotics because it is an interdiscplinary field that combines Mechanical Engineer, Electrical Enginering, and Computer Science
          to solve real world problems. I am particularly interested in the Computer Science and programming aspect of Robotics.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'/>
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