import React, { Component } from "react";

class ProfExpItem extends Component {
  render() {
    const { id, updateProf, profItem, deleteProfExp } = this.props;

    // const bullets = profItem.detailExp.map((eachBullet) => {
    //   return (
    //     <ProfExpBullets
    //       key={eachBullet.id}
    //       id={eachBullet.id}
    //       updateProf={updateProf}
    //       deleteBullet={deleteBullet}
    //     />
    //   );
    // });

    return (
      // <form className="prof-info" onChange={this.props.updateProf}></form>
      <form className="prof-info">
        <label>
          Organization Name:
          <input
            type="text"
            name="orgName"
            placeholder="Organization Name"
            value={profItem.orgName}
            onChange={(e) => updateProf(e, id)}
          ></input>
        </label>

        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            placeholder="Job or Title"
            value={profItem.jobTitle}
            onChange={(e) => updateProf(e, id)}
          ></input>
        </label>

        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            value={profItem.startDate}
            onChange={(e) => updateProf(e, id)}
          ></input>
        </label>

        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            value={profItem.endDate}
            onChange={(e) => updateProf(e, id)}
          ></input>
        </label>

        <label>
          Experience:
          <textarea
            type="text"
            name="detailExp"
            placeholder="What did you accomplish?"
            value={profItem.detailExp}
            onChange={(e) => updateProf(e, id)}
          ></textarea>
        </label>

        <button onClick={() => deleteProfExp(id)}>onDelete</button>
      </form>
    );
  }
}

export default ProfExpItem;
