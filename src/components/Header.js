import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-container">
        <h1>CV Creator</h1>
      </div>
    );
  }
}

export default Header;
