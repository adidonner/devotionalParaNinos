import "./Libro.css";
import libroSrc from "../../../../src/Assets/images/Libro.png";

function Libro(): JSX.Element {
    return (
        <div className="Libro">
            <img src={libroSrc} alt=""/>
        </div>
    );
}

export default Libro;
