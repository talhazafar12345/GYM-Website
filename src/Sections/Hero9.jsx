import Hero10 from "./Hero10"

function Hero9({show}) {
  return (
    <div>
        {show =="Tuesday" &&(
            <>
      <div className="bbs">

                        <div>
                            <p>Body Building</p>
                        </div>
                        <div>
                            <p>1.30am-3.30am</p>
                        </div>

                        <div>
                            <p>Jecy Deoko</p>
                        </div>

                        <div className="join">
                            <button>Join Now</button>
                        </div>
                    </div>
                    <div className="bbh">
                        <div>
                            <p>Running</p>
                        </div>
                        <div>
                            <p>12.00am-1.30am</p>
                        </div>

                        <div>
                            <p>John Doe</p>
                        </div>

                        <div className="join">
                            <button>Join Now</button>
                        </div>
                    </div>
                    </>
                    )}
                    <Hero10 show ={show} />
    </div>
  )
}

export default Hero9
