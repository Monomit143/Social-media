import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import Favorite from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FavoriteBorder } from "@mui/icons-material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useDispatch, useSelector } from "react-redux";
import { fatchPost } from "../ApiBase/Api";
const Post = () => {
  const { isLoading, postValue, error } = useSelector((state) => {
    return state.users;
  });
  console.log("api data is", postValue);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(fatchPost())
      .then((res) => {
        if (res?.status === 200) {
          console.log("post data is", res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [disPatch]);
  return (
    <Box flex={4} p={2}>
      {postValue?.map?.((item) => {
        return (
          <React.Fragment key={item.id}>
            <Card sx={{ mb: "60px" }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: "red" }}
                    aria-label="recipe"
                    src="https://c0.wallpaperflare.com/preview/262/256/994/boys-friends-girl-men.jpg"
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="20%"
                image={item.images}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                  />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <Checkbox
                    icon={<ThumbUpOutlinedIcon />}
                    checkedIcon={<ThumbUpOutlinedIcon />}
                  />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <Checkbox
                    icon={<ThumbDownOutlinedIcon />}
                    checkedIcon={<ThumbDownOutlinedIcon />}
                  />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default Post;
