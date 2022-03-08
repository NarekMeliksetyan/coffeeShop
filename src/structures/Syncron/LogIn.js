export default function GeneralLogin(props){

    return (
      <form className="SignIn">
          
        <div className="arr1">
          <h1>Log<span>In</span></h1>
          <div className="avatar">
            <img src={require("../images/user.png")} alt="avatar" />
          </div>
          <div className="forLogin">
            <input type="text" placeholder="your mail@gmail.com"/>
          </div>
          <div className="forPassword">
            <input type="password" placeholder="password"/>
          </div>
          <div className="forSignin">
            <button type="submit" >LogIn</button>
          </div>
        </div>

        <div className="arr2">
          <div className="signinThrough">
            <img src={require("../images/facebook.png")} alt="facebook" />
            <img src={require("../images/google.png")} alt="google" />
            <img src={require("../images/linkedin (1).png")} alt="google" />
          </div>
          <div className="forCreat">
            <h2>
             are you not registered yet?
            </h2>
            <span onClick={props.foo}>register now</span>
          </div>
        </div>
      </form>
    )

}