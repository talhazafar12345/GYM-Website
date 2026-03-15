import Hero12 from "./Hero12"

function Hero11({show}) {
  return (
    <div>
        {show =="Thursday" &&(
            <>
      <div className="bbs">

                        <div>
                            <p>Meditation</p>
                        </div>
                        <div>
                            <p>2.00am-4.00am</p>
                        </div>

                        <div>
                            <p>David Fahim</p>
                        </div>

                        <div className="join">
                            <button>Join Now</button>
                        </div>
                    </div>
                    <div className="bbh">
                        <div>
                            <p>Rowing Machine</p>
                        </div>
                        <div>
                            <p>4.00am-5.00am</p>
                        </div>

                        <div>
                            <p>Elite Watson</p>
                        </div>

                        <div className="join">
                            <button>Join Now</button>
                        </div>
                    </div>
                    </>
                    )}
                    <Hero12 show ={show} />
    </div>
  )
}

export default Hero11