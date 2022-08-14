import React, { Component } from "react";
import CvForm from "./CvForm/CVForm";
import SampleCV from "./SampleCV/SampleCV";
import { v4 as uuidv4 } from "uuid";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        firstName: "",
        middleName: "",
        lastName: "",
        address: "",
        email: "",
        phoneNumber: "",
      },
      professionalInfo: [
        {
          id: uuidv4(),
          jobTitle: "",
          orgName: "",
          detailExp: "",
          startDate: "",
          endDate: "",
        },
      ],
      educationalInfo: [
        {
          id: uuidv4(),
          schoolName: "",
          degreeName: "",
          startDate: "",
          endDate: "",
          highlights: "",
        },
      ],
    };
  }

  updatePerson = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));

    console.log(this.state);
  };

  updateProf = (e, id) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const newExperience = prevState.professionalInfo.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });

      return { ...prevState, professionalInfo: [...newExperience] };
    });

    console.log(this.state);
  };

  addProfExp = () => {
    this.setState((prevState) => ({
      professionalInfo: [
        ...prevState.professionalInfo,
        {
          id: uuidv4(),
          jobTitle: "",
          orgName: "",
          detailExp: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
    // how to add new professional form?
    // create new experience array and concat it to professional object in state
    return console.log(this.state);
  };

  deleteProfExp = (id) => {
    this.setState((prevState) => {
      const newExperience = prevState.professionalInfo.filter(
        (profExpItem) => profExpItem.id !== id
      );
      return { ...prevState, professionalInfo: [...newExperience] };
    });
  };

  // addBullet = () => {
  //   this.setState((prevState)) => {
  //     const newBullets = prevState.professionalInfo.detailExp.map((eachBullet) => {
  //       //
  //     })

  //     return {...prevState, detailExp: [...newBullets]}
  //   }
  //   console.log("hello");
  // };

  // deleteBullet = () => {
  //   console.log("this isn't that hard");
  // };

  updateEdu = (e, id) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const newExperience = prevState.educationalInfo.map((eduExpItem) => {
        if (eduExpItem.id === id) {
          return { ...eduExpItem, [name]: value };
        }
        return eduExpItem;
      });

      return { ...prevState, educationalInfo: [...newExperience] };
    });

    console.log(this.state);
  };

  addEduExp = () => {
    // create new experience array and concat it to education object in state
    this.setState((prevState) => ({
      educationalInfo: [
        ...prevState.educationalInfo,
        {
          id: uuidv4(),
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  deleteEduExp = (id) => {
    this.setState((prevState) => {
      const newEduExperience = prevState.educationalInfo.filter((eduItem) => {
        return eduItem.id !== id;
      });

      return { ...prevState, educationalInfo: [...newEduExperience] };
    });
  };

  generateCV = () => {
    const firstName = this.state.personalInfo.firstName;
    const middleName = this.state.personalInfo.middleName;
    const lastName = this.state.personalInfo.lastName;

    const fullName = firstName + " " + middleName + " " + lastName;
    return console.log(fullName);
  };

  render() {
    return (
      <div>
        <CvForm
          //PERSONAL
          updatePerson={this.updatePerson}
          //PROF
          profInfo={this.state.professionalInfo}
          updateProf={this.updateProf}
          addProfExp={this.addProfExp}
          deleteProfExp={this.deleteProfExp}
          //EDU
          eduInfo={this.state.educationalInfo}
          updateEdu={this.updateEdu}
          addEduExp={this.addEduExp}
          deleteEduExp={this.deleteEduExp}
        />
        <button type="button" onClick={() => this.generateCV}>
          Generate CV
        </button>
        <SampleCV cv={this.state} />
      </div>
    );
  }
}

export default Main;
