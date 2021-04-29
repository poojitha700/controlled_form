import React, { Component, Fragment } from "react";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <Fragment>
        <section id="authForm">
          <article className="card-body">
            <h1 className="text-warning text-uppercase col-4 mx-auto">
              Registration
            </h1>
            <form id="form" onSubmit={this.handleSubmit}>
              <div className="form-group col-4 mx-auto">
                <label htmlFor="username" className="text-warning">
                  USERNAME:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  id="username"
                  name="username"
                ></input>
              </div>
              <div className="form-group col-4 mx-auto">
                <label htmlFor="email" className="text-warning">
                  EMAIL:
                </label>
                <input
                  id="email"
                  className="form-control"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder="enter Email"
                ></input>
              </div>
              <div className="form-group col-4 mx-auto">
                <label htmlFor="password" className="text-warning">
                  PASSWORD:
                </label>
                <input
                  id="password"
                  className="form-control"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="enter password"
                ></input>
              </div>
              <div className="form-group col-4 mx-auto">
                <button className="btn btn-warning btn-block">LOGIN</button>
              </div>
            </form>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default Register;
