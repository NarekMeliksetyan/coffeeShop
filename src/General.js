import Header   from "./structures/Header/Header"
import Home     from "./structures/Home";
import About    from "./structures/AboutCont/About"
import Menu     from "./structures/Menu/Menu.js"
import Products from "./structures/Products";
import Review   from "./structures/Review";
import Contact  from "./structures/Contact";
import Blogs    from "./structures/Blogs";
import Footer   from "./structures/Footer";

export default function General() {
  return (
   <>
   
        <Header />
        <Home />
        <About />
        <Menu />
        <Products />
        <Review />
        <Contact />
        <Blogs />
        <Footer />
     
    </>
  )
}
