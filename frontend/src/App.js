import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './styles/main.css'
import './styles/index.css'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import RegisterPage from './pages/RegisterPage';
import OrdersPage from './pages/OrdersPage'
import OrderDetailsPage from './pages/OrderDetailsPage'

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

function App() {
  return (
    <div className="min-h-screen bg-orange-50 pb-20 App">
      <Navbar />
      <Router>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          } />
          <Route path="/orders" element={
            <RequireAuth>
              <OrdersPage />
            </RequireAuth>
          } />
          <Route path="/order/:id" element={
            <RequireAuth>
              <OrderDetailsPage />
            </RequireAuth>
          } />
        </Routes>
        <ToastContainer />
        <BottomBar />

      </Router>
    </div>
  );
}

export default App;
