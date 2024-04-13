import style from './index.sass'
import Home from "./sections/home";
import About from "src/sections/main_content/sections/about";
import Portfolio from "src/sections/main_content/sections/portfolio";
import Skills from "src/sections/main_content/sections/skills";
import Education from "src/sections/main_content/sections/Education";
import Experience from "src/sections/main_content/sections/Experience";
import Contact from "src/sections/main_content/sections/contact";
import Widgets from "src/sections/main_content/sections/widgets";

function MainContent() {
    return (
        <div className={style.mainContent}>
            <Home/>
            <About/>
            <Portfolio/>
            <Skills/>

            <Widgets/>

            <Education/>
            <Experience/>
            <Contact/>
        </div>
    );
}

export default MainContent;