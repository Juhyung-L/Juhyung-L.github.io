import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Home, Projects, Resume, Contact} from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return(
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/resume' element={<Resume />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
    </main>
  );
};

export default App;