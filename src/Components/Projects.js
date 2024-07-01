import tic from "./Images/TicTacToe.png";
import wea from "./Images/Weather.png";

function Projects() {
    return (
        <div id="projects" className="projects">
            <h3>Projects</h3>
            <div className="proj">
                <a href="https://hexzenberg.github.io/Weather-App/" target="_blank" rel="noopener noreferrer" className="project-card">
                    <h4>Weather App</h4>
                    <img src={wea} alt="Skin Cancer Classification SS" />
                </a>
                <a href="https://github.com/Hexzenberg/minor_project" target="_blank" rel="noopener noreferrer" className="project-card">
                    <h4>Skin Cancer Classification</h4>
                    <p>Made four CNN models with increasing complexity using the</p>
                    <p>sequential API and the functional API from Tensorflow(Keras).</p>
                    <p>Ensembled all the models to get better accuracy.</p>
                </a>
                <a href="https://hexzenberg.github.io/TicTacToe/" target="_blank" rel="noopener noreferrer" className="project-card">
                    <h4>Tic Tac Toe</h4>
                    <img src={tic} alt="Tic Tac Toe SS" />
                </a>
            </div>
        </div>
    );
}

export default Projects;
