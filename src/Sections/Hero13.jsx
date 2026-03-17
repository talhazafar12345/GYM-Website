




function Hero13({show}) {
  return (
    <div>
        {show =="Saturday" &&(
            <>
      <div className="bbs">

                        <div>
                            <p>Rowing Machine</p>
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
                            <p>Jump Rope</p>
                        </div>
                        <div>
                            <p>12.00am-1.30am</p>
                        </div>

                        <div>
                            <p>Alexander Watson</p>
                        </div>

                        <div className="join">
                            <button>Join Now</button>
                        </div>
                    </div>
                    </>
                    )}
                    
    </div>
  )
}

export default Hero13