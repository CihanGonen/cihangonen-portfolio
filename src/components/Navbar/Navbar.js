import {useState,useEffect} from 'react'
import './Navbar.css'

function Navbar({curr,setCurr}){

  const [sideBar,setSideBar] = useState(false);

  const changeSideBar = ()=>{
    setSideBar(!sideBar);
  }

  useEffect(()=>{
    setSideBar(false);
  },[curr])

  return( 
    <div className="relative shadow-xl w-full lg:w-3/12 lg:h-4/6">
      <div className="flex navbar-bg rounded-md justify-end pr-4 h-12 lg:hidden">
        <button onClick={changeSideBar}>
          {
            sideBar ?
            <i className="fas fa-times fa-lg"></i> :
            <i className="fas fa-bars fa-lg"></i>
          }
        </button>
      </div>
      <div className={`${sideBar ? 'flex' : 'hidden'} z-10 absolute overflow-hidden w-full opacity-80 lg:opacity-100 lg:static rounded-md flex-col expanded-bg space-y-1 mt-2 text-lg lg:text-3xl lg:items-center justify-around lg:flex lg:m-0 lg:h-full`}>
        <button onClick={()=>setCurr(0)} className={`${curr===0 ? 'active' : 'link-bg'} lg:w-11/12 rounded-md text-right lg:text-left pr-2 lg:pl-10 py-2`}>
            Who am I ?
        </button>
        <button onClick={()=>setCurr(1)} className={`${curr===1 ? 'active' : 'link-bg'} lg:w-11/12 rounded-md text-right lg:text-left pr-2 lg:pl-10 py-2`}>
            Projects
        </button>
        <button onClick={()=>setCurr(2)} className={`${curr===2 ? 'active' : 'link-bg'} lg:w-11/12 rounded-md text-right lg:text-left pr-2 lg:pl-10 py-2`}>
            Certifications
        </button>
        <button onClick={()=>setCurr(3)} className={`${curr===3 ? 'active' : 'link-bg'} lg:w-11/12 rounded-md text-right lg:text-left pr-2 lg:pl-10 py-2`}>
            Tech stack
        </button>
        <button onClick={()=>setCurr(4)} className={`${curr===4 ? 'active' : 'link-bg'} lg:w-11/12 rounded-md text-right lg:text-left pr-2 lg:pl-10 py-2`}>
            Experience
        </button>
      </div>

    </div>
  )
}

export default Navbar;