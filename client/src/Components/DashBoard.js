import { Box, Button, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserUpdateForm from "./UserUpdateForm";
import { getUser } from "../Api/User.api";
import HandleLogOut from "../Handlers/HandleLogout";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const DashBoard = () => {
  const [userData, setuserData] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const FetchUserData = async () => {
    const response = await getUser();
    setuserData(response.data);
    console.log(response);
  };
  useEffect(() => {
    FetchUserData();
  }, []);
  // return <UserUpdateForm />;
  const GetDate = (dateString) => {
    // Create a Date object from the dateString
    const date = new Date(dateString);

    // Get the year, day, and month from the Date object
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${day}/${month}/${year}`;
  };
  return (
    <Box>
      <div className="p-4">
        <h1>Welcome to DashBoard</h1>
      </div>
      {userData ? (
        <Box>
          <h3>Hello {userData.name}</h3>
          <h3>Email : {userData.email}</h3>
          {userData.age ? <h3>Age : {userData.age}</h3> : <></>}
          {userData.gender ? <h3>Gender : {userData.gender}</h3> : <></>}
          {userData.dob ? (
            <h3>Date of Birth : {GetDate(userData.dob)}</h3>
          ) : (
            <></>
          )}
          {userData.mobile ? <h3>Mobile Number : {userData.mobile}</h3> : <></>}

          <Box className="d-flex flex-column flex-wrap justify-content-center align-items-center p-3">
            <Button variant="contained" onClick={handleOpen}>
              Edit
            </Button>
          </Box>
        </Box>
      ) : (
        <></>
      )}
      <button
        className="btn btn-warning"
        onClick={() => {
          HandleLogOut();
          window.location.href = "/";
        }}
      >
        Logout
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }} className="p-3">
          <UserUpdateForm
            FetchUserData={FetchUserData}
            userData={userData}
            handleClose={handleClose}
            GetDate={GetDate}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default DashBoard;
