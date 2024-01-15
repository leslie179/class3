import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default function ExampleThree() {
    const [number, setNumber]  = useState(0);

    const colors = ["red", "orange", "yellow", "green", "blue", "violet"];
    
    /**use value number it will trigger the use effect to run 
        * for colors[number] it depends on the position it is in
        * so here it is 0 - 5
        **/

    useEffect(() => {
        if (number > colors.length - 1) {
            setNumber(0);
            console.log("Changing nunmber value back to 0" + colors[0]);
        } else {
            console.log("changing number value:" + colors[number]);
        }
         
        
        

        


    }, [number])
    return(
        <>
        <Header/>
        <main>
        <h1>Example 3</h1>
        <button 
        style={{backgroundColor: colors[number]}}
        onClick={() => setNumber(number + 1)}>
        Increment Numnber 
        </button>     
        <div>
            {number}
        </div>
        </main>
        <Footer/>
        </>

    )
}