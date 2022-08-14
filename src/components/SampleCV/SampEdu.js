import { Component } from "react";

class SampEdu extends Component {
  render() {
    const { eduInfo } = this.props;
    const eduExperiences = eduInfo.map((eachItem) => {
      return (
        <div
          className="edu-exp-item-wrapper"
          key={eachItem.id}
          id={eachItem.id}
        >
          <div className="edu-exp-item-header">
            <div>
              <div className="school-name">{eachItem.schoolName}</div>
              <div className="degree-name">{eachItem.degreeName}</div>
            </div>
            <div className="edu-start-end-dates">
              {eachItem.startDate} - {eachItem.endDate}
            </div>
          </div>

          <div className="edu-highlights">{eachItem.highlights}</div>
        </div>
      );
    });

    return (
      <div>
        <h2 className="education-section-title">Education</h2>
        {eduExperiences}
      </div>
    );
  }
}

export default SampEdu;
