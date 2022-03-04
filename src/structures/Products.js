export default function Products(){
    return (
        <section className="products">

         <h1 className="heading"> our <span>products</span> </h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src={require("./images/product-1.png")} alt=""/>
                    </div>
                    <div className="content">
                        <h3>fresh coffee</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={require("./images/product-2.png")} alt=""/>
                    </div>
                    <div className="content">
                        <h3>fresh coffee</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                    </div>
                        
                </div>

                <div className="box">
                    <div className="image">
                        <img src={require("./images/product-3.png")} alt=""/>
                    </div>
                    <div className="content">
                        <h3>fresh coffee</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                    </div>
                </div>
            </div>

        </section>
    )
}