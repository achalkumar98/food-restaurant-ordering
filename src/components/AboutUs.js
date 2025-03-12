import UserClass from "./UserClass";
import { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-800">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold">About Us</h1>
          <p className="text-lg mt-2 text-gray-600">
            Meet the Developer behind this project!
          </p>
        </div>

        {/* User Profile Section */}
        <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-2xl border border-gray-200">
          <UserClass />
        </div>
      </div>
    );
  }
}

export default AboutUs;
