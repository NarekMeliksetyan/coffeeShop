export default function Review(){
    return(
        <section className="review" id="review">

    <h1 className="heading"> customer's review</h1>

    <div className="box-container">

        <div className="box">
            <img src={require("./images/quote-img.png")} alt="" className="quote"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
            <img src={require("./images/pic-1.png")} className="user" alt=""/>
            <h3>john deo</h3>
        </div>

        <div className="box">
            <img src={require("./images/quote-img.png")} alt="" className="quote"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
            <img src={require("./images/pic-2.png")} className="user" alt=""/>
            <h3>john deo</h3>
        </div>
        
        <div className="box">
            <img src={require("./images/quote-img.png")} alt="" className="quote"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
            <img src={require("./images/pic-3.png")} className="user" alt=""/>
            <h3>john deo</h3>
        </div>

    </div>

</section>
    )
}