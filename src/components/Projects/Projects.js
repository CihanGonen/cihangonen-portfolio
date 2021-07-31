// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Projects.css';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Projects = ()=>{
  return (
    <div className="h-full flex justify-between">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="flex flex-col gap-5 px-6 pb-8 lg:pb-12 items-center">
            <div class="img-wrapper pt-2 w-11/12 lg:w-6/12">
              <img className="project-img rounded-md" width='100%' alt='proje' src='./images/studyTimer1.png'></img>  
            </div>
            <div className="w-11/12 flex flex-col pl-2 lg:flex-row justify-around">
              <div className="w-11/12 lg:w-5/12">
                <div className="projects flex justify-center gap-5">
                  <i className="devicon-html5-plain"></i>
                  <i className="devicon-css3-plain"></i>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-tailwindcss-plain"></i>
                </div>
                <h2 className="pt-2 text-xl">Study Timer</h2>
                <p className="text-sm">
                  It's a timer that you can both set a break and study sessions.
                  Also if you like me and love to study with ambiance sounds you can choose them on the top.
                </p>
                <div className="flex justify-center items-center pt-5 gap-5 font-bold">
                  <a className="block" target='_blank' rel="noreferrer" href="https://studytimerbycihan.herokuapp.com/">Live App</a>
                  <a className="block" target='_blank' rel="noreferrer" href="https://github.com/CihanGonen/study-timer">Source Code</a>
                </div>
              </div>
              <div className="w-11/12 lg:w-5/12">
                <p className="text-sm">
                  I started developing this app from the design and basically I put all elements where i want
                  them. Then I choosed the images and I choosed colors related to these images. After that I 
                  developed a basic music player app to learn about using sounds and I also developed a timer
                  by using vanilla javascript. Then I used all of my knowledge and put it together on this
                  app. I used useEffect,useState and useRef hooks. useRef helped me with audios a lot.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-5 px-6 pb-8 lg:pb-12 items-center">
            <div class="img-wrapper pt-2 w-11/12 lg:w-6/12 ">
              <img className="project-img rounded-md border border-black" width='100%' alt='proje' src='./images/sunnySide.png'></img>  
            </div>
            <div className="w-11/12 flex flex-col pl-2 lg:flex-row justify-around">
              <div className="w-11/12 lg:w-5/12">
                <div className="projects flex justify-center gap-5">
                  <i className="devicon-html5-plain"></i>
                  <i class="devicon-sass-original"></i>
                  <i className="devicon-javascript-plain"></i>
                </div>
                <h2 className="pt-2 text-xl">SunnySide Landing Page</h2>
                <p className="text-sm">
                  It's a landing page. I got it's design from Frontend Mentor and created it using html, sass and javascript. It's fully responsive. Do not forget the check the mobile version.
                </p>
                <div className="flex justify-center items-center pt-5 gap-5 font-bold">
                  <a className="block" target='_blank' rel="noreferrer" href="https://cihangonen.github.io/sunnySide-landingPage/">Live App</a>
                  <a className="block" target='_blank' rel="noreferrer" href="https://github.com/CihanGonen/sunnySide-landingPage">Source Code</a>
                </div>
              </div>
              <div className="w-11/12 lg:w-5/12 self-center">
                <p className="text-sm">
                  At first I created variables and globals scss files. When I'm coding landing pages I start at the top and untill I finish it on both mobile and desktop I don't keep going. So I also started from the header in this project and created every part like that. I used javascript for responsive menu.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col gap-5 px-6 pb-8 lg:pb-12 items-center">
            <div class="img-wrapper pt-2 w-11/12 lg:w-6/12">
              <img className="project-img rounded-md" width='100%' alt='proje' src='./images/smartEdu.png'></img>  
            </div>
            <div className="w-11/12 flex flex-col pl-2 lg:flex-row justify-around">
              <div className="w-11/12 lg:w-5/12">
                <div className="projects flex justify-center gap-5">
                  <i className="devicon-javascript-plain"></i>
                  <i class="devicon-nodejs-plain"></i>
                  <i class="devicon-express-original"></i>
                  <i class="devicon-mongodb-plain"></i>
                </div>
                <h2 className="pt-2 text-xl">SmartEdu Project</h2>
                <p className="text-sm">
                It's a udemy like web-page. There are 3 types of users. Student, teacher, admin. As a teacher you can create courses and see your students. As a student you can enroll to courses and as an admin you 
                can manage all courses and students. Only backend.
                </p>
                <div className="flex justify-center items-center gap-5 font-bold">
                  <a className="block" target='_blank' rel="noreferrer" href="https://smartedu-project.herokuapp.com/">Live App</a>
                  <a className="block" target='_blank' rel="noreferrer" href="https://github.com/CihanGonen/SmartEduProject">Source Code</a>
                </div>
              </div>
              <div className="w-11/12 lg:w-5/12">
                <p className="text-sm">
                I choosed a template for the project and started building on top of it. I used mvc pattern to build my logic. There are many asynchronous operations. I used ejs as a template engine to use conditions. I used mongoDB for holding informations of users and also sessions by express-session. I also crypted passwords for security reasons using bcrypt.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col gap-5 px-6 pb-8 lg:pb-12 items-center">
            <div class="img-wrapper pt-2 w-11/12 lg:w-6/12">
              <img className="project-img rounded-md border border-black" width='100%' alt='proje' src='./images/trackYourProgress.png'></img>  
            </div>
            <div className="w-11/12 flex flex-col pl-2 lg:flex-row justify-around">
              <div className="w-11/12 lg:w-5/12">
                <div className="projects flex justify-center gap-5">
                  <i class="devicon-react-original"></i>
                  <i class="devicon-nodejs-plain"></i>
                  <i className="devicon-javascript-plain"></i>
                  <i class="devicon-express-original"></i>
                  <i class="devicon-mongodb-plain"></i>
                  <i class="devicon-d3js-plain"></i>
                  <i class="devicon-tailwindcss-plain"></i>
                </div>
                <h2 className="pt-2 text-xl">Track Your Progress</h2>
                <p className="text-sm">
                It's my first React project. I wanted to include the first one. It's an app that you can save an exercise and update it with new informations. Your exercise page also displays your improvement. You can delete them or add a new one whenever you want.
                </p>
                <div className="flex justify-center items-center gap-5 font-bold">
                  <a className="block" target='_blank' rel="noreferrer" href="https://track-your-progress.herokuapp.com/">Live App</a>
                  <a className="block" target='_blank' rel="noreferrer" href="https://github.com/CihanGonen/trackYourProgress">Source Code</a>
                </div>
              </div>
              <div className="w-11/12 lg:w-5/12">
                <p className="text-sm">
                I wanted to make a full-stack app. Here I used mongoDB to hold exercise informations and nodeJS for backend operations. I designed my front-end using React and tailwindCSS.I also wanted to display some data as a chart to make it visual and learned D3.js and implemented it. It was a hard journey that i learned react while building this app but I'm really happy with the results.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;