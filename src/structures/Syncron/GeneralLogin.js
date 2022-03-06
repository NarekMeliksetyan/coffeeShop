
import OutsideClickHandler from "react-outside-click-handler"
export default function GeneralLogin({setIsLogin}){
    return (
      <OutsideClickHandler onOutsideClick={()=>setIsLogin(false)}>
        <form className="SignIn">
          
          <div className="arr1">
              <h1>Log<span>In</span></h1>
            <div className="avatar">
              <img src={require("../images/user.png")} alt="avatar" />
            </div>
            <div className="forLogin">
              <input type="text" placholder="your mail@gmail.com"/>
            </div>
            <div className="forPassword">
              <input type="password" placholder="password"/>
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
              <span>register now</span>
            </div>
          </div>
        </form>
      </OutsideClickHandler>  
    )
}