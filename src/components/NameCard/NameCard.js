import React from "react";
import "./NameCard.css";
export const NameCard = ({ userData }) => {
  return (
    <>
      {userData &&
        userData.map((user, i) => (
          <div className="card" key={i}>
            <p>Name: {user.name} </p>
            <p>Profile Name: {user.profileName}</p>
            <p>Email: {user.email} </p>
            <p>City: {user.city} </p>
            <p>Mobile: {user.mobile} </p>
          </div>
        ))}
    </>
  );
};
