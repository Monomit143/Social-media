import { configureStore } from "@reduxjs/toolkit";
import Api from "./Api";

const ApiStore = configureStore({
  reducer: {
    users: Api,
  },
});

export default ApiStore;
