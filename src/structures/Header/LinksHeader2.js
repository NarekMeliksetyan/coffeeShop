import { Link } from "react-scroll/modules"
export default function LinksHeader2(){
    

    return (

    <nav className="text">
        <Link to="MneuinShop" duration={500} smooth={true}><span>coffee</span></Link>
        <Link to="ProductsinShop" duration={500} smooth={true}><span>products</span></Link>
    </nav>

    )
}