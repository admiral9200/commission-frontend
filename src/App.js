import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CreateSale from "./pages/CreateSale";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllSales from "./pages/AllSales";
import ProfileSettings from "./pages/ProfileSettings";
import { useEffect } from "react";

function App() {

  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/auth/sign-in");
  // }, [])

  return (
    <div>
      <Routes>
        <Route path="/auth/sign-up" element={<Register />} />
        <Route path="/auth/sign-in" element={<Login />} />
        <Route path="/all-sales" element={<AllSales />} />
        <Route path="/create-a-sale" element={<CreateSale />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default App;
