import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../Api/Auth.api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const FormData = {
        email,
        password,
      };
     const response = await userSignIn(FormData);
     localStorage.setItem("token", response.data.token);
      // Reset form fields and loading state upon success
      setEmail("");
      setPassword("");
      setIsLoading(false);

      // Redirect to profile or handle success logic
      navigate("/");
    } catch (error) {
      // Handle login failure, e.g., display an error message
      setIsLoading(false);
      console.error(error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const isFormValid = email && password && !isLoading;

  return (
    <Container
      maxWidth="sm"
      sx={{ backgroundColor: "white", height: "330px", zIndex: 1 }}
      className="p-3"
    >
      <Typography variant="h4" align="center" className="mt-3 mb-3">
        Login
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!isFormValid}
        >
          {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>
        <p>
          Don't have an account?
          <span
            className="text-info m-1"
            onClick={() => navigate("/auth/register")}
            style={{ cursor: "pointer" }}
          >
            Register
          </span>
        </p>
      </form>
    </Container>
  );
}

export default Login;
