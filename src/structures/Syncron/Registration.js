import { useEffect, useState } from "react"
import ErrorRegistor from "./ErrorRegistor"

export default function Registration(props){

    const [ error, setError ] = useState({})
    const [dataFetch, setDataFetch ] = useState([]);
    const [ isCorect, setIsCorect ] = useState(false)
   
    const [ user, setUser ] = useState({
        firstName: "",
        lastName: "",
        Email: "",
        phone:"",
        password: "",
        retryPassword: "",
        adress: ""
    })
    
    useEffect( () => {
        fetch('http://localhost:8000/users')
          .then( (res) => res.json() )
          .then( (res) => setDataFetch(res))
          
          return () => setDataFetch(null)
          
         }, [] )

        useEffect(()=>{
            
      
            if (Object.values(error).length === 0 && isCorect===true) {      
                
              fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
              }).then(()=>props.loginHide)
            };
         
        },[isCorect])

    const handleSubmit=()=>{
        setIsCorect(true)
        setError(ErrorRegistor(user,dataFetch));
        console.log(error)
    }

    const bilet=(e)=>{
        
        setUser(
        prev => {
          return {
            ...prev,
            [e.target.name]: e.target.value,
          }
        }
      )
    }

    return (
        <form className="SignIn" >
            <div className="title">
               <h1>Registration</h1>
            </div>
            
                <div className="arr1">
                   <div>
                     <input type="text" name="firstName" value={user.firstName} onChange={bilet} placeholder="First name"/>
                     {error.firstName && <label className="errors">{error.firstName}</label>}
                    </div>
                   <div>
                     <input type="text" name="lastName"  value={user.lastName} onChange={bilet} placeholder="Last name"/>
                     {error.lastName && <label className="errors">{error.lastName}</label>}
                    </div>
                   <div>
                     <input type="text" name="Email" value={user.Email} onChange={bilet} placeholder="E-mail"/>
                     {error.Email && <label  className="errors">{error.Email}</label>}
                    </div>
                   <div>
                     <input type="text" name="phone" value={user.phone} onChange={bilet} placeholder="phone"/>
                     {error.phone && <label  className="errors">{error.phone}</label>}
                    </div>
                </div>
                <div className="arr2">
                    <div>
                      <input type="text" name="password" value={user.password} onChange={bilet} placeholder="password"/>
                      {error.password && <label  className="errors">{error.password}</label>}
                    </div>
                    <div>
                      <input type="text" name="retryPassword" value={user.retryPassword} onChange={bilet} placeholder="retry password"/>
                      {error.retryPassword && <label  className="errors">{error.retryPassword}</label>}
                    </div>
                    <div>
                      <input type="text" name="adress" value={user.adress} onChange={bilet} placeholder="Adress" />
                      {error.adress && <label  className="errors">{error.adress}</label>}
                    </div>
                    <div className="createbtn"> 
                        <button className="btncr" type="button" onClick={handleSubmit}>create</button>
                        <button className="btncls"type="button" onClick={props.res}>cancel</button>
                    </div>
                </div>
        </form>
    )
}