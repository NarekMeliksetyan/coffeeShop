import { useState,useRef } from "react"
import LinksHeader from "./LinksHeader"


export default function BurgerHeader(){   
    const prevScrollY = useRef(0)
    const [visibility,setIsVisibility] = useState(false) 
    const burgerClick=()=>{
        setIsVisibility(!visibility)  
    }    
    const onScroll = (e) => {
        setIsVisibility(false)
      };

    return (
        <>
            <img src={require("../images/burger.png")}  alt="burger" 
            onClick={burgerClick} className = "ButtonBurger" />
            <nav className="ButtonsHeader" onScroll={onScroll}  > 
                {visibility ? <LinksHeader props="textA"  /> : null}
                {window.addEventListener("scroll",()=>{
                    setIsVisibility(false)
                })}
            </nav>
        </>
    )
}