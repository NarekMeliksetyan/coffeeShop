import MenuRend from "./Menu/MenuRend"
import Header from "./Header/Header"
import ProductRend from "./ProductRend"
import { useState } from "react"
import { Link } from "react-scroll/modules"

export default function Shop (){

    const [visibility , setisVisibility ] = useState(true)
    
    const change = (val)=>{
        setisVisibility(val)
      }
    
    
    return  ( 
        <section className="Shop">
            <div>
                <Header props = {false} />
            </div>
            <div className="shopColumn1">
                
                <div className = "MneuinShop">
                 <MenuRend />
                </div>
                <div className = "ProductsinShop"> 
                 <ProductRend />
                </div>
            </div> 
            <div className="shopColumn2">
              <div className="iteminfilter">
                  <h2>filter</h2>
                <input type= "number" placeholder="price..."/>
                <input type= "text" placeholder="Name..."/>
                <input type= "text" placeholder="raiting..."/>
              </div>
            </div>
            
        </section>
    )
}