import Hero1 from "../Sections/Hero1"
import Hero20 from "../Sections/Hero20"
import Hero24 from "../Sections/Hero24"
import { useEffect } from "react"






function Service() {
    useEffect(()=>{

        window.scrollTo(0,0)
    })
    return (
        <div>
            <Hero1 />
            <Hero24 />
            <div className="for">
                <Hero20 />
            </div>
        </div>
    )
}

export default Service
