import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  console.log("data from Loader", data);

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/bhandekarajit92")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <div className="flex justify-center p-4">
      <div className="w-40">
        <img src={data.avatar_url} alt="Github profile" className="mx-auto" />
      </div>
      <div className="px-4">
        <h1 className="text-2xl text-green-500">User Name: {data.name}</h1>
        <h1 className="text-2xl text-green-500">Bio: {data.bio}</h1>
        <h1 className="text-2xl text-green-500">
          Github followers: {data.followers}
        </h1>
        <h1 className="text-2xl text-blue-500">
          Github Following: {data.following}
        </h1>
      </div>
    </div>
  );
}
export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/bhandekarajit92");
  return response.json();
};
