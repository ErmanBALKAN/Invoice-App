import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../styles/global";
import { SideBar } from "../components/sidebar/sidebar";



const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
     <SideBar/>
     
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;