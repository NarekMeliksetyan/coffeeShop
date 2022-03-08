export default function Registration(props){
    
    return (
        <form className="SignIn" >
            <div className="title">
               <h1>Registration</h1>
            </div>
            
                <div className="arr1">
                   <input type="text"  placeholder="First name"/>
                   <input type="text"  placeholder="Last name"/>
                   <input type="text"  placeholder="E-mail"/>
                   <input type="text"  placeholder="phone"/>
                </div>
                <div className="arr2">
                    <input type="text"  placeholder="password"/>
                    <input type="text"  placeholder="retry password"/>
                    <div className="createbtn"> 
                        <button className="btncr" type="button">create</button>
                        <button className="btncls"type="button" onClick={props.foo}>cancel</button>
                    </div>
                </div>
        </form>
    )
}