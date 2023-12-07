import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import Feeds from "../Components/Feeds";
import RightBar from "../Components/RightBar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "../Components/Navbar";
import Add from "../Components/Addpage";
const Routing = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar mode={mode} />
          <Stack direction="row" spacing={2} justifyContent="space-evenly">
            <SideBar setMode={setMode} mode={mode} />
            <Feeds />
            <RightBar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Routing;
