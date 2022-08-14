import React, { Component } from "react";
import EduExpItem from "./EduExpItem";

// SCHOOL NAME, TITLE OF STUDY, DATE OF STUDY
class InfoEducation extends Component {
  // render
  render() {
    const { updateEdu, addEduExp, eduInfo, deleteEduExp } = this.props;
    const newExperience = eduInfo.map((expItem) => {
      return (
        <EduExpItem
          key={expItem.id}
          id={expItem.id}
          eduExpItem={expItem}
          updateEdu={updateEdu}
          addEduExp={addEduExp}
          deleteEduExp={deleteEduExp}
        />
      );
    });

    return (
      <div>
        <h2>Education</h2>
        {newExperience}
        <button onClick={addEduExp}>Add Education</button>
      </div>
    );
  }
}

export default InfoEducation;
