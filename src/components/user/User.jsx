import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const {id} = useParams();
  return <div className="text-center p-10 text-3xl bg-indigo-100 font-bold text-red-500">User:{id}</div>;
}

export default User;
