import { Component } from "react";
import SampPers from "./SampPers";
import SampProf from "./SampProf";
import SampEdu from "./SampEdu";

class SampleCV extends Component {
  render() {
    return (
      <div className="sample-cv-wrapper">
        <SampPers personalInfo={this.props.cv.personalInfo} />
        <h2 className="cv-section-title">Professional Experience</h2>
        <SampProf profInfo={this.props.cv.professionalInfo} />
        <SampEdu eduInfo={this.props.cv.educationalInfo} />
      </div>
    );
  }
}

export default SampleCV;
