import uniqid from 'uniqid';
import fetchingHook from './Hook/fetchingHook';

export default function ProductRend(props){

    const { fetchObj } = fetchingHook("Prod")
    let length = props.length

    if(length === undefined){
       length = fetchObj.length
    }
    

    return <div className="box-container">
        {fetchObj.map((assortment)=>{

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
                    <button href="#" className="btn">add to cart</button><br/>
                    <button fref="#" className='btn' id="buyNow">Buy now</button>
                </div>
                )
            }
        })}
    </div>

}