import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../Api/Auth.api";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const FormData = {
        email,
        name,
        password,
      };
      await userSignUp(FormData)

      // Reset form fields and loading state upon success
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setIsLoading(false);

      // Redirect to login page or handle success logic
      navigate("/auth/login");
    } catch (error) {
      // Handle registration failure, e.g., display an error message
      setIsLoading(false);
      console.error(error);
      alert("Registration failed. Please try again.");
    }
  };

  const isFormValid =
    name &&
    email &&
    password &&
    confirmPassword &&
    password === confirmPassword;

  return (
    <Container
      maxWidth="sm"
      sx={{ backgroundColor: "white", height: "500px", zIndex: 1 }}
      className="p-3"
    >
      <Typography variant="h4" align="center" className="mt-3 mb-3">
        Register
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <TextField
          label="Name"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!isFormValid || isLoading}
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Register"
          )}
        </Button>
        <p>
          Already have an account ?
          <span
            className="text-info m-1"
            onClick={() => navigate("/auth/login")}
            style={{ cursor: "pointer" }}
          >
            LogIn
          </span>
        </p>
      </form>
    </Container>
  );
}

export default Register;
