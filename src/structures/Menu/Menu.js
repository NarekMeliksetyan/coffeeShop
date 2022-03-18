import fetchingHook from '../Hook/fetchingHook';
import MenuRend from './MenuRend';

export default function Menu(){
  
  const { foo,  length } = fetchingHook("Menu");

    return (
        <section className="Menu" >
            <h1 onClick={foo} >Menu</h1>
          
            <MenuRend length = {length} />           
          
        </section>
    )
}