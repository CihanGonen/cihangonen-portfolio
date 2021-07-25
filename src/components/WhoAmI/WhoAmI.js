import './WhoAmI.css';

const WhoAmI = ()=>{
  return(
    <div className="pt-5">
      <div className="w-44 mx-auto lg:float-left lg:m-5 lg:mb-0">
       <img src="./images/kareBen.jpg" className='circle p-0 shadow-lg' width='100%' alt="Cihan"></img>
      </div>
      <div className="p-5 pb-0 mx-auto"> 
      <div>
        <h1 className="text-center lg:text-left text-xl md:text-2xl lg:text-4xl">
          Hey, I'm Cihan Gönen.
        </h1>
        <h3 className="text-center lg:text-left pt-3 text-lg md:text-xl lg:text-2xl">
          Javascript developer from İzmir, Turkey
        </h3>
        <p className="pt-3 text-base leading-7 xl:leading-loose xl:text-lg">
          I developed over <span className="font-semibold sifirbes">15</span> web pages using Javascript technologies like Nodejs and Reactjs.   Even though I'm studying software engineering I learned Javascript technologies by myself and I managed to keep my
          GPA around 3.5 out of 4. I want to work using Javascript technologies. I also developed over <span className="font-semibold sifirbes">50</span> responsive web pages using HTML and CSS. I have the experience of working with designers and other developers.
        </p>
      </div>
      <div className="flex h-20 lg:h-36 items-center justify-center">
        <div className="slider-wrapper flex justify-center gap-5 text-xl xl:text-2xl">
          <div>
          <span>/</span>
          <span>*</span>
          </div>
          <p>I like </p>  
          <div className="slider text-center">
            <div className="slider-text1"> self improvement</div>
            <div className=""> sci-fi novels 📚</div>
            <div className=""> documentaries 🎥</div>
            <div className=""> rainy days 🌧️</div>
            <div className=""> trying new food 🍲</div>
          </div>
          <span>*/</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default WhoAmI;