import Registration from "./Registration"
import ReactCardFlip from 'react-card-flip';
import Login from "./LogIn"
import { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"


export default function GeneralLogin(props){
  
  const [ isLogR, setIsLogR ] = useState(false)
  const foo=()=>{
    setIsLogR(!isLogR)
  }

  return (
    <OutsideClickHandler onOutsideClick={props.loginHide}>
      <ReactCardFlip containerClassName="essim" flipDirection="horizontal" isFlipped={isLogR} >
        <Login foo={foo} />
        <Registration foo={foo}/> 
      </ReactCardFlip>
    </OutsideClickHandler>
  )
}