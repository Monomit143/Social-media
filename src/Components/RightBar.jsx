import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import React from "react";
import { itemData, messages } from "./Datalist";

const RightBar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block", overflow: "hidden" } }}
    >
      <Box width={300} position="fixed">
        <Typography
          variant="h6"
          fontWeight={100}
          sx={{ paddingBottom: "15px" }}
        >
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
          <Avatar
            alt="Remy Sharp"
            src="https://wallpaperaccess.com/full/6413425.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://c1.wallpaperflare.com/preview/314/477/97/beach-cliff-daylight-early-morning.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtuSooY9PZ-bboRzwZe7xC5Otr6US6cFK9V58yOkRbtTL3wQZ0bk2NHDvdK7wt8NLDI8&usqp=CAU"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jbDP_P_Ra3skBHX9ad86z14Qkoh5QADjMyCC2rjVjguRAE4-G8aCSP2bva28cjqaPzU&usqp=CAU"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sBS9Wiebl8PD3vjxRTHfzSwpq8y1u-z2K1jSCBhPxEKB0G2My2S0wxG1HOljKm2ukVk&usqp=CAU"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvw_PmjgggHksq1PjE2qSE-WRjyqJjje8TM614778o5xz3Jxc05qSehlLlWFLFMO_jMFM&usqp=CAU"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0CkQpI2s7E6wLrlcY_972VQKF84Uq1QvpCGVmnZbbEffuBFLLWkr-07lVAoHM9rG8jw&usqp=CAU"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAki_5HduHUVS5UsVBu5luKp0fbLmbO72DmJU4YodaVfPidZuh9336B7d5MKPF7Pn2ckU&usqp=CAU"
          />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList
          sx={{ width: 400, height: 220 }}
          cols={3}
          gap="3px"
          rowHeight={164}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversation
        </Typography>
        <React.Fragment>
          <CssBaseline />
          <Paper
            square
            sx={{
              pb: "50px",
              width: 400,
              height: "320px",
              overflowY: "scroll",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ p: 2, pb: 0 }}
            >
              Inbox
            </Typography>
            <List sx={{ mb: 2 }}>
              {messages.map(({ id, primary, secondary, person }) => (
                <React.Fragment key={id}>
                  {id === 1 && (
                    <ListSubheader sx={{ bgcolor: "background.paper" }}>
                      Today
                    </ListSubheader>
                  )}
                  {id === 3 && (
                    <ListSubheader sx={{ bgcolor: "background.paper" }}>
                      Yesterday
                    </ListSubheader>
                  )}
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={person} />
                    </ListItemAvatar>
                    <ListItemText primary={primary} secondary={secondary} />
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </React.Fragment>
      </Box>
    </Box>
  );
};

export default RightBar;
