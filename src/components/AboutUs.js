import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");

    return (
      <div>
        <h1>About us</h1>
        <UserClass name={"First"} location={"Arrah"} />
      </div>
    );
  }
}

export default AboutUs;
