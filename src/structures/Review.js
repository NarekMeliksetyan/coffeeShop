import { useState,useEffect } from "react"

export default function Review(){

    const [ comment,setComment ] = useState([])
    useEffect(()=>{
      
        fetch(`http://localhost:8000/comment`)
        .then( res => res.json() )
        .then( res => setComment(res) )
        },[])

    return(
        <section className="review">

    <h1 className="heading"> customer's review</h1>

    <div className="box-container">
       
       { comment.map((user)=>{
           return (
                 <div className="box">
            <img src={require("./images/quote-img.png")} alt="" className="quote"/>
            <p>{user.content}</p>
            <img src={user.image} className="user" alt=""/>
            <h3>{user.firstName} {user.lastName}</h3>
        </div>

           )
       })}
       
    </div>

</section>
    )
}