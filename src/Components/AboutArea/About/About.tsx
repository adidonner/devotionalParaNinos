import Libro from "../../LayoutArea/Libro/Libro";
import "./About.css";
function About(): JSX.Element {
    return (
        <div className="About">
			<h5>Somos la familia Adi, Isabel y Mijah Donner con la sierva Yael Lahat</h5>
			<h5>que contribuyo mas de veinte años para la obra en Perú. </h5>
			<h5>Ahora vivimos en Israel y apesar de la distancia fisica...  </h5>
			<h5>queremos seguir expresar nuestro amor y cariño hacia los niños </h5>
			<h5>de Perú, America Latina y en todos los países </h5>
			<h5>Donde niños hablan español y quieren </h5>
			<h5>escuchar la historias y eñseñanzas mas facinantes y sabias de</h5>
            <h4>La Biblia <Libro /></h4>
        
            
        </div>
    );
}

export default About;
