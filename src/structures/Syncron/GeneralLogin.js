import Registration from "./Registration"
import ReactCardFlip from 'react-card-flip';
import Login from "./LogIn"
import OutsideClickHandler from "react-outside-click-handler"
import HeaderHook from "../Hook/HeaderHook";

export default function GeneralLogin(props){
  
  const { res, isShow } = HeaderHook()
 

  return (
    <OutsideClickHandler onOutsideClick={props.res}>
      <ReactCardFlip containerClassName="essim" flipDirection="horizontal" isFlipped={isShow} >
        <Login res={res} />
        <Registration res={res}/> 
      </ReactCardFlip>
    </OutsideClickHandler>
  )
}