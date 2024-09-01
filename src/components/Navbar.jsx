import { NavLink } from "react-router-dom"

export default function Navbar(){
    return(
        <>
        <header>
            <nav className="navbar"> 
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                </ul>
            </nav>
      </header>
        </>
    )
}