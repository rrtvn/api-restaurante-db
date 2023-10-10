
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReservaPage } from "../pages/ReservaPage";
import { NavBar } from '../components/Navbar/NavBar';
import { CartaPage } from "../pages/CartaPage";
import { IndexPage } from '../pages/IndexPage';
import { FooterContent } from "../components/Footer/FooterContent";
import { AgregarPlato } from "../pages/AgregarPlato";
import { LoginPage } from "../pages/LoginPage";
import { ComoLlegar } from "../pages/ComoLlegar";
import { AuthProvider } from "../context/authContext";




export const BaseRouter = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<IndexPage />}></Route>
                    <Route path='/carta' element={<CartaPage />}></Route>
                    <Route path='/reserva' element={<ReservaPage />}></Route>
                    <Route path='/comoLlegar' element={<ComoLlegar />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/addPlato' element={<AgregarPlato />}></Route>
                    
                </Routes>
                <FooterContent />
            </BrowserRouter>
        </AuthProvider>
    );
};