import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import Footer from '../components/Footer';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '',email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Juhyung",
        from_email: form.email,
        to_email: 'juhyung0313@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({show: true, text: 'Message sent successfully', type: 'success'});
      setTimeout(() => {
        hideAlert(false);
      }, [5000]);
      setForm({ name: '', email: '', message: ''});
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      showAlert({show: true, text: 'Failed to send message', type: 'danger'});
    })
  };
  return (
    <section className='relative flex flex-col max-container'>
      {alert.show && <Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14' ref={formRef} onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input 
              type='text' 
              name='name' 
              className='input' 
              placeholder='Juhyung' 
              required 
              value={form.name}
              onChange={handleChange}/>
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input 
              type='email' 
              name='email' 
              className='input' 
              placeholder='juhyung@gmail.com' 
              required 
              value={form.email}
              onChange={handleChange}/>
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea 
              name='message'
              rows={4}
              className='input' 
              placeholder='Type your Message Here' 
              required 
              value={form.message}
              onChange={handleChange}/>
          </label>
          <button
            type='submit'
            className='btn'
            disabled={isLoading}>
            {isLoading ? 'Sending...' : ' Send Message'}  
          </button>
        </form>
      </div>
      <hr className='border-slate-200'/>
      <Footer />
    </section>
  );
};

export default Contact;