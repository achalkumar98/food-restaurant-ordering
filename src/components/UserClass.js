import React from "react";


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        avatar_url: "https://via.placeholder.com/120",
        bio: "Fetching data...",
        twitter_username: "@loading",
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
    const { name, location, avatar_url, bio, twitter_username } =
      this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Avatar" />
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h2>{bio}</h2>
        <h2>{twitter_username ? `@${twitter_username}` : "No Twitter"}</h2>
      </div>
    );
  }
}

export default UserClass;
