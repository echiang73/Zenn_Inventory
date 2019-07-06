import React, { Component } from "react";
import IntroSummary from "../components/IntroSummary";
import LogIn from "../components/LogIn";
import EmailForm from "../components/EmailForm";
import GoogleLogin from "../components/GoogleLogin";




class Landing extends Component {

render() {
    return (

     
  <div className="landingpage">



    <div className="row">
        <div className="col-6 split-screen-col align-items-center summary">    
        <IntroSummary>

        </IntroSummary> 
        </div>
     
      

   
        <div className="col-6 split-screen-col align-items-center login">    
        <LogIn>
            <EmailForm>
              <GoogleLogin>

              </GoogleLogin>
            </EmailForm>
        </LogIn> 
        </div>
    </div>  

    </div>



    
    );
  }
}
export default Landing;