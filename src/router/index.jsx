import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { GlobalStyle } from "../styles/global";
import { SideBar } from "../components/sidebar/sidebar";
import Header from "../components/header/header";
import MainContainer from "../components/main/main";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
