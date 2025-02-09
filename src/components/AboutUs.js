import UserClass from "./UserClass";
import { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <h1>About Ourself</h1>
        <UserClass name={"First"} location={"Arrah"} />
      </div>
    );
  }
}

export default AboutUs;
