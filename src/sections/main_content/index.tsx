import style from './index.sass'
import Home from "./sections/home";
import About from "src/sections/main_content/sections/about";

function MainContent() {
    return (
        <div className={style.mainContent}>
            <Home/>
            <About/>
        </div>
    );
}

export default MainContent;