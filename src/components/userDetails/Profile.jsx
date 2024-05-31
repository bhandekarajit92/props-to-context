import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h1>Please Login</h1>;
  }
  return <h1>Welcome {user.username}</h1>;
}

export default Profile;
