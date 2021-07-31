import './MyStack.css';

const MyStack = ()=>{
  return(
    <div className="h-full flex justify-center items-center">
      <div className="flex justify-around pt-5 pb-5 lg:p-0 flex-wrap gap-6">
        <div className="w-4/12 lg:w-2/12 text-center">
          <i className="devicon-html5-plain"></i>
          <p className="font-semibold pt-2">HTML5</p>
        </div>
        <div className="w-4/12 lg:w-2/12 text-center">
          <i className="devicon-css3-plain"></i>
          <p className="font-semibold pt-2">CSS3</p>
        </div>
        <div className="w-4/12 lg:w-2/12 text-center">
          <i class="devicon-sass-original"></i>
          <p className="font-semibold pt-2">Sass</p>
        </div>
        <div className="w-4/12 lg:w-2/12 text-center">
          <i className="devicon-javascript-plain"></i>
          <p className="font-semibold pt-2">JavaScript</p>
        </div>
        <div className="w-4/12 lg:w-2/12 text-center">
          <i className="devicon-react-original"></i>
          <p className="font-semibold pt-2">ReactJS</p>
        </div>
        <div className="w-4/12 lg:w-2/12 text-center">
          <i className="devicon-nodejs-plain"></i>
          <p className="font-semibold pt-2">NodeJS</p>
        </div>
        <div className="w-4/12 lg:w-2/12 text-center">
          <i className="devicon-express-original"></i>
          <p className="font-semibold pt-2">Express</p>
        </div>
        <div className="w-4/12 lg:w-2/12 text-center">
          <i className="devicon-mongodb-plain"></i>
          <p className="font-semibold pt-2">MongoDB</p>
        </div>
        <div className="w-4/12 lg:w-2/12 text-center">
          <i className="devicon-git-plain"></i>
          <p className="font-semibold pt-2">Git</p>
        </div>
        <div className="w-4/12 lg:w-2/12 text-center">
          <i className="devicon-tailwindcss-plain"></i>
          <p className="font-semibold pt-2">tailwindCSS</p>
        </div>
        <div className="w-4/12 lg:w-2/12 text-center">
          <i className="devicon-bootstrap-plain"></i>
          <p className="font-semibold pt-2">Bootstrap</p>
        </div>
        <div className="w-4/12 lg:w-2/12 text-center">
          <i className="devicon-npm-original-wordmark"></i>
          <p className="font-semibold pt-2">npm</p>
        </div>
      </div>
    </div>
  )
}

export default MyStack;