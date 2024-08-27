import { NavLink } from "react-router-dom"

export default function Navbar(props){
    const {onSubmit, value, onChange} = props
    return(
        <>
        <header>
            <nav>
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