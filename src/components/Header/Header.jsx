import './Header.scss'
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header id='header'>
            <div className='identite'>
                <p className='nom'>Peggy SOUTTRE</p>
                <p className='devWeb'>Développeuse Web</p>
            </div>
            <nav className='navbar'>
                <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    Accueil
                </NavLink>
                <NavLink to="/a-propos" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    A Propos de moi
                </NavLink>
                <NavLink to="/portfolio" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
                    Mes projets
                </NavLink>
            </nav>
        </header>
    )
}

export default Header

