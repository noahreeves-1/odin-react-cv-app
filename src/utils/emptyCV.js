import { v4 as uuidv4 } from "uuid";

const exampleCV = {
  personalInfo: {
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  },
  professionalInfo: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      startDate: "",
      endDate: "",
    },
  ],
  educationalInfo: [
    {
      id: uuidv4(),
      schoolName: "",
      degreeOrTitle: "",
      subject: "",
      startDate: "",
      endDate: "",
    },
  ],
};

export default exampleCV;
