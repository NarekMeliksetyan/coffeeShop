import { useNavigate } from "react-router-dom";

export default function Home(){
   const navigate = useNavigate()
    return (
        <section className="Home">
            <div className="textHome">
               <h3>fresh coffee  in the morning</h3>
               <p>Is not the best way to freshen up after waking up is hot morning coffee? so what are you waiting for?</p>
                
                  <button className="btn" onClick={()=>navigate("/Shop")} >Get Yours Now</button>
                
            </div>
        </section>
    )
}