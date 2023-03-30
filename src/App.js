import { Route, Routes } from "react-router-dom";
import "./App.css";
import ForgetPass from "./components/ForgetPass";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { Homepage } from "./pages/homepage";
import ProtectedRoutes from "./services/protectedRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProtectedRoutes />}>
                    <Route path="/" element={<Homepage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forget-password" element={<ForgetPass />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
