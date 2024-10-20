import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="emp-card">
        <h2> Name : {this.props.name}</h2>
        <h3> Location : {this.props.location}</h3>
        <h3> Email : yoyo@superRoxxxSTAR.com</h3>
      </div>
    );
  }
}

export default UserClass;
