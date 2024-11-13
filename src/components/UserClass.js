import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo : {
        },
        count : 0
      }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AtreyaViv");
    const json = await data.json();

    this.setState({
        userInfo : json
    })
  }

  render() {
    return (
      <div className="emp-card">
        <h2> Name : {this.state.userInfo.login}</h2>
        <img src={this.state.userInfo.avatar_url} />
        <h3> Location : {this.state.userInfo.location}</h3>
        <h3> Email : yoyo@superRoxxxSTAR.com</h3>
        <h3> Count : {this.state.count }</h3>
        <button onClick={()=> {
            this.setState({
                count: this.state.count + 1
            })
            }}>Click To increase</button>
      </div>
    );
  }
}

export default UserClass;
