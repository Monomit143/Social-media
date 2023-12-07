import { ThemeProvider } from "@emotion/react";
import { Box, Button, Stack, Typography, createTheme } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../Components/SideBar";
import LayOut from "../Layoyt/LayOut";
import LogoutIcon from "@mui/icons-material/Logout";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { toast } from "react-toastify";
const Logout = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigat = useNavigate();
  const notify = () => {
    toast.success("Logout Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
      className: "foo-bar",
    });
    window.sessionStorage.clear();
    window.localStorage.clear();
    navigat("/login");
  };

  return (
    <>
      <LayOut>
        <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <Stack direction="row" spacing={2} justifyContent="space-evenly">
              <SideBar setMode={setMode} mode={mode} />
              <Box flex={4} p={2} sx={{ minHeight: "800px" }}>
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    padding: "20px 25px",
                    gap: "150px",
                    alignItems: "center",
                  }}
                >
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<LogoutIcon />}
                    onClick={notify}
                  >
                    LOGOUT
                  </Button>
                  <Typography variant="h5"></Typography>
                </Typography>
              </Box>
            </Stack>
          </Box>
        </ThemeProvider>
      </LayOut>
    </>
  );
};

export default Logout;
