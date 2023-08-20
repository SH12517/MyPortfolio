import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './component/navbar/Navbar';
import { Intro } from './component/Intro/Intro';
import Services from './services/Services';
import Experience from './component/Experience/Experience';
import { Work } from './component/work/Work';
import { Portfolio } from './component/portfolio/Portfolio';
import { Testimonial } from './component/Testimonial/Testimonial';
import Contact from './component/Testimonial/Cantact'
import Footer from './component/portfolio/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';
function App(){
  const theme= useContext(themeContext)
  const darkMode =theme.state.darkMode;
  return (
   <div className='App'
   style={{background:darkMode ? 'black':'',
    color:darkMode ? 'white':''}}>
   <Navbar/>
   <Intro/>
   <Services/>
   <Experience/>
   <Work/>
   <Portfolio/>
   <Testimonial/>
   <Contact/>
   <Footer/>
  
    
    
   </div>
  );
}

export default App;
