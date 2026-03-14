import Hero11 from "./Hero11"

function Hero10({ show }) {
    return (
        <div className="khair">
            {show === "Friday" && (
                <>
                    <div className="bbd">
                        <div>
                            <h2>Cycling</h2>
                        </div>
                        <div>
                            <h2>2.00am-3.00am</h2>
                        </div>
                        <div>
                            <h2>Jecy Deoko</h2>
                        </div>
                        <div className="join">
                            <button>Join Now!</button>
                        </div>
                    </div>
                    <div className="bbs kks">
                        <div>
                            <h2>Yoga</h2>
                        </div>
                        <div className="timer">
                            <h2>3.30am-4.30am</h2>
                        </div>
                        <div>
                            <h2>John Doe</h2>
                        </div>
                        <div className="join">
                            <button>Join Now!</button>
                        </div>

                    </div>
                    <div className="bbh llm">
                        <div>
                            <h2>Running</h2>
                        </div>
                        <div className="timers">
                            <h2>4.30am-5.30am</h2>
                        </div>
                        <div className="doe">
                            <h2>John Doe</h2>
                        </div>
                        <div className="join">
                            <button>Join Now!</button>
                        </div>
                    </div>
                </>
            )}

            <Hero11 show ={show} />

        </div>
    )
}
export default Hero10
