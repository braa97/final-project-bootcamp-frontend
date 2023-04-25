import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Apartments from "./components/ApartmentsPage/Apartments";
import Residents from "./components/ResidentsPage/Residents";
import ResidentInfoPage from "./components/ResidentInfoPage/ResidentInfoPage/ResidentInfoPage";
import ServerError from "./components/ServerError/ServerError";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import ApiManager from "./apiManager/apiManager";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import GoogleButton from "./components/GoogleLogin/GoogleButton";
import SignIn from "./components/SignIn/SignIn";
import CoordinatorHome from "./components/Coordinator_Dashboard/Coordinator_Home/CoordinatorHome";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Dashboard/>} /> */}
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/residents/:apartmentName" element={<Residents />} />
          <Route path="/resident/:residentId" element={<ResidentInfoPage />} />
          <Route path="/server-error" element={<ServerError />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<SignIn />} />
          <Route path="/:instructorId/dashboard" element={<Dashboard />} />
          <Route path="/apartments/:instructorId" element={<Apartments />} />
          <Route
            path="/Coordinator/dashboard/:id"
            element={<CoordinatorHome />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
