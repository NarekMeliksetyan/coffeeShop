import { useState,useEffect } from "react"
export default function FetchingHook(FetchFrom){

    const [fetchObj, setfetchObj] = useState([])
    const [length, setLength] = useState(3)
  
    useEffect(()=>{
      
    fetch(`http://localhost:8000/${FetchFrom}`)
    .then( res => res.json() )
    .then( res => setfetchObj(res) )
    },[length])
   
  const foo=()=>{
    {length === 3 ? setLength(fetchObj.length) : setLength(3)}
  }
  
  return { foo, length, fetchObj}
}