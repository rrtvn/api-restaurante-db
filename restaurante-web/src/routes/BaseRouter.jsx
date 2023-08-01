
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import {ReservaPage} from "../pages/ReservaPage";
import { NavBar } from '../components/Navbar/NavBar';
import { CartaPage } from "../pages/CartaPage";
import {IndexPage} from '../pages/IndexPage';


export const BaseRouter = ()=> {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<IndexPage/>}></Route>
                <Route path='/carta' element={<CartaPage/>}></Route>
                <Route path='/reserva' element={<ReservaPage/>}></Route>
                <Route path='/comoLlegar' element={""}></Route>
            </Routes>
        </BrowserRouter>
    );
};