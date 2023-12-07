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
  Typography,
  createTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { GrouGet_Api } from "../ApiBase/Api";
import ShareIcon from "@mui/icons-material/Share";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const Group = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const { postValue } = useSelector((state) => {
    return state.users;
  });
  console.log("postGet data is", postValue);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(GrouGet_Api());
  }, [disPatch]);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar mode={mode} />
          <Stack direction="row" spacing={2} justifyContent="space-evenly">
            <SideBar setMode={setMode} mode={mode} />
            <Box flex={6} p={2}>
              <Box flex={6} p={2}>
                <Typography variant="h5" sx={{ paddingTop: "20px" }}>
                  <marquee behavior="scroll" direction="right">
                    Group
                  </marquee>
                </Typography>
                <Grid container spacing={2}>
                  {postValue?.map?.((item) => {
                    return (
                      <>
                        <Grid item xs={3} sx={{ marginTop: "30px" }}>
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              sx={{ height: 140 }}
                              image={item.images}
                              title="green iguana"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                {item.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cumque neque iste at
                                distinctio. Repudiandae, blanditiis.
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button
                                variant="contained"
                                size="small"
                                startIcon={<ShareIcon />}
                              >
                                Share
                              </Button>
                              <Button
                                variant="contained"
                                size="small"
                                startIcon={<AddCircleIcon />}
                              >
                                Join Us
                              </Button>
                            </CardActions>
                          </Card>
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Group;
