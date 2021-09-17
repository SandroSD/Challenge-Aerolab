import React from "react";

import axios from "axios";

import Home from "./components/Home/Home";

import AppContextProvider from "./store/app-context";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App;
