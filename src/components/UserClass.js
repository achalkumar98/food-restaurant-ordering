import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Fetching location...",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/achalkumar98");
      const json = await data.json();

      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
          <img
            className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300"
            src={avatar_url || "https://via.placeholder.com/150"}
            alt="User Avatar"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{name}</h2>
          <h3 className="text-gray-600 text-lg">{location}</h3>
          <h4 className="text-gray-500 mt-2">Contact: @hackerachal98</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
