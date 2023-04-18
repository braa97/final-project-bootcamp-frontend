import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Apartments from "./components/ApartmentsPage/Apartments";
import Residents from "./components/ResidentsPage/Residents";
import ResidentInfoPage from "./components/ResidentInfoPage/ResidentInfoPage";
import ServerError from "./components/ServerError/ServerError";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import ApiManager from "./apiManager/apiManager";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient()
  // const [isServerOnline, setIsServerOnline] = useState(false)
  // const navigate = useNavigate()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Dashboard/>} /> */}
          <Route path="/" element={<Apartments />} />
          <Route path="/residents/:apartmentName" element={<Residents />} />
          <Route path="/resident/:residentId" element={<ResidentInfoPage />} />
          <Route path="/server-error" element={<ServerError />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
