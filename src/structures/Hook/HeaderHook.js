import { useState } from "react"
export default function HeaderHook(){

    const [isGeneral,setIsGeneral ] = useState({
        genProducts: false,
        links: true
    })

    const [isShow, setIsShow ] = useState(false)

    const res=()=>{
        setIsShow(!isShow)
    }

    const loginHide=(e)=>{
        setIsGeneral(prev=>{
            return {
                ...prev,
                [e.target.name] : !e.target.value
            }
        })
        
    }

    return {loginHide, res, isShow, isGeneral}
}