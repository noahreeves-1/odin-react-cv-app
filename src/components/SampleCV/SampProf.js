import { Component } from "react";

class SampProf extends Component {
  render() {
    const { profInfo } = this.props;
    // create new variable that takes input from textarea and creates bullet
    // points for each experience

    const profExpDetails = profInfo.map((eachExp) => {
      return (
        <div key={eachExp.id} id={eachExp.id} className="prof-info-wrapper">
          <div className="prof-exp-item-header">
            <div className="org-title">
              <div className="org-name">{eachExp.orgName}</div>
              <div className="job-title">{eachExp.jobTitle}</div>
            </div>
            <div className="start-end-dates">
              {eachExp.startDate} - {eachExp.endDate}
            </div>
          </div>

          <div className="job-detail-exp">{eachExp.detailExp}</div>
        </div>
      );
    });

    return <div>{profExpDetails}</div>;
  }
}

export default SampProf;
