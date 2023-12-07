import { ThemeProvider } from "@emotion/react";
import { Box, Stack, createTheme } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import "../StyleSeet/Style.css";
const Setting = () => {
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
              <div>
                <header className="header">
                  <h1>Settings</h1>
                </header>
                <div className="container">
                  <div className="sidebar">
                    <div className="sidebar__header">
                      <img
                        className="sidebar__avatar"
                        src="https://unsplash.it/30/?image=209"
                      />
                      <p>Babu VR 46</p>
                    </div>
                    <div className="sidebar__menu-item">
                      <i className="fa fa-university" />
                      Balance
                      <div className="sidebar__label">800</div>
                    </div>
                    <div className="sidebar__menu-item">
                      <i className="fa fa-bar-chart" />
                      Statistics
                    </div>
                    <div className="sidebar__menu-item sidebar__menu-item--active">
                      <i className="fa fa-cog" />
                      Settings
                    </div>
                    <div className="sidebar__menu-item">
                      <i className="fa fa-suitcase" />
                      Transactions
                    </div>
                    <div className="sidebar__menu-item">
                      <i className="fa fa-envelope-o" />
                      Help
                      <div className="sidebar__badge">3</div>
                    </div>
                    <div className="sidebar__menu-item">
                      <i className="fa fa-user-plus" />
                      Referals
                    </div>
                  </div>
                  <div className="main">
                    <div className="main__header">
                      <h2>Your Settings</h2>
                    </div>
                    <div className="main__content">
                      <div className="main__avatar">
                        <div className="main__avatar--overlay">Monomit Roy</div>
                      </div>
                      <div className="main__settings-form">
                        <form action="#" method="post">
                          <label className="main__input-label">
                            Your name:
                          </label>
                          <input
                            className="main__input"
                            placeholder="Monomit Roy"
                            type="text"
                          />
                          <label className="main__input-label">
                            Your e-mail:
                          </label>
                          <input
                            className="main__input"
                            placeholder="babu@gmail.com"
                            type="text"
                          />
                          <label className="main__input-label">
                            Your e-mail for notifications:
                          </label>
                          <input
                            className="main__input"
                            placeholder="monomit@gmail.com"
                            type="text"
                          />
                        </form>
                        <button className="btn main__save-button">Save</button>
                        <button className="btn main__cancel-button">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Setting;
