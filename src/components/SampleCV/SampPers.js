import { Component } from "react";

class SampPers extends Component {
  render() {
    const { personalInfo } = this.props;

    const fullName =
      personalInfo.firstName +
      " " +
      personalInfo.middleName +
      " " +
      personalInfo.lastName;

    return (
      <div>
        <div className="cv-header-name" id="cvHeaderName">
          {fullName}
        </div>
        <div className="cv-header-contact-wrapper" id="cvHeaderContactWrapper">
          <div>{personalInfo.phoneNumber}</div>
          <div>{personalInfo.address}</div>
          <div>{personalInfo.email}</div>
        </div>
      </div>
    );
  }
}

export default SampPers;
