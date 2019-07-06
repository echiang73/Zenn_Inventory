import React, { Component } from 'react';
import "./style.css";
import EmailForm from "../EmailForm";
import GoogleLogin from "../GoogleLogin";


class LogIn extends Component {
  render(){
    return (
      <div className="container">
      <div className="row">
        <div className="EMail">
            <EmailForm>
            </EmailForm>
        </div>
        <div className="google">
            <GoogleLogin>
            </GoogleLogin> 
        </div>
      </div>
      </div>




);
}
}
export default LogIn;




 