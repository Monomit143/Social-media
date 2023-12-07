import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Box, Stack, Typography, createTheme } from "@mui/material";
import SideBar from "../Components/SideBar";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useDispatch } from "react-redux";
import { profile_get } from "../ApiBase/Api";
import Navbar from "../Components/Navbar";
const Profile = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    register_type: "",
    profile_pic: "",
  };
  const [single_user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("profile", single_user);
    dispatch(profile_get())
      .then((res) => {
        if (res.payload.status === 200) {
          let base_url = "https://wtsacademy.dedicateddevelopers.us/";
          let folder_path = "uploads/user/profile_pic/";
          let img_url = base_url + folder_path + res.payload.data.profile_pic;
          window.localStorage.setItem("profile_image", img_url);

          setUser({ ...res.payload.data, profile_pic: img_url });
        } else {
          console.log("Profile error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar mode={mode} />
          <Stack direction="row" spacing={2} justifyContent="space-evenly">
            <SideBar setMode={setMode} mode={mode} />
            <Box flex={4} p={2} sx={{ minHeight: "800px" }}>
              <Typography variant="h4" sx={{ padding: "20px 44px" }}>
                My Profile
              </Typography>
              <Stack direction="row">
                <Box padding={5}>
                  <Typography
                    p={1}
                    variant="h5"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    First Name is <ArrowRightAltIcon />
                    {single_user.first_name}
                  </Typography>
                  <Typography
                    p={1}
                    variant="h5"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    Last Name is <ArrowRightAltIcon />
                    {single_user.last_name}
                  </Typography>
                  <Typography
                    p={1}
                    variant="h5"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    Email Id is <ArrowRightAltIcon />
                    {single_user.email}
                  </Typography>
                </Box>
                <Box
                  p={4}
                  sx={{
                    transition: "0.6s",
                    "&:hover": {
                      transform: " rotateY(170deg)",
                    },
                  }}
                >
                  <img
                    src={single_user.profile_pic}
                    alt="profile_pic"
                    width={500}
                    style={{
                      borderRadius: "20px 80px",
                      transform: "rotate(10deg)",
                    }}
                  />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Profile;
