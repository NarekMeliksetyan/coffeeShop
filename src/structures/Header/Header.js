import LinksHeader from "./LinksHeader"
import GeneralLogin from "../Syncron/GeneralLogin"
import BurgerHeader from "./BurgerHeader"

import { Link } from "react-scroll/modules"
import { useState } from "react"


export default function Header(){
    const [isShow,setIsShow ] = useState(false)
    function loginHide(){
        setIsShow(!isShow)
    }
    return (
        <header>
            <Link to="Home" smooth={true} duration={500}>
                <img src={require("../images/logo.png")} alt="logo" className="coffeelogo"/>
            </Link>
            <LinksHeader props="text" />

            <div  className="ButtonsHeader">
              {!isShow ? <img src={require("../images/user.png")}    
              alt="user"  className = "buttonshead" onClick={loginHide}/> : null}   
                <img src={require("../images/search.png")} alt="search" className = "buttonshead" />
                <img src={require("../images/shop.png")}   alt="shop"   className = "buttonshead" />
                
                <BurgerHeader />
            </div>
            {isShow ? <GeneralLogin loginHide={loginHide} /> : null}
        </header>
    )
}