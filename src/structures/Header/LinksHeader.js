import { Link } from "react-scroll/modules"
export default function LinksHeader({props}){
    return (
        <nav className={props} >
            <Link to="Home" smooth={true} duration={500}  >Home</Link> 
            <Link to="About" smooth={true} duration={500}   >About</Link> 
            <Link to="Menu" smooth={true} duration={500}    >Menu</Link> 
            <Link to="products" smooth={true} duration={500} >Products</Link> 
            <Link to="review" smooth={true} duration={500}  >Review</Link> 
            <Link to="contact" smooth={true} duration={500} >Contact</Link> 
            <Link to="Blogs"  smooth={true} duration={500}  >Blogs</Link> 
        </nav>
    )
}