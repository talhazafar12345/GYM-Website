import { useState  } from "react"
function Hero15() {

    const [weight, setWeight] = useState("")
    const [inches, setInches] = useState("")
    const [feet, setFeet] = useState("")
    const [BMI, setBMI] = useState("")
    const [category, setCategory] = useState("")
    const [error, setError] = useState("")


    const calculateBMI = () => {

        if (!weight || !feet || !inches) {
            setError("Please fill all fields")
            return
        }

        setError("")
    
        const totalInches = Number(feet) * 12 + Number(inches);
        const heightInMeters = totalInches * 0.0254;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        const roundedBMI = bmiValue.toFixed(2);
        setBMI(roundedBMI)
        
        

        if (bmiValue < 18.5) {
            setCategory("You are under weight")
        }

        else if (bmiValue < 25) {
            setCategory("You are Normal")
        }

        else if (bmiValue < 30) {
            setCategory("You are overweight")
        }
        else {
            setCategory("You are obese")
        }
        document.getElementById("inps").value = ""
        document.getElementById("inpss").value = ""
        document.getElementById("inpsa").value = ""

  

           
    }
    return (
        <div>
            <div className="allinp">
                <div className="inp">
                    <input  value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" type="number" name="" id="inps" />
                </div>

                <div className="inp">
                    <input value={feet} onChange={(e) => setFeet(e.target.value)} placeholder="Height / feet" type="number" name="" id="inpss" />
                </div>

                <div className="inp">
                    <input  value={inches} onChange={(e) => setInches(e.target.value)} placeholder="Height / inches" type="number" name="" id="inpsa" />
                </div>
            </div>
            <div className="inpbtn">
                <button onClick={calculateBMI}>Calculate</button>
            </div>


            {error && (
                <div className="error">
                    {error}
                </div>

            )}
            {BMI && (
                <div className="result">
                    <p>{`Your BMI is  ${BMI} and weight status is ${category}`}</p>
                </div>
            )}

        </div>
    )
}

export default Hero15
