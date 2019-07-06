import React, { Component } from "react";
import "./style.css";

class EmailForm extends Component {
  // Setting the component's initial state
  state = {
    eMail: "",

  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.eMail} `);
    this.setState({
      firstName: "",
      passWord: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (

      <div className="text-center">
      {/* <body className="text-center"> */}
        <form className="eMail-form form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

          <input
            value={this.state.eMail}
            name="eMail"
            onChange={this.handleInputChange}
            type="text"
            placeholder="EMail"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button className="submitButton" onClick={this.handleFormSubmit}>Submit</button>


        </form>
      {/* </body> */}
      </div>
    );
  }
}

export default EmailForm;

