import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




import Token from "../pages/Token";
import Welcome from "../pages/Welcome";
import Register from "../pages/Register";
import AdminDashboard from "../pages/AdminDashboard";
import AdminLogin from "../pages/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/admin-login"
  element={<AdminLogin />}
/>
        <Route path="/" element={<Welcome/>} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/token"
          element={<Token/>}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;