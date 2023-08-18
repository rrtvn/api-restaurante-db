//import {NavLink} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../Navbar/NavBar.css'

export const NavBar = () =>  {
  return (
    <nav className="uk-navbar-container" id='nav-container'>
    <div className="uk-container">
        <div className="uk-navbar">

            <div className="uk-navbar-center">

                <div className="uk-navbar-center-left">
                    <ul className="uk-navbar-nav" >
                        <NavLink to="/" className='home uk-active' >Inicio</NavLink>
                        <NavLink to="/carta" className='carta uk-active'>Carta</NavLink>
                        
                    </ul>
                </div>
                <img src='src/assets/logo1.png' className='logo-brand box' alt='logo'></img>              
                <div className="uk-navbar-center-right">
                    <ul className="uk-navbar-nav">
                        <NavLink to="/reserva" className='reserva uk-active'>Reserva</NavLink>
                        <NavLink to="/comoLlegar"  className='comoLlegar uk-active'>Como LLegar</NavLink>
                    </ul>
                </div>

            </div>

        </div>
    </div>
</nav>
    )
}


