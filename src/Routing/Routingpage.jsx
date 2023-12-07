import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routing from "./Routing";
import Home from "../Pages/Home";
import Pages from "../Pages/Pages";
import Group from "../Pages/Group";
import Market from "../Pages/Market";
import Frined from "../Pages/Frined";
import Setting from "../Pages/Setting";
import Profile from "../Pages/Profile";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Logout from "../Pages/Logout";

const Routingpage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Routing />} />
          <Route path="home" element={<Home />} />
          <Route path="Pages" element={<Pages />} />
          <Route path="group" element={<Group />} />
          <Route path="marketplace" element={<Market />} />
          <Route path="friend" element={<Frined />} />
          <Route path="settings" element={<Setting />} />
          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="regis" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routingpage;
