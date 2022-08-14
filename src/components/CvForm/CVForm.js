import React, { Component } from "react";
import InfoEducation from "./InfoEducation";
import InfoPersonal from "./InfoPersonal";
import InfoProfessional from "./InfoProfessional";

class CvForm extends Component {
  render() {
    const {
      //PERSONAL
      updatePerson,
      //PROF
      profInfo,
      updateProf,
      addProfExp,
      deleteProfExp,
      //EDU
      eduInfo,
      updateEdu,
      addEduExp,
      deleteEduExp,
    } = this.props;

    return (
      <div>
        <InfoPersonal updatePerson={updatePerson} />
        <InfoProfessional
          updateProf={updateProf}
          profInfo={profInfo}
          addProfExp={addProfExp}
          deleteProfExp={deleteProfExp}
        />

        <InfoEducation
          eduInfo={eduInfo}
          updateEdu={updateEdu}
          addEduExp={addEduExp}
          deleteEduExp={deleteEduExp}
        />
      </div>
    );
  }
}

export default CvForm;
