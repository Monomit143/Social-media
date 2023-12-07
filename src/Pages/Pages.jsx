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
import { PagesGet_Api } from "../ApiBase/Api";

const Pages = () => {
  const { postValue } = useSelector((state) => {
    return state.users;
  });
  console.log("postGet data is", postValue);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(PagesGet_Api());
  }, [disPatch]);
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
              <Typography variant="h5" sx={{ paddingTop: "20px" }}>
                <marquee behavior="scroll" direction="right">
                  Pages
                </marquee>
              </Typography>
              <Grid container spacing={2}>
                {postValue?.articles?.map((item) => {
                  return (
                    <>
                      <Grid item xs={3} sx={{ marginTop: "30px" }}>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            sx={{ height: 140 }}
                            image={item.urlToImage}
                            title="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {item.source.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.description &&
                                item.description.slice(0, 80)}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              variant="contained"
                              href={item.author}
                              size="small"
                            >
                              Join Us
                            </Button>
                            <Button size="small" href={item.url}>
                              Learn More
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Pages;
