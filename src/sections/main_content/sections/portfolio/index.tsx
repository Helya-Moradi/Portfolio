import Template from "src/sections/main_content/components/template";
import style from "./index.sass"
import Project from "src/sections/main_content/components/project";

import amiriImg from 'src/assets/images/projects/amiri.png'
import dashboardImg from 'src/assets/images/projects/dashboard.png'
import musicPlayerImg from 'src/assets/images/projects/music-player.png'
import ninjaMilImg from 'src/assets/images/projects/ninjamail.png'
import pinterestImg from 'src/assets/images/projects/pinterest.png'
import ticTacToeImg from 'src/assets/images/projects/tictactoe.png'
import todoImg from 'src/assets/images/projects/todo.png'
import weatherAppImg from 'src/assets/images/projects/weather-app.png'
import TriangleAnimation from "src/components/triangle";


function Portfolio() {

    const projects = [
        {img: dashboardImg, url: 'https://helya-moradi.github.io/Figma-Dashboard/'},
        {img: todoImg, url: 'https://helya-moradi.github.io/Todo-List/'},
        {img: musicPlayerImg, url: 'https://helya-moradi.github.io/Music-Player/'},
        {img: ninjaMilImg, url: 'https://helya-moradi.github.io/NinjaMail/'},
        {img: ticTacToeImg, url: 'https://helya-moradi.github.io/Tic-Tac-Toe/'},
        {img: amiriImg, url: 'https://helya-moradi.github.io/AMIRI/'},
        {img: weatherAppImg, url: 'https://helya-moradi.github.io/Weather-App/'},
        {img: pinterestImg, url: 'https://helya-moradi.github.io/Pinterest-Simulation/'}
    ]

    return (
        <div className={style.portfolioContainer}>
            <Template title='Portfolio' color='darkPurple' direction='rtl'>
                <div className={style.portfolio}>
                    <div className={style.projects}>
                        {
                            projects.map((project, index) => (
                                <Project key={`project-${index+1}`} img={project.img} url={project.url}/>
                            ))
                        }
                    </div>
                    <div className={style.loadMoreButton}>
                        {/*TODO: add projects link*/}
                        <a href="#">
                            load more
                        </a>
                    </div>
                </div>
            </Template>

            <TriangleAnimation left={-7} top={2}/>

        </div>
    );
}

export default Portfolio