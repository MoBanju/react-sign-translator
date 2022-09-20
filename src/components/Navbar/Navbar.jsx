import { NavLink } from "react-router-dom"
import { UseUser } from "../../context/UserContext"

const Navbar = () =>{

    const {user} = UseUser()
    return(
        <nav>
            <img className="header-left" src="img/Logo.png" alt="logo" width="180px"/>
            <h1>Lost in Translation</h1>
            { user !== null &&
            <ul className="header-list">
                <li className="img-name">
                    <NavLink to="/profile" className="profile-click-header header-clicks"> <img className="profile-pic" src="img/user.png" alt="logo" width="70px" /></NavLink>
                </li>
                <li>
                    <NavLink to="/translation" className="header-clicks header-translate">Translate</NavLink>
                </li>
            </ul>
            }
        </nav>
    )
}
export default Navbar