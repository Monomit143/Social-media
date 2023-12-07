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
import SideBar from "../Components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import LayOut from "../Layoyt/LayOut";
import { MarketGet_Api } from "../ApiBase/Api";
import Navbar from "../Components/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Market = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const { isLoading, postValue, error } = useSelector((state) => {
    return state.users;
  });
  console.log("postGet data is", postValue);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(MarketGet_Api());
  }, [disPatch]);
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
                  Market
                </marquee>
              </Typography>
              <Grid container spacing={2}>
                {postValue?.products?.map((item) => {
                  return (
                    <>
                      <Grid item xs={3} sx={{ marginTop: "30px" }}>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            sx={{ height: 240 }}
                            image={item.thumbnail}
                            title="green iguana"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {item.title && item.title.slice(0, 20)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.description &&
                                item.description.slice(0, 40)}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              variant="contained"
                              size="small"
                              startIcon={<ShoppingCartIcon />}
                            >
                              Buy
                            </Button>
                            <Button variant="contained" size="small">
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

export default Market;
