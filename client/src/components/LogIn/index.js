import React, { Component } from 'react';
import "./style.css";
import EmailForm from "../EmailForm";
import GoogleLogin from "../GoogleLogin";
// import landing2 from "../assets/images/landing2.png";


class LogIn extends Component {
  render(){
    return (
    <>  
     <div className="sign-in container-2">
      <div className="row">
        <div className="EMail">
            <EmailForm>
            </EmailForm>
        </div>
      </div>  

      <div className="row center">
        <div className="google">
            <GoogleLogin>
            </GoogleLogin> 
        </div>
      </div>
     </div>  


      
      <div className="container">
        <div className="row col-6">
            <img src={require('../assets/images/landing2.png')} alt="landing2"/>
        </div>
      </div> 
     </> 
    
      



);
}
}
export default LogIn;




 