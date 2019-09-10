import React, { Component } from "react";

class GoogleLogin extends Component {
  render() {
    return (

      <div className="form-group">
        <a className="btn btn-warning btn-block my-1" href="/auth/google">
          <span> <i className="fab fa-google"></i> Sign in with Google</span>
        </a>
      </div>

      // app.get('/auth/google', passport.authenticate('google', {
      //     scope: ['profile']
      //   }));

      // app.get('/google/redirect', passport.authenticate('google'), (req, res) => {
      //     res.redirect('/profile');
      //   });

    );
  }
}

export default GoogleLogin;







