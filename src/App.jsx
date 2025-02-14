import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Report } from "./pages/reports/Report";
import { Login } from "./pages/auth/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
