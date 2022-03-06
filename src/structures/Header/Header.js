import LinksHeader from "./LinksHeader"
import GeneralLogin from "../Syncron/GeneralLogin"
import BurgerHeader from "./BurgerHeader"

import { Link } from "react-scroll/modules"
import { useState } from "react"


export default function Header(){
    const [isLogin,setIsLogin ] = useState(false)
    function loginHide(){
        setIsLogin(!isLogin)
    }
    {console.log(isLogin)}
    return (
        <header>
            <Link to="Home" smooth={true} duration={500}>
                <img src={require("../images/logo.png")} alt="" className="coffeelogo"/>
            </Link>
            <LinksHeader props="text" />

            <div  className="ButtonsHeader">
              {!isLogin ? <img src={require("../images/user.png")}    
              alt="user"  className = "buttonshead" onClick={loginHide}/> : null}   
                <img src={require("../images/search.png")} alt="search" className = "buttonshead" />
                <img src={require("../images/shop.png")}   alt="shop"   className = "buttonshead" />
                
                <BurgerHeader />
            </div>
            {isLogin ? <GeneralLogin setIsLogin={setIsLogin}/> : null}
        </header>
    )
}