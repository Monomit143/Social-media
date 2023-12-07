import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import SideBar from "../Components/SideBar";
import { useDispatch } from "react-redux";
import { login_post } from "../ApiBase/Api";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
const Login = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const naviget = useNavigate();
  const initialState = {
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
    },
  };
  const disPatch = useDispatch();
  const [set, setState] = useState(initialState);
  const changehandel = (e) => {
    const { name, value } = e.target;
    const errmsg = set.error;
    setState({ ...set, [name]: value, error: errmsg });
    console.log("login data is", set);
  };
  const SubmitHandel = (e) => {
    e.preventDefault();
    console.log("login data is", set);
    const formdata = new FormData();
    formdata.append("email", set.email);
    formdata.append("password", set.password);
    disPatch(login_post(formdata))
      .then((action) => {
        if (action.payload.status === 200) {
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
          window.sessionStorage.setItem("Token", action.payload.token);
          naviget("/profile");
        } else {
          swal({
            title: "Sorry!",
            text: "You clicked the button!",
            icon: "error",
            button: "Sorry!",
          });
        }
      })
      .catch((err) => {
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
            <Box flex={3} p={2} sx={{ minHeight: "800px" }}>
              <Typography variant="h4" sx={{ padding: "20px 25px" }}>
                Login
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
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    onChange={changehandel}
                  />
                </div>
                <div>
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    onChange={changehandel}
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

export default Login;
