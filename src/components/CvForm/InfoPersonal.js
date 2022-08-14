import React, { Component } from "react";

// basic info like name, email, phone
class InfoPersonal extends Component {
  // NAME, EMAIL, PHONE NUMBER
  render() {
    // const
    return (
      <div>
        <h2>Personal Information</h2>
        <form className="personal-info" onChange={this.props.updatePerson}>
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
            ></input>
          </label>

          <label>
            Middle Name
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
            ></input>
          </label>

          <label>
            Last Name
            <input type="text" name="lastName" placeholder="Last Name"></input>
          </label>

          <label>
            Address
            <input type="text" name="address" placeholder="Address"></input>
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="Email"></input>
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default InfoPersonal;
