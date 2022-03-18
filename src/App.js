import General from "./General";
import Shop from "./structures/Shop";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
      
    <Routes>
      <Route path="/"    element = {<General />} />
      <Route path="Shop" element = {<Shop />}    />      
    </Routes>
   
  )
}

export default App;
