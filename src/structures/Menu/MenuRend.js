import uniqid from 'uniqid';
import fetchingHook from '../Hook/fetchingHook';
export default function MenuRend(props){

    const { fetchObj } = fetchingHook("Menu")
    let length = props.length

    if(length === undefined){
       length = fetchObj.length
    }
    
    return(
    <div className="menuItem">
        {fetchObj.map((assortment)=>{
            if(assortment.id<=length){
            return (
             <div key={uniqid()} className="box">
               <img src={assortment.image} alt=""/>
               <h3>{assortment.title}</h3>
                <div className="price">${assortment.price}  <span>{assortment.oldPrice}</span></div>
                <button href="#" className="btn">add to cart</button>
                <button fref="#" className='btn' id="buyNow">Buy now</button>
             </div>)
            }
        })}
    </div>
    )
    
}