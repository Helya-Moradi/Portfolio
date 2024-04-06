import style from './index.sass'
import Home from "./sections/home";

function MainContent() {
    return (
        <div className={style.mainContent}>
            <Home/>
        </div>
    );
}

export default MainContent;