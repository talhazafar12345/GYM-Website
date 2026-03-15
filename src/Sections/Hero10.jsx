import Hero11 from "./Hero11"

function Hero10({ show }) {
    return (
        <div>
            {show === "Wednesday" && (
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
                    <div className="bbh">
                        <div>
                            <p>Jumping</p>
                        </div>
                        <div>
                            <p>2.00am-3.00am</p>
                        </div>

                        <div>
                            <p>David Fahim</p>
                        </div>

                        <div className="join">
                            <button>Join Now</button>
                        </div>
                    </div>
                </>
            )}
            <Hero11 show ={show} />
        </div>
    )
}
export default Hero10
