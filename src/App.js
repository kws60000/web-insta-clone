import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
