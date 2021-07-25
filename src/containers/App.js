import {useState} from 'react'
import './App.css';

import Navbar from '../components/Navbar/Navbar';
import WhoAmI from '../components/WhoAmI/WhoAmI';
import Certs from '../components/Certifications/Certifications';
import MyStack from '../components/MyStack/MyStack';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';

function App() {

  const [curr,setCurr] = useState(0);

  const certs = [
    {
      src:'./images/api.png',
      link:'https://freecodecamp.org/certification/cihangonen/apis-and-microservices'
    },
    {
      src:'./images/frontend.png',
      link:'https://freecodecamp.org/certification/cihangonen/front-end-libraries'
    },
    {
      src:'./images/javascript.png',
      link:'https://freecodecamp.org/certification/cihangonen/javascript-algorithms-and-data-structures'
    },
    {
      src:'./images/responsive.png',
      link:'https://freecodecamp.org/certification/cihangonen/responsive-web-design'
    },
    {
      src:'./images/css.png',
      link:''
    }
  ]
  
  return (
    <div className="w-full lg:h-screen flex justify-center items-center">
      <div className="w-4/5 mx-auto pt-5 lg:w-full lg:h-screen lg:flex lg:justify-around lg:items-center lg:p-0">
        <Navbar curr={curr} setCurr={setCurr} />
        <div className="mt-5 mb-5 shadow-2xl rounded-md content-bg lg:w-7/12 lg:m-0 lg:h-4/6 overflow-y-auto">
          {curr===0 ? <WhoAmI/> 
            : curr===1 ? <Projects/>
            : curr===2 ? <Certs certs={certs} />
            : curr===3 ? <MyStack/>
            : <Experience/>
          }      
        </div>
      </div>
    </div> 
  );
}

export default App;
