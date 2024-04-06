import Header from "./sections/header";
import {useState} from "react";
import MainContent from "./sections/main_content";
import Sidebar from "./sections/header/sidebar";

function App() {

    return (
        <div>
            <Header/>
            <MainContent/>
        </div>
    );
}

export default App;