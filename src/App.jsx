import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Transaction from "./pages/Transactions";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import MainForm from "./Login/MainForm";
import { AuthProvider, useAuth } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="transactions" element={<Transaction />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
            <Route path="support" element={<Support />} />
          </Route>
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function LoginRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/" /> : <MainForm />;
}

function PrivateRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Layout /> : <Navigate to="/login" />;
}

export default App;
