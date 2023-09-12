import React from "react";
import { useParams } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";

const Auth = () => {
  const { Authtype } = useParams();
  const renderComponent = () => {
    switch (Authtype) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      default:
        return null;
    }
  };
  return (
    <div
      style={{
        position: "relative", // Make the container a positioning context
        backgroundImage: `url(" https://source.unsplash.com/random/?Animals+Art+Textures+Landscape&1")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
      className="d-flex justify-content-center align-items-center p-4"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black overlay
        }}
      ></div>
      {renderComponent()}
    </div>
  );
};

export default Auth;
