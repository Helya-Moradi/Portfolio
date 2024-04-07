import style from './index.sass'
import Home from "./sections/home";
import About from "src/sections/main_content/sections/about";
import Portfolio from "src/sections/main_content/sections/portfolio";
import Skills from "src/sections/main_content/sections/skills";
import Education from "src/sections/main_content/sections/Education";
import Experience from "src/sections/main_content/sections/Experience";
import Contact from "src/sections/main_content/sections/contact";
import Widget from "src/sections/main_content/components/widget";
import secureImg from 'src/assets/images/widgets/icon_secure.png';
import preciseImg from 'src/assets/images/widgets/icon_preciese.png';
import responsiveImg from 'src/assets/images/widgets/icon_responsive.png';

function MainContent() {
    return (
        <div className={style.mainContent}>
            <Home/>
            <About/>
            <Portfolio/>
            <Skills/>

            <div className={style.widgets}>
                <Widget image={preciseImg} color='lightPurple' text='pixel precise'/>
                <Widget image={secureImg} color='pink' text='secure'/>
                <Widget image={responsiveImg} color='darkPurple' text='responsive'/>
            </div>

            <Education/>
            <Experience/>
            <Contact/>
        </div>
    );
}

export default MainContent;