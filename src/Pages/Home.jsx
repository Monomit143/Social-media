import { ThemeProvider } from "@emotion/react";
import {
  Avatar,
  Box,
  Paper,
  Stack,
  TextField,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Feeds from "../Components/Feeds";
import RightBar from "../Components/RightBar";
import Add from "../Components/Addpage";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PhotoIcon from "@mui/icons-material/Photo";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F2F3F4",
  padding: theme.spacing(1),
  width: "200px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "center",
}));
const Home = () => {
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
            <Box flex={6} p={2}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  src="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-1/366384148_122097935000010531_5662015118234355132_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_ohc=MwoB4GvjATAAX8g8ZLS&_nc_ht=scontent.fccu4-2.fna&oh=00_AfC_yY-9XVuWiwUjn4VhO1wY9jlP4ognbZkuM6vHaXEqlg&oe=6571FD09"
                  sx={{ width: 56, height: 56 }}
                />

                <TextField
                  label="What's your mind................?"
                  defaultValue=""
                  variant="filled"
                  sx={{ borderRadius: "50px", width: "89%" }}
                />
              </Stack>

              <Stack
                direction="row"
                spacing={2}
                sx={{ marginLeft: "73px", marginTop: "20px" }}
              >
                <Item>
                  {" "}
                  <VideoCameraFrontIcon
                    style={{ color: "#E74C3C", fontSize: "30px" }}
                  />
                  <Typography style={{ marginTop: "2%", marginLeft: "3%" }}>
                    Live Video
                  </Typography>
                </Item>
                <Item>
                  <PhotoIcon style={{ color: "#2ECC71", fontSize: "30px" }} />
                  <Typography style={{ marginTop: "2%", marginLeft: "3%" }}>
                    Photos/Videos
                  </Typography>
                </Item>
                <Item>
                  <SentimentVerySatisfiedIcon
                    style={{ color: "#F1C40F", fontSize: "30px" }}
                  />
                  <Typography style={{ marginTop: "2%", marginLeft: "3%" }}>
                    Felling/Status
                  </Typography>
                </Item>
              </Stack>
              <Box>
                <Feeds />
              </Box>
            </Box>
            <Box flex={3}>
              <RightBar />
            </Box>
          </Stack>
        </Box>
        <Add />
      </ThemeProvider>
    </>
  );
};

export default Home;
