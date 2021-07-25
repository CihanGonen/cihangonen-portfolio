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
            <div className="w-11/12 flex flex-col pl-2 gap-5 lg:flex-row justify-around">
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
                <div className="pt-5 font-bold">
                  <a className="block" target='_blank' href="https://studytimerbycihan.herokuapp.com/">Live App</a>
                  <a className="block pt-2" target='_blank' href="https://github.com/CihanGonen/study-timer">Source Code</a>
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
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;