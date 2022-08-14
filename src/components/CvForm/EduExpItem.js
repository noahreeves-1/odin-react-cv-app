import React, { Component } from "react";

class EduExpItem extends Component {
  render() {
    const { id, updateEdu, eduExpItem, deleteEduExp } = this.props;

    return (
      <div>
        <form className="edu-info">
          <label>
            School Name:
            <input
              type="text"
              name="schoolName"
              placeholder="School Name"
              value={eduExpItem.schoolName}
              onChange={(e) => updateEdu(e, id)}
            ></input>
          </label>

          <label>
            Degree:
            <input
              type="text"
              name="degreeName"
              placeholder="Degree"
              value={eduExpItem.degreeName}
              onChange={(e) => updateEdu(e, id)}
            ></input>
          </label>

          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              placeholder="Start Date"
              value={eduExpItem.startDate}
              onChange={(e) => updateEdu(e, id)}
            ></input>
          </label>

          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              placeholder="End Date"
              value={eduExpItem.endDate}
              onChange={(e) => updateEdu(e, id)}
            ></input>
          </label>

          <label>
            Highlights:
            <textarea
              name="highlights"
              value={eduExpItem.highlights}
              placeholder="Anything to higlight?"
              onChange={(e) => updateEdu(e, id)}
            ></textarea>
          </label>

          <button type="button" onClick={() => deleteEduExp(id)}>
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default EduExpItem;
