import { Link } from "react-scroll/modules"
export default function LinksHeader(){
    return (
        <nav className="text">
            <Link to="Home" smooth={true} duration={500} ><span>Home</span></Link> 
            <Link to="About" smooth={true} duration={500}   ><span>About</span></Link> 
            <Link to="Menu" smooth={true} duration={500}    ><span>Menu</span></Link> 
            <Link to="products" smooth={true} duration={500} ><span>Products</span></Link> 
            <Link to="review" smooth={true} duration={500}  ><span>Review</span></Link> 
            <Link to="contact" smooth={true} duration={500} ><span>Contact</span></Link> 
            <Link to="Blogs"  smooth={true} duration={500}  ><span>Blogs</span></Link> 
        </nav>
    )
}