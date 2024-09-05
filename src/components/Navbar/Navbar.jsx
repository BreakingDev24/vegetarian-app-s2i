import { NavLink } from "react-router-dom"
import logo from '../../assets/img/logo.png'
import style from './Navbar.module.css'
export default function Navbar(){
    return(
        <>
        <header>
            <nav className={`navbar fixed-top ${style.nav} `}> 
                <div className={style["logo-container"]}>
                    <img src={logo} alt="logo" />
                </div>
                
                <span>
                    <NavLink to="/" className={({ isActive }) => isActive ? style.activeLink : style.inactiveLink}><i className="bi bi-house-door-fill">Home</i></NavLink>
                </span>
                
            </nav>
      </header>
        </>
    )
}