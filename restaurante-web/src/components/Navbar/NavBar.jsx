//import {NavLink} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../Navbar/NavBar.css'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie';
import {  logoutUser } from '../../actions/authActions';

export const NavBar = () => {
    const dispatch = useDispatch();
    const token = useSelector((state)=> state.auth.token);

    const handleLogout = () => {
        Cookies.remove('token');
        dispatch(logoutUser())
    }
    return (
            <nav className="uk-navbar-container " id='nav-container'>
            <div className="uk-navbar">

                <div className="uk-navbar-center">

                    <div className="uk-navbar-center-left">
                        <ul className="uk-navbar-nav" >
                            <NavLink to="/" className='home uk-active' >Inicio</NavLink>
                            <NavLink to="/carta" className='carta uk-active'>Carta</NavLink>

                        </ul>
                    </div>
                    <img src='src/assets/Logos/logo1.png' className='logo-brand align-middle' alt='logo'></img>
                    <div className="uk-navbar-center-right">
                        <ul className="uk-navbar-nav">
                            <NavLink to="/reserva" className='reserva uk-active'>Reserva</NavLink>
                            <NavLink to="/comoLlegar" className='comoLlegar uk-active'>Como LLegar</NavLink>
                            {token && (
                                
                                <NavLink to="/" onClick={handleLogout} className='comoLlegar uk-active'>Cerrar Sesion</NavLink>
                            )

                            }
                        </ul>
                    </div>

                </div>

            </div>
        </nav>
    )
}


