import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <Logo />
			<NavLink to="/home">Pagina Principal</NavLink>

            <span> | </span>

            <NavLink to="/about">Sobre Nosotros</NavLink>

        </div>
    );
}

export default Menu;
