import LinksHeader from "./LinksHeader"
import LinksHeader2 from "./LinksHeader2"
import GeneralLogin from "../Syncron/GeneralLogin"
import BurgerHeader from "./BurgerHeader"
import HeaderHook from "../Hook/HeaderHook"
import { useNavigate } from "react-router-dom"


export default function Header({props=true}){
 
    const navigate = useNavigate()
    
    
    const { res,  isShow } = HeaderHook()
    
    return (
        <header>
            <img src={require("../images/logo.png")} alt="logo"
             className="coffeelogo" onClick={()=>navigate("/")}/>
            {props ? <LinksHeader className="text" /> : <LinksHeader2 className="text" />}

            <div  className="ButtonsHeader">
              {!isShow ? 
              <img src={require("../images/user.png")} alt="user"  className = "buttonshead" onClick={res}/> : null}   
              <img src={require("../images/shop.png")} alt="shop"  className = "buttonshead" />
              <BurgerHeader />
            </div>
            {isShow ? <GeneralLogin res={res} /> : null}
        </header>
    )
}