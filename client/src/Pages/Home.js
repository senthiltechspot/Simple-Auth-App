import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validateToken from "../Utils/TokenVaildator";
import DashBoard from "../Components/DashBoard";
const Home = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // validatetoken
    const { valid, expired } = validateToken();
    if (valid === true && expired === false) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <div>
      {isAuthenticated ? (
        <DashBoard />
      ) : (
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <h3>You are not authenticated. Please log in.</h3>
          <button
            className="btn btn-info"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
