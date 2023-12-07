import React, { useState } from "react";

import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Stack,
  createTheme,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import SideBar from "../Components/SideBar";
import { useDispatch } from "react-redux";
import { regis_post } from "../ApiBase/Api";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
const Registration = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [imgState, setImgState] = useState();
  let [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    error: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });
  const naviget = useNavigate();
  const disPatch = useDispatch();
  const changehandel = (e) => {
    const { name, value } = e.target;
    const errMag = state.error;
    setState({ ...state, [name]: value, error: errMag });
    // console.log(state);
  };
  const SubmitHandel = (e) => {
    e.preventDefault();
    console.log("Submit value is", state);
    const formData = new FormData();
    formData.append("first_name", state.first_name);
    formData.append("last_name", state.last_name);
    formData.append("email", state.email);
    formData.append("password", state.password);
    formData.append("profile_pic", imgState);
    disPatch(regis_post(formData))
      .then((res) => {
        if (res.payload.status === 200) {
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
          naviget("/login");
        }
      })
      .catch((err) => {
        swal({
          title: "Sorry!",
          text: "You clicked the button!",
          icon: "error",
          button: "Sorry!",
        });
        console.log("REg Error is", err);
      });
  };
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar mode={mode} />
          <Stack direction="row" spacing={2} justifyContent="space-evenly">
            <SideBar setMode={setMode} mode={mode} />
            <Box flex={4} p={2} height="100vh">
              <Typography variant="h4" sx={{ padding: "20px 24px" }}>
                Registartion Form
              </Typography>
              <Box
                component="form"
                onSubmit={SubmitHandel}
                sx={{
                  "& .MuiTextField-root": { m: 3, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    label="First name"
                    name="first_name"
                    type="text"
                    placeholder="Enter Your Frist Name"
                    onChange={changehandel}
                  />
                  <TextField
                    label="Last Name"
                    type="text"
                    name="last_name"
                    placeholder="Enter Your Last Name"
                    onChange={changehandel}
                  />
                </div>
                <div>
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    onChange={changehandel}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    onChange={changehandel}
                  />
                </div>
                <div>
                  <TextField
                    type="file"
                    name="profile_pic"
                    placeholder="Uplode Your Photo"
                    onChange={(even) => setImgState(even.target.files[0])}
                    accept="image/*"
                  />
                </div>
                <div style={{ paddingLeft: "25px" }}>
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </div>
              </Box>
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Registration;
