import React from "react";

import axios from "axios";

import Home from "./components/Home/Home";

import AppContextProvider from "./store/app-context";

axios.defaults.baseURL = "http://localhost:8080";

function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App;
