import "./Logo.css";
import logoSrc from "../../../../src/Assets/images/Logo.jpg";

function Logo(): JSX.Element {
    return (
        <div className="Logo">
			<img src={logoSrc} alt=""/>
        </div>
    );
}

export default Logo;
