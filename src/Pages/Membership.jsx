import Hero1 from "../Sections/Hero1"
import Hero18 from "../Sections/Hero18"
import Hero20 from "../Sections/Hero20"
import Hero26 from "../Sections/Hero26"
import { useEffect } from "react"







function Membership() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div>
            <Hero1 />
            <Hero26 />
            <div className="mpp">
            <Hero18 />
            </div>
            <div className="for">
                <Hero20 />
            </div>
        </div>
    )
}

export default Membership
