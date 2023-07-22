import { BrowserRouter,  Routes, Route } from "react-router-dom";
import ReservaPage from "../pages/ReservaPage";


export const BaseRouter = ()=> {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1>Home Page</h1>}></Route>
                <Route path='/reserva' element={<ReservaPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};