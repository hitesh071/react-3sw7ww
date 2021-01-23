import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/reducer";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
  };
  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <div onSubmit={this.onSubmit}>
        <form name="LoginForm">
          <label>Email : </label>
          <input
            type="email"
            name="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <label>Password : </label>
          <input
            type="password"
            name="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <br />
          <input type="submit" name="submit" />
          {isLoginPending && <div>Please Wait...</div>}
          {isLoginSuccess && <div>Welcome back.</div>}
          {loginError && <div>{loginError.message}</div>}
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
