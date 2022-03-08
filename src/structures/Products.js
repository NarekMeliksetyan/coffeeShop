import { useEffect, useState } from "react"
import uniqid from 'uniqid';

export default function Products(){

   const [ product , setProduct] = useState([])
   const [length, setLength] = useState(3)

   useEffect(()=>{
      
    fetch(`http://localhost:8000/prod`)
    .then( res => res.json() )
    .then( res => setProduct(res) )
    },[length])

    const handleClick=()=>{
        {length === 3 ? setLength(product.length) : setLength(6)}
    }

    return (
        <section className="products">

         <h1 className="heading" onClick={handleClick}> our <span>products</span> </h1>

            <div className="box-container">

                {product.map((assortment)=>{

                    if(assortment.id<=length){

                    return (
                        <div className="box" key = {uniqid()}>
                             <div className="image">
                                <img src={assortment.image} alt=""/>
                             </div>
                          <div className="content">
                            <h3>{assortment.title}</h3>
                            <div className="price">${assortment.price} <span>{assortment.oldPrice}</span></div>
                          </div>
                        </div>
                    )
                }})}
            </div>

        </section>
    )
}