import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import { updateUser } from "../Api/User.api";

const UserUpdateForm = ({ FetchUserData, userData, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const GetDate = (dateString) => {
    // Create a Date object from the dateString
    const date = new Date(dateString);

    // Get the year, day, and month from the Date object
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const RoundDay = day < 10 ? `0${day}` : day;
    const RoundMonth = month < 10 ? `0${month}` : month;
    return `${year}-${RoundMonth}-${RoundDay}`;
  };
  const [formData, setFormData] = useState({
    name: userData.name || "",
    age: userData.age || "",
    gender: userData.gender || "",
    dob: userData.dob ? GetDate(userData.dob) : "",
    mobile: userData.mobile || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let data = {};
    if (formData.name) {
      data.name = formData.name;
    }
    if (formData.age) {
      data.age = formData.age;
    }
    if (formData.gender) {
      data.gender = formData.gender;
    }
    if (formData.dob) {
      data.dob = formData.dob;
    }
    if (formData.mobile) {
      data.mobile = formData.mobile;
    }

    try {
      await updateUser(data);
      await FetchUserData();
      handleClose();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Age"
            name="age"
            fullWidth
            value={formData.age}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="gender">Gender</InputLabel>
          <Select
            label="Gender"
            name="gender"
            fullWidth
            value={formData.gender}
            onChange={handleChange}
            id="gender"
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="dob">Date of Birth</InputLabel>

          <TextField
            type="date"
            name="dob"
            fullWidth
            value={formData.dob}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            label="Mobile"
            name="mobile"
            fullWidth
            value={formData.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} className="d-flex justify-content-center">
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Update"
            )}
          </Button>
        </Grid>
        <Grid item xs={12} className="d-flex justify-content-center">
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleClose}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserUpdateForm;
