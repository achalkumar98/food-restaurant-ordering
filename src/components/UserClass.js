import React from "react";
import { FaGithub, FaMapMarkerAlt, FaUsers, FaCode } from "react-icons/fa";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Arrah",
        avatar_url: "",
        bio: "",
        followers: 0,
        public_repos: 0,
        html_url: "#",
      },
    };
  }

  async componentDidMount() {
   
      const response = await fetch("https://api.github.com/users/achalkumar98");
      const data = await response.json();

      this.setState({
        userInfo: data,
      });
  }

  render() {
    const { name, location, avatar_url, bio, followers, public_repos, html_url } =
      this.state.userInfo;

    return (
      <div className="text-center">
        {/* User Avatar */}
        <img
          className="w-40 h-40 rounded-full mx-auto border-4 border-gray-300 shadow-md"
          src={avatar_url}
          alt="User Avatar"
        />

        {/* User Details */}
        <h2 className="text-3xl font-bold text-gray-800 mt-4">{name}</h2>
        <p className="text-gray-600 text-lg flex items-center justify-center gap-2">
          <FaMapMarkerAlt /> {location}
        </p>
        <p className="text-gray-500 mt-2">{bio}</p>

        {/* User Stats */}
        <div className="flex justify-center gap-6 mt-4">
          <div className="text-center">
            <FaUsers className="text-blue-500 text-2xl mx-auto" />
            <p className="text-gray-700 font-semibold">{followers}</p>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>

          <div className="text-center">
            <FaCode className="text-purple-500 text-2xl mx-auto" />
            <p className="text-gray-700 font-semibold">{public_repos}</p>
            <p className="text-gray-500 text-sm">Repositories</p>
          </div>
        </div>

        {/* GitHub Profile Button */}
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-gray-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          <FaGithub className="inline mr-2" /> View GitHub Profile
        </a>
      </div>
    );
  }
}

export default UserClass;
