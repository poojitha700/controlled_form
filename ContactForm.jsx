import React, { Component } from "react";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      phonenumber: "",
      city: "",
      locality: "",
      address: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    let {
      firstname,
      lastname,
      phonenumber,
      city,
      locality,
      address,
    } = this.state;

    return (
      <section className="container card my-4">
        <article className="card-body">
          <h2 className="text-uppercase bg-primary d-flex justify-content-center">
            Contact Form
          </h2>
          <form onSubmit={this.handleSubmit}>
            <main className="row">
              <div className="form-group col-3">
                <label htmlFor="firstname">Firstname</label>
                <input
                  id="firstname"
                  placeholder="enter firstname"
                  name="firstname"
                  type="text"
                  value={firstname}
                  onChange={this.handleChange}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group col-3">
                <label htmlFor="lastname">Lastname</label>
                <input
                  id="lastname"
                  placeholder="enter lastname"
                  name="lastname"
                  type="text"
                  value={lastname}
                  onChange={this.handleChange}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group col-3">
                <label htmlFor="phonenumber">Phone Number</label>
                <input
                  id="phonenumber"
                  placeholder="enter moblie number"
                  name="phonenumber"
                  type="text"
                  value={phonenumber}
                  onChange={this.handleChange}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group col-3">
                <label htmlFor="City">City</label>
                <input
                  id="city"
                  placeholder="enter City"
                  name="city"
                  type="text"
                  value={city}
                  onChange={this.handleChange}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group col-3">
                <label htmlFor="Loality">Locality</label>
                <input
                  id="locality"
                  placeholder="enter Locality"
                  name="locality"
                  value={locality}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group col-3">
                <label htmlFor="Address">Address</label>
                <input
                  id="address"
                  placeholder="enter address"
                  name="address"
                  type="address"
                  value={address}
                  onChange={this.handleChange}
                  className="form-control"
                ></input>
              </div>
            </main>
            <div>
              <button className="btn btn-block btn-primary">Contact Us</button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default ContactForm;
