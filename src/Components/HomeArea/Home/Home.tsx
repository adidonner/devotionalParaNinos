// import ReactAudioPlayer from "react-audio-player";
import "./Home.css";
// import audioSong from "./Assets/audios/La transfiguracion.jpg"
import soundSource from "../../../Assets/audios/TeDareDescanso.mp4";


function Home(): JSX.Element {

  
    return (
        <div className="Home">
			<h2>DEVOCIONALES PARA NIÑOS</h2>
            <h2>Bienvenidos </h2>

            <table>
                <tr>
                    <td>28-02-2023:</td>
                    <td>La Transfiguracion</td>
            <audio src={soundSource} autoPlay controls></audio>

                    <td> 
                        {/* <audio controls>
                        <audio src="src\Components\HomeArea\Home\La-transfiguracion.ogg" controls/>

                        </audio> */}
                        {/* <ReactAudioPlayer
                        src="src/Components/HomeArea/Home/La-transfiguracion.ogg"
                        autoPlay
                        controls
                        /> */}
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Home;
