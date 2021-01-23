import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form name="LoginForm">
          <label>Email : </label>
          <input type="email" name="email" />
          <label>Password : </label>
          <input type="password" name="Password" />
          <input type="submit" name="submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
