import React, { Component } from "react";
import ProfExpItem from "./ProfExpItem";

class InfoProfessional extends Component {
  render() {
    const experienceItems = this.props.profInfo.map((profItem) => {
      return (
        <ProfExpItem
          key={profItem.id}
          id={profItem.id}
          profItem={profItem}
          updateProf={this.props.updateProf}
          deleteProfExp={this.props.deleteProfExp}
          // onDelete={this.props.onDelete}
        />
      );
    });

    return (
      <div>
        <h2>Professional</h2>
        {experienceItems}
        <button onClick={this.props.addProfExp}>
          Add Professional Experience
        </button>
      </div>
    );
  }
}

export default InfoProfessional;
