import React from "react";
import UserContextProvider from "../contexts/UserContextProvider";

import Login from "./userDetails/Login.jsx";
import Profile from "./userDetails/Profile.jsx";

function UserInfo() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default UserInfo;
