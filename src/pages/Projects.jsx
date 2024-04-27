import {projects} from '../constants';
import {GitHub, Blogger, PersonalProjectColorless} from '../assets/icons';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={PersonalProjectColorless}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={GitHub}
                    alt='Github'
                    className='w-7 h-7 object-contain'>
                  </img>
                </a>
                <a
                  href={project.blogger}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={Blogger}
                    alt='Blogger'
                    className='w-7 h-7 object-contain'>
                  </img>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200'/>
      <Footer />
    </section>
  );
};

export default Projects;