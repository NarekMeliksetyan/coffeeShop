import ReactFlipCard from "react-card-flip"
import AboutCart1 from "./AboutCart1"
import AboutCart2 from "./AboutCart2"
import { useState } from "react"

export default function About(){

  const [isAbout , setIsAbout] = useState(false)

  const changeAbout=()=>{
    setIsAbout(!isAbout)
    console.log(isAbout)
  } 
  return (
    <section className="About" >
      <ReactFlipCard flipDirection="horizontal" isFlipped={isAbout} >
        <AboutCart1 changeAbout={changeAbout}/>
        <AboutCart2 changeAbout={changeAbout}/>
      </ReactFlipCard>
      
          
    </section>
  )
}