import {useState, useEffect} from "react"
import uniqid from 'uniqid';
export default function Menu(){
  const [Menu, setMenu] = useState([])
  const [length, setLength] = useState(6)
  
    useEffect(()=>{
      
    fetch(`http://localhost:8000/Menu`)
    .then( res => res.json() )
    .then( res => setMenu(res) )
    },[length])
   
  const foo=()=>{
    {length === 6 ? setLength(Menu.length) : setLength(6)}
  }

    return (
        <section className="Menu" >
            <h1 onClick={foo} >Menu</h1>
          <div className="menuItem">

              {Menu.map((assortment)=>{
                if(assortment.id<=length){
                return (
                 <div key={uniqid()} className="box">
                   <img src={assortment.image} alt=""/>
                   <h3>{assortment.title}</h3>
                    <div className="price">${assortment.price}  <span>{assortment.oldPrice}</span></div>
                    <button href="#" className="btn">add to cart</button>
                 </div>)
                }
                })}
           
          </div>
        </section>
    )
}