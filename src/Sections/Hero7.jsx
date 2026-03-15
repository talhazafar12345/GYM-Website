import { useState } from "react"
import Hero8 from "./Hero8"

function Hero7() {
  const [show, setShow] = useState("Monday")
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return (
    <div>
      <div className="gymback">
        <div className="gym">
          <h1>Gym Schedule</h1>
          <div className="allweek">
          {days.map(day=>(
<button className={show== day? "show":""} onClick={()=>setShow(day)}>
{day}
</button>
          ))}
          </div>
        </div>
              <Hero8 show ={show} />
      </div>

    </div>
  )
}
export default Hero7
