import './Experience.css'

const Experience = ()=>{
  return(
    <div className="flex h-full flex-col lg:justify-around exp-wrap">
      <div className="h-80 lg:h-24 flex pt-5 lg:pt-0 flex-col lg:flex-row items-center gap-5 lg:gap-10 px-9">
        <h2 className="text-center text-base md:text-lg lg:text-start lg:text-xl font-bold">
          Experience
        </h2>
        <div className="flex flex-col h-full justify-center gap-5">
          <div>
            <h3 className="text-sm font-semibold xl:font-normal xl:text-lg xl:text-xl">
             -  Grafiket Adworks / October - December 2020
            </h3>
            <h4 className="text-sm font-semibold xl:font-normal xl:text-lg">
              Frontend Develeoper
            </h4>
          </div>
          <p className="text-sm xl:text-base">
            Worked with designers and I made their designs alive using html and css.
            Also worked with a back-end developer. I learned to turn design files to working web pages.
          </p>
        </div>
      </div>
      <div className="h-1 rounded-md w-11/12 mx-auto my-hr">
      </div>
      <div className="h-96 lg:h-56 flex pt-5 lg:pt-0 flex-col lg:flex-row items-center gap-5 lg:gap-10 px-9">
      <h2 className="text-center font-extrabold text-lg lg:text-start lg:text-xl lg:font-bold">
          Education
      </h2>
      <div className="flex flex-col gap-5 h-full justify-center">
        <div className="flex flex-col h-full justify-center gap-5">
          <div>
            <h3 className="text-sm font-semibold xl:font-normal xl:text-xl">
             -  Firat University / 2017 - 2018 
            </h3>
            <h4 className="text-sm font-semibold xl:font-normal xl:text-lg">
              English Preparation - GPA (3.5/4)
            </h4>
          </div>
          <p className="text-sm xl:text-base">
            I learned algorithmic thinking and solved many problems using Java and C#.
            I also learned and used agile and scrum methodologies in my school projects.
          </p>
        </div>
        <div  className="flex flex-col h-full justify-center gap-5">
          <div>
            <h3 className="text-sm font-semibold xl:font-normal xl:text-xl">
             -  Firat University / 2018 - Present (4/4)
            </h3>
            <h4 className="text-sm font-semibold xl:font-normal xl:text-lg">
              Software Engineering - Bachelor's Degree - GPA (3.48)
            </h4>
          </div>
          <p className="text-sm xl:text-base">
            I studied just English for 2 semesters. I discussed subjects in english and wrote many essays
            and did many presentations.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Experience;