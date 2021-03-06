import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import "./Register.css";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row" style={{ marginTop: "3rem" }}>
          <div className="col s8 offset-s2 cyan darken-4 white-text z-depth-5 Register">
            <Link
              to="/"
              className="btn-flat waves-effect white-text"
              style={{ marginTop: "1rem" }}
            >
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div
              className="col s10"
              style={{ paddingLeft: "11.250px", paddingBottom: "1rem" }}
            >
              <h4>
                <b>
                  <span role="img" aria-label="Tractor">
                    🚜
                  </span>{" "}
                  Register
                </b>{" "}
                for Farm Manager{" "}
                <span role="img" aria-label="Tractor">
                  🚜
                </span>
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s10">
                <input
                  style={{ margin: "0", paddingLeft: "1rem", color: "white" }}
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s10">
                <input
                  style={{ margin: "0", paddingLeft: "1rem", color: "white" }}
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s10">
                <input
                  style={{ margin: "0", paddingLeft: "1rem", color: "white" }}
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s10">
                <input
                  style={{ margin: "0", paddingLeft: "1rem", color: "white" }}
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s10" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom: "2rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
                <img
                  src="/img/cow.png"
                  style={{ height: "5rem", marginLeft: "2rem" }}
                  alt="logo"
                />
                <img
                  src="/img/chicken.png"
                  style={{ height: "5rem", marginLeft: "1rem" }}
                  alt="logo"
                />
                <img
                  src="/img/pig.png"
                  style={{ height: "5rem", marginLeft: "1rem" }}
                  alt="logo"
                />
                <img
                  src="/img/sheep.png"
                  style={{ height: "5rem", marginLeft: "1rem" }}
                  alt="logo"
                />
                <img
                  src="/img/crocodile.png"
                  style={{ height: "5rem", marginLeft: "1rem" }}
                  alt="logo"
                />
                <p
                  className="white-text"
                  style={{
                    marginBottom: "2rem",
                    marginTop: "1rem",
                    fontSize: "1.4rem",
                  }}
                >
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
