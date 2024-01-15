import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);
    
    /** usually this will cause an infinite loop 
     * so it is best to not do this incase your code breaks 
     * code on pages will run two times.
     * Once to render what we want and another is to 
     * render strict mode to find any common bugs
    */

    useEffect(() => {
            console.log(number);
    })

    /**
     * useEffect only runs when the pages loads
     */
    
    return(
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>Infinite loop</div>
                {number}
        </main>
        <Footer/>
        </>

    )
}