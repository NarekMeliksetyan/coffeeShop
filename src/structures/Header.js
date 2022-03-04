import { Link } from "react-scroll/modules"
export default function Header(){
    return (
        <header>
            <Link to="Home" smooth={true} duration={500}>
                <img src={require("./images/logo.png")} alt="" className="coffeelogo"/>
            </Link>
            <nav className="text"  >
                <Link to="Home" smooth={true} duration={500}  >Home</Link> 
                <Link to="About" smooth={true} duration={500}   >About</Link> 
                <Link to="Menu" smooth={true} duration={500}    >Menu</Link> 
                <Link to="products" smooth={true} duration={500} >Products</Link> 
                <Link to="review" smooth={true} duration={500}  >Review</Link> 
                <Link to="contact" smooth={true} duration={500} >Contact</Link> 
                <Link to="Blogs"  smooth={true} duration={500}  >Blogs</Link> 
            </nav>

            <div  className="ButtonsHeader">
                <img src={require("./images/search.png")} alt="search" className = "buttonshead" />
                <img src={require("./images/shop.png")}   alt="shop" className = "buttonshead"  />
            </div>
        </header>
    )
}