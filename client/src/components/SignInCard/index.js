import React, { Component } from 'react';
import "./style.css";
// import EmailForm from "../EmailForm";
// import GoogleLogin from "../GoogleLogin";
import logo from "../assets/images/ZENN.logo.png";


class SignInCard extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.username} ${this.state.password}`);
    this.setState({
      username: "",
      password: ""
    });
  };


  render() {
    return (
      // <>
      //   <div className="sign-in container-2">
      //     <div className="row">
      //       <div className="EMail">
      //         <EmailForm>
      //         </EmailForm>
      //       </div>
      //     </div>

      //     <div className="row center">
      //       <div className="google">
      //         <GoogleLogin>
      //         </GoogleLogin>
      //       </div>
      //     </div>
      //   </div>

      //   <div className="container">
      //     <div className="row col-6">
      //       <img src={require('../assets/images/landing2.png')} alt="landing2" />
      //     </div>
      //   </div>
      // </>
      
      <div className="col-sm-12" style={{border: "1px solid black", borderRadius: "5px", background: "white", boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}>
        <div id="landing-logo">
            <img src={logo} alt="zenn logo" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "40%"}} />
        </div>
        
        <div className="signinCard" id="signin">
          {/* <p>
            Hello {this.state.username}
          </p> */}
          <form className="form">
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="guest@zenninventory.com"
              className="form-control"
              id="username-input"
            />
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="password123"
              className="form-control"
              id="password-input"
            />
            <button onClick={this.handleFormSubmit} className="btn btn-success btn-block">Submit</button>
          </form>
            
            {/* <form method="post" action="http://www.zenninventory.com/signin">
              <div className="form-group mt-3">
                <label>Username
                <input type="text" className="form-control" id="username" value="" placeholder=""/>
                </label>
              </div>
              <div className="form-group">
                <label>Password
                <input type="password" className="form-control" id="password" value="" placeholder=""/>
                </label>
              </div>
              <br/>
              <button type="submit" className="btn btn-success btn-block">Submit</button>
            </form> */}
              <br/>
        </div>

        <div className="form-group">
            {/* <a className="btn btn-warning btn-block my-1" href="/auth/google"> */}
            <a className="btn btn-warning btn-block my-1" href="/dashboard">
                <span> <i className="fab fa-google"></i> Sign in with Google</span>
            </a>
        </div>
      </div>
      



      


    );
  }
}
export default SignInCard;
                  
                  
                  
                  
