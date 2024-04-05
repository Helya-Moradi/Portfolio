import React from 'react';
import style from './index.sass'
import Home from "./components/home";

function MainContent() {
    return (
        <div className={style.mainContent}>
            <Home/>
        </div>
    );
}

export default MainContent;