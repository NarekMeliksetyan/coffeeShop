import ProductRend from "./ProductRend"
import FetchingHook from "./Hook/fetchingHook";
export default function Products(){
  
    const { foo,  length } = FetchingHook("Menu");

    return (
        <section className="products">
         <h1 className="heading" onClick={foo}> our <span>products</span> </h1>
            
               <ProductRend length = {length} />
            
        </section>
    )

}