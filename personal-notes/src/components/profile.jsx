import React from "react";
import "../styles/Profile.css";
import profpic from "../img.JPG";

const Profile = () => {
  return (
      <div className="card">
        <img src={profpic} alt="Fauzan" className="img"/>
        <h1>Fauzan Galib</h1>
      </div>
  );
};
export default Profile;
