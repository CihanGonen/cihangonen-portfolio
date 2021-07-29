import './Experience.css'

const Experience = ()=>{
  return(
    <div className="h-full p-5">
      <div className="">
        <h1 className="font-bold text-xl">
          Experience
        </h1>
        <div className="pt-1 flex flex-col xl:flex-row gap-5">
          <h2 className="text-lg">
            - Grafiket Adworks / October - December 2020
          </h2>
          <h3 className="font-bold text-lg">
            Frontend Develeoper
          </h3>
        </div>
        <p className="pt-3">
          Worked with designers and I made their designs alive using html and css. Also worked with a back-end developer. I learned to turn design files to working web pages.
        </p>
      </div>
      <div className="h-1 mt-5 rounded-md w-11/12 mx-auto my-hr">
      </div>
      <div className="pt-5">
        <div className="">
          <h1 className="font-bold text-xl">
            Education
          </h1>
          <div className="pt-1 flex flex-col xl:flex-row gap-5">
            <h2 className="text-lg">
              - Firat University / 2017 - 2018
            </h2>
            <h3 className="font-bold text-lg">
              English Preparation - GPA (3.5/4)
            </h3> 
          </div>
          <p className="pt-3">
          I studied just English for 2 semesters. I discussed subjects in english and wrote many essays and did many presentations.
          </p>
        </div>
        <div className="mt-5">
          <div className="pt-1 flex flex-col xl:flex-row gap-5">
            <h2 className="text-lg">
            - Firat University / 2018 - Present (4/4)
            </h2>
            <h3 className="font-bold text-lg">
            Software Engineering - Bachelor's Degree - GPA (3.48)
            </h3>
          </div>
          <p className="pt-3">
             I learned algorithmic thinking and solved many problems using Java and C#. I also learned and used agile and scrum methodologies in my school projects.
          </p>
        </div>
      </div>
  </div>
  )
}

export default Experience;