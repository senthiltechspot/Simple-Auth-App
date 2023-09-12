import React from "react";
import { useNavigate } from "react-router-dom";

const FourOFour = () => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h3>404 Error! Page Not Found.</h3>

      <button className="btn btn-info" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default FourOFour;
