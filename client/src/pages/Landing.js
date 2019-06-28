import React, { Component } from "react";
import IntroSummary from "../components/IntroSummary";
import LogIn from "../components/LogIn";
import EmailForm from "../components/EmailForm";



class Landing extends Component {

render() {
    return (

 <div className="row">      
  <div className="landingpage">




        <div className="col-6 summary">    
        <IntroSummary>
        </IntroSummary> 
        </div>
     
      

   
        <div className="col-6 login">    
        <LogIn>
            <EmailForm>
            
            </EmailForm>
        </LogIn> 
        </div>
    </div>

  </div>

    
    );
  }
}
export default Landing;