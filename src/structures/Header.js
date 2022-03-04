import { useNavigate } from "react-router-dom"
export default function Header(){
    return (
        <header>
            <img src={require("./images/logo.png")} alt="" className="coffeelogo"/>
            <nav className="text" >
                <a>Home</a>
                <a>About</a>
                <a>Menu</a>
                <a>Products</a>
                <a>Review</a>
                <a>Contact</a>
                <a>Blogs</a>
            </nav>

            <div  className="ButtonsHeader">
                <img src={require("./images/search.png")} alt="search" className = "buttonshead" />
                <img src={require("./images/shop.png")}   alt="shop" className = "buttonshead"  />
            </div>
        </header>
    )
}