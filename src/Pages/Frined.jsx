import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import { useDispatch, useSelector } from "react-redux";

import { Friendget_Api } from "../ApiBase/Api";
import Navbar from "../Components/Navbar";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
// import CircleLoader from "react-spinners/CircleLoader";
import ClipLoader from "react-spinners/ClipLoader";

const Frined = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [loading, setLoading] = useState(false);
  const [Imgloading, setImgloading] = useState(false);
  const { isLoading, postValue, error } = useSelector((state) => {
    return state.users;
  });
  console.log("postGet data is", postValue);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(Friendget_Api());
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [disPatch]);
  useEffect(() => {
    setImgloading(true);
    setTimeout(() => {
      setImgloading(false);
    }, 7000);
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar mode={mode} />
          <Stack direction="row" spacing={2} justifyContent="space-evenly">
            <SideBar setMode={setMode} mode={mode} />

            <Box flex={6} p={2}>
              <Typography variant="h5" sx={{ paddingTop: "20px" }}>
                <marquee behavior="scroll" direction="right">
                  Friends
                </marquee>
              </Typography>
              {loading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "250px",
                  }}
                >
                  <ClipLoader
                    loading={loading}
                    color="#6FD6E7"
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </Box>
              ) : (
                <Grid container spacing={2}>
                  {postValue?.map?.((item) => {
                    return (
                      <>
                        <Grid item xs={3} sx={{ marginTop: "30px" }}>
                          <Card sx={{ maxWidth: 345, height: "430px" }}>
                            {Imgloading ? (
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  paddingTop: "10px",
                                }}
                              >
                                <ClipLoader
                                  loading={Imgloading}
                                  color="#6FD6E7"
                                  size={30}
                                  aria-label="Loading Spinner"
                                  data-testid="loader"
                                />
                              </Box>
                            ) : (
                              <CardMedia
                                sx={{ height: "250px" }}
                                image={item.avatar_url}
                                title="green iguana"
                              />
                            )}
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                {item.login}
                              </Typography>
                            </CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                marginTop: "10px",
                              }}
                            >
                              <Button
                                size="small"
                                startIcon={<ThumbUpOffAltIcon />}
                                variant="outlined"
                              >
                                Like
                              </Button>
                              <Button
                                size="small"
                                startIcon={<ChatBubbleOutlineIcon />}
                                variant="outlined"
                              >
                                Comment
                              </Button>
                              <Button
                                size="small"
                                startIcon={<ShareIcon />}
                                variant="outlined"
                              >
                                Share
                              </Button>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                marginTop: "10px",
                                width: "40ch",
                              }}
                            >
                              <TextField
                                label="Message"
                                variant="standard"
                                sx={{ widows: "400px" }}
                              />
                              <Button
                                variant="contained"
                                size="small"
                                endIcon={<SendIcon />}
                              >
                                Send
                              </Button>
                            </Box>
                          </Card>
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
              )}
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Frined;
