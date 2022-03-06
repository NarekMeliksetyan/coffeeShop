export default function Menu(){
    return (
        <section className="Menu" >
            <h1>Menu</h1>
          <div className="menuItem">

              
          <div className="box">
            <img src={require("./images/menu-1.png")} alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99 <span>20.99</span></div>
            <button href="#" className="btn">add to cart</button>
            </div>


            <div className="box">
            <img src={require("./images/menu-2.png")} alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99 <span>20.99</span></div>
            <button href="#" className="btn">add to cart</button>
            </div>
            <div className="box">
            <img src={require("./images/menu-3.png")} alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99 <span>20.99</span></div>
            <button href="#" className="btn">add to cart</button>
            </div>
            <div className="box">
            <img src={require("./images/menu-4.png")} alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99 <span>20.99</span></div>
            <button href="#" className="btn">add to cart</button>
            </div>
            <div className="box">
            <img src={require("./images/menu-5.png")} alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99 <span>20.99</span></div>
            <button href="#" className="btn">add to cart</button>
            </div>
            <div className="box">
            <img src={require("./images/menu-6.png")} alt=""/>
            <h3>tasty and healty</h3>
            <div className="price">$15.99 <span>20.99</span></div>
            <button href="#" className="btn">add to cart</button>
            </div>
          </div>
        </section>
    )
}