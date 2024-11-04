import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import InvoicePage from "../pages/Invoice.js";
import Layout from "../components/layout/layout.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<InvoicePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
