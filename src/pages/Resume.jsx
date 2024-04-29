import {ResumeJPG, ResumePDF} from '../assets/resume'
import Footer from '../components/Footer';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section className='max-container flex flex-col items-center'>
      <div className='mb-8'>
        <button className='blue-gradient_text w-60 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md' onClick={handleDownload}>
          Download Resume PDF
        </button>
      </div>
      <img className='mb-5' src={ResumeJPG} alt="Resume Image" />
      <hr className='border-slate-200'/>
      <Footer />
    </section>
  );
};

export default Resume;