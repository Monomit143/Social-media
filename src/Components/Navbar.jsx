import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { Mail, Notifications } from "@mui/icons-material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Link } from "react-router-dom";
const Tool = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Searchbar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "2px 15px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = ({ mode }) => {
  const [open, setOpen] = useState(false);
  const isToken = window.sessionStorage.getItem("Token");
  console.log(isToken);
  return (
    <>
      <AppBar position="sticky">
        <Tool>
          <Typography
            sx={{
              display: {
                xs: "none",
                sm: "block",
                padding: "10px",
              },
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <AutoAwesomeIcon sx={{ width: "30px", height: "30px" }} />
            <Avatar
              sx={{ width: "60px", height: "60px" }}
              alt="foren-img"
              src="https://getwallpapers.com/wallpaper/full/4/4/8/151092.jpg"
            />
          </Typography>

          <MenuOpenOutlinedIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Searchbar>
            <InputBase
              placeholder="Search..."
              sx={{ color: mode ? "black" : "white" }}
            />
          </Searchbar>
          <Icon>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              alt="foren-img"
              src="https://wallpaperaccess.com/full/6413425.jpg"
              onClick={(e) => setOpen(true)}
            />
          </Icon>
          <UserBox>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              alt="foren-img"
              src="https://wallpaperaccess.com/full/6413425.jpg"
              onClick={(e) => setOpen(true)}
            />
            <Typography variant="h6">Raju</Typography>
          </UserBox>
        </Tool>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Link
            to={"/profile"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem>My account</MenuItem>
          {!isToken && (
            <Link
              to={"/regis"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>Registration</MenuItem>
            </Link>
          )}
          {!isToken && (
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>Login</MenuItem>
            </Link>
          )}
          {isToken && (
            <Link
              to={"/logout"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>Logout</MenuItem>
            </Link>
          )}
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
