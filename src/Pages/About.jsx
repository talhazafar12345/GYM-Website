import Hero1 from "../Sections/Hero1"
import Hero21 from "../Sections/Hero21"
import { useEffect } from "react"
import Hero22 from "../Sections/Hero22"
import Hero23 from "../Sections/Hero23"
import Hero16 from "../Sections/Hero16"
import Hero20 from "../Sections/Hero20"

function About() {

    useEffect(()=>{
        window.scrollTo(0,0)
    })
  return (
    <div>
    <Hero1 />
    <Hero21 />
    <Hero22 />
    <Hero23 />
    <div className="sola"> 
    <Hero16 />
    </div>
    <div className="for">
    <Hero20 />
    </div>
    </div>
  )
}

export default About
